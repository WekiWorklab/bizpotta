import React, { useState } from "react";
import { useTus } from "use-tus";
import axios from "axios";

const accessToken = "4023897d1640961fefd19ed29dd742b2";

const headerDelete = {
  Accept: "application/vnd.vimeo.*+json;version=3.4",
  Authorization: `bearer ${accessToken}`,
  "Content-Type": "application/x-www-form-urlencode",
};

const headerPatch = {
  "Tus-Resumable": "1.0.0",
  "Upload-Offset": 0,
  "Content-Type": "application/offset+octet-stream",
  Accept: "application/vnd.vimeo.*+json;version=3.4",
};

const headerPost = {
  Accept: "application/vnd.vimeo.*+json;version=3.4",
  Authorization: `bearer ${accessToken}`,
  "Content-Type": "application/json",
};

function Test() {
  const [videoUrl, setVideoUrl] = useState("");
  const { upload, isUploading, uploadProgress, error } = useTus({
    endpoint: "https://api.vimeo.com/me/videos",
    headers: headerPost,
  });
  const handleChange = async (eventObject) => {
    // Get the selected file from the input element

    const file = eventObject.target.files[0];
    const fileName = file.name;
    const fileSize = file.size.toString();
    console.log(file, fileName, fileSize);

    const response = await axios({
      method: "post",
      url: `https://api.vimeo.com/me/videos`,
      headers: headerPost,
      data: {
        upload: {
          approach: "tus",
          size: fileSize,
        },
      },
    });

    console.log(response);

    // Create a new tus upload

    const TusUpload = upload(file, {
      uploadUrl: response.data.upload.upload_link,
      retryDelays: [0, 3000, 5000, 10000, 20000],
      metadata: {
        filename: file.name,
        filetype: file.type,
      },
      headers: {},
      onError: function (error) {
        console.log("Failed because: " + error);
      },
      onProgress: function (bytesUploaded, bytesTotal) {
        let percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
        console.log(bytesUploaded, bytesTotal, percentage + "%");
      },
      onSuccess: function () {
        console.log("Download %s from %s", upload.file.name, upload.url);
        setVideoUrl(upload.url);
      },
    });

    // Start the upload
    TusUpload.start();
  };

  return (
    <>
      <div> Vimeo upload test</div>
      <input onChange={handleChange} type='file' />
      <a href={videoUrl}>Video link</a>
    </>
  );
}

export default Test;
