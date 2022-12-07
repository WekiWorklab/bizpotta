import React from "react";
import { useRouter } from "next/router";
import { ZOOM_JWT_API_KEY, ZOOM_JWT_API_SECRET } from "../../constants/common";
import { toKeyName } from "is-hotkey";
import { FullPageSpinner } from "../../components/Lib";
import Head from "next/head";

const Meeting = () => {
  const { query } = useRouter();
  const { meeting_number: mn, email: email, password: pwd, userName: name, role = 0, lang = "en-US", china = 0, token } = query;
  const SIGNATURE_ENDPOINT = "https://api.bizpotta.com/api/learners/zoom-signature";
  const [zoomModule, setZoomModule] = React.useState(null);

  React.useEffect(() => {
    if (zoomModule) {
      onInitHandle();
    }
  }, [zoomModule]);

  React.useEffect(() => {
    loadZoomMeeting();
  }, []);

  const loadZoomMeeting = async () => {
    await import("@zoomus/websdk").then(async (module) => {
      try {
        let module2 = await prepareLoadingWebSDK(module);
        setZoomModule(module2);
      } catch (error) {
        console.error("loadZoomMeeting: ", error);
        // window.location.href = "/"
      }
    });
  };

  const onInitHandle = () => {
    console.log("window.location.origin: ", window.location.origin);

    zoomModule.init({
      leaveUrl: `${window.location.origin}/thank-you`,
      isSupportAV: true,
      disablePreview: true,
      success: (initResponse) => {
        console.log("initResponse: ", initResponse);
        fetch(SIGNATURE_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            meeting_number: mn.trim(),
            role: role,
          }),
        })
          .then((res) => res.json())
          .then((response) => {
            let signature = response.data;
            console.log("signature: ", signature);
            // Join meeting
            zoomModule.join({
              meetingNumber: mn.trim(),
              userName: name,
              userEmail: email,
              passWord: pwd.trim(),
              sdkKey: ZOOM_JWT_API_KEY,
              tk: token,
              signature: signature,
              success: function (res) {
                console.log("join meeting success");
                console.log("get attendeelist");
                zoomModule.getAttendeeslist({});
                zoomModule.getCurrentUser({
                  success: function (res) {
                    console.log("success getCurrentUser", res.result.currentUser);
                  },
                });

                zoomModule.inMeetingServiceListener("onUserJoin", function (data) {
                  console.log("inMeetingServiceListener onUserJoin", data);
                });

                zoomModule.inMeetingServiceListener("onUserLeave", function (data) {
                  console.log("inMeetingServiceListener onUserLeave", data);
                });

                zoomModule.inMeetingServiceListener("onUserIsInWaitingRoom", function (data) {
                  console.log("inMeetingServiceListener onUserIsInWaitingRoom", data);
                });

                zoomModule.inMeetingServiceListener("onMeetingStatus", function (data) {
                  console.log("inMeetingServiceListener onMeetingStatus", data);
                });
              },
              error: function (res) {
                console.log(res);
              },
            });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },
      error: (initResponse) => {
        console.log("initResponse: ", initResponse);
      },
    });
  };

  const prepareLoadingWebSDK = async (module) => {
    let ZoomMtg = module.ZoomMtg;
    await ZoomMtg.setZoomJSLib("https://source.zoom.us/2.9.5/lib", "/av");
    await ZoomMtg.preLoadWasm();
    await ZoomMtg.prepareWebSDK();
    ZoomMtg.i18n.load(lang);
    ZoomMtg.i18n.reload(lang);
    return ZoomMtg;
  };

  return (
    <>
      <Head>
        <title key='title'>BizPotta - Reimagining Africa’s Future</title>
        <link type='text/css' rel='stylesheet' href='https://source.zoom.us/2.9.5/css/bootstrap.css' />
        <link type='text/css' rel='stylesheet' href='https://source.zoom.us/2.9.5/css/react-select.css' />
      </Head>

      <FullPageSpinner />
    </>
  );
};
export default Meeting;
