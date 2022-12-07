import React from "react";

import { ZoomMtg } from "@zoomus/websdk";
import { useRouter } from "next/router";

ZoomMtg.setZoomJSLib("https://source.zoom.us/2.9.5/lib", "/av");

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
// loads language files, also passes any error messages to the ui
ZoomMtg.i18n.load("en-US");
ZoomMtg.i18n.reload("en-US");

function ReimagineConference() {
  const router = useRouter();

  const { meeting_number, email } = router.query;

  if (!meeting_number || !email) {
    return <div>loading...</div>;
  }

  var signatureEndpoint = "https://api.bizpotta.com/api/learners/zoom-signature";
  var sdkKey = process.env.NEXT_PUBLIC_ZOOM_SDK_KEY;
  var meetingNumber = "123456789";
  var role = 0;
  var leaveUrl = "https://bizpotta.com";
  var userName = "David";
  var userEmail = "";
  var passWord = "";
  var registrantToken = "";

  fetch("https://api.bizpotta.com/api/learners/zoom-toke ", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      webinar_id: meeting_number,
      email: email,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      registrantToken = data.token;
    });

  function getSignature(e) {
    e.preventDefault();

    fetch(signatureEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        meeting_number: meetingNumber,
        role: role,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        startMeeting(response.signature);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function startMeeting(signature) {
    document.getElementById("zmmtg-root").style.display = "block";

    ZoomMtg.init({
      leaveUrl: leaveUrl,
      success: (success) => {
        console.log(success);

        ZoomMtg.join({
          signature: signature,
          meetingNumber: meetingNumber,
          userName: userName,
          sdkKey: sdkKey,
          userEmail: userEmail,
          passWord: passWord,
          tk: registrantToken,
          success: (success) => {
            console.log(success);
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  return (
    <main>
      <h1>Reimagining Africa&apos;s Future</h1>

      <button onClick={getSignature}>Join Meeting</button>
    </main>
  );
}

export default ReimagineConference;
