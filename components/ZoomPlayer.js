// // import { useEffect } from "react";
// // import { ZoomMtg } from "@zoomus/websdk";

// // const ZoomPlayer = ({ meetingNumber, passWord, userName, userEmail }) => {
// //   const signatureEndpoint = "/api/signature";

// //   const apiKey = process.env.NEXT_PUBLIC_ZOOM_SDK_KEY;
// //   const role = 0;
// //   const leaveUrl = process.env.NEXT_PUBLIC_CURRENT_DOMAIN;

// //   useEffect(() => {
// //     ZoomMtg.setZoomJSLib("https://source.zoom.us/2.9.5/lib", "/av");
// //     ZoomMtg.preLoadWasm();
// //     ZoomMtg.prepareJssdk();
// //   }, []);

// //   function getSignature(e) {
// //     e.preventDefault();

// //     fetch(signatureEndpoint, {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({
// //         meetingNumber: meetingNumber,
// //         role: role,
// //       }),
// //     })
// //       .then((res) => res.json())
// //       .then((response) => {
// //         startMeeting(response.signature);
// //       })
// //       .catch((error) => {
// //         console.error(error);
// //       });
// //   }

// //   function startMeeting(signature) {
// //     document.getElementById("zmmtg-root").style.display = "block";

// //     ZoomMtg.init({
// //       leaveUrl: leaveUrl,
// //       isSupportAV: false,
// //       success: (success) => {
// //         console.log("zoom success", success);

// //         ZoomMtg.join({
// //           signature: signature,
// //           meetingNumber: meetingNumber,
// //           userName: userName,
// //           apiKey: apiKey,
// //           userEmail: userEmail,
// //           passWord: passWord,
// //           success: (success) => {
// //             console.log(success);
// //           },
// //           error: (error) => {
// //             console.log(error);
// //           },
// //         });
// //       },
// //       error: (error) => {
// //         console.log("zoom error", error);
// //       },
// //     });
// //   }

// //   return (
// //     <div>
// //       <h1>Zoom WebSDK Sample React</h1>
// //       <button onClick={getSignature}>Join Meeting</button>
// //     </div>
// //   );
// // };

// // export default ZoomPlayer;

// import React from "react";
// import { useRouter } from "next/router";
// import { ZOOM_JWT_API_KEY, ZOOM_JWT_API_SECRET } from "../constants/common";

// // SDK styles
// import "node_modules/@zoomus/websdk/dist/css/bootstrap.css";
// import "node_modules/@zoomus/websdk/dist/css/react-select.css";

// const ZoomPlayer = () => {
//   const { query } = useRouter();
//   const { meeting_number: mn, email: email, password: pwd, userName: name, role = 0, lang = "en-US", china = 0 } = query;

//   const [zoomModule, setZoomModule] = React.useState(null);

//   React.useEffect(() => {
//     if (zoomModule) {
//       onInitHandle();
//     }
//   }, [zoomModule]);

//   React.useEffect(() => {
//     loadZoomMeeting();
//   }, []);

//   const loadZoomMeeting = async () => {
//     await import("@zoomus/websdk").then(async (module) => {
//       try {
//         let module2 = await prepareLoadingWebSDK(module);
//         console.log("module2: ", module2);
//         setZoomModule(module2);
//       } catch (error) {
//         console.error("loadZoomMeeting: ", error);
//         // window.location.href = "/"
//       }
//     });
//   };

//   const onInitHandle = () => {
//     console.log("window.location.origin: ", window.location.origin);

//     zoomModule.init({
//       leaveUrl: `${window.location.origin}/thank-you`,
//       isSupportAV: true,
//       screenShare: true,
//       disablePreview: true,
//       success: (initResponse) => {
//         console.log("initResponse: ", initResponse);
//         zoomModule.generateSignature({
//           meetingNumber: mn.trim(),
//           apiKey: ZOOM_JWT_API_KEY,
//           apiSecret: ZOOM_JWT_API_SECRET,
//           role: role,
//           success: function (res) {
//             let signature = res.result;
//             console.log("signature: ", signature);
//             // Join meeting
//             zoomModule.join({
//               meetingNumber: mn.trim(),
//               userName: name,
//               userEmail: email,
//               passWord: pwd.trim(),
//               apiKey: ZOOM_JWT_API_KEY,
//               signature: signature,
//               success: function (res) {
//                 console.log("join meeting success");
//                 console.log("get attendeelist");
//                 zoomModule.getAttendeeslist({});
//                 zoomModule.getCurrentUser({
//                   success: function (res) {
//                     console.log("success getCurrentUser", res.result.currentUser);
//                   },
//                 });

//                 zoomModule.inMeetingServiceListener("onUserJoin", function (data) {
//                   console.log("inMeetingServiceListener onUserJoin", data);
//                 });

//                 zoomModule.inMeetingServiceListener("onUserLeave", function (data) {
//                   console.log("inMeetingServiceListener onUserLeave", data);
//                 });

//                 zoomModule.inMeetingServiceListener("onUserIsInWaitingRoom", function (data) {
//                   console.log("inMeetingServiceListener onUserIsInWaitingRoom", data);
//                 });

//                 zoomModule.inMeetingServiceListener("onMeetingStatus", function (data) {
//                   console.log("inMeetingServiceListener onMeetingStatus", data);
//                 });
//               },
//               error: function (res) {
//                 console.log("Joining Error: ", res);
//               },
//             });
//           },
//           error: (err) => {
//             console.error("Error while generating Signature", err);
//           },
//         });
//       },
//       error: (initError) => {
//         console.error("initError: ", initError);
//       },
//     });
//   };

//   const prepareLoadingWebSDK = async (module) => {
//     let ZoomMtg = module.ZoomMtg;
//     await ZoomMtg.setZoomJSLib("https://source.zoom.us/2.9.5/lib", "/av");
//     await ZoomMtg.preLoadWasm();
//     await ZoomMtg.prepareWebSDK();
//     ZoomMtg.i18n.load(lang);
//     ZoomMtg.i18n.reload(lang);
//     ZoomMtg.reRender({ lang: lang });
//     return ZoomMtg;
//   };

//   return <>Loading...</>;
// };
// export default ZoomPlayer;
