import { useCallback, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import { getToken } from "utils";

const UploadVideo = ({ video_title, url, setUrl }) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const token = getToken();
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (rejectedFiles.length > 0) {
      console.error("Invalid file type. Please upload a video file.");
      return;
    }

    const file = acceptedFiles[0];
    console.log(file);

    fetch(
      process.env.NEXT_PUBLIC_REACT_APP_API_URL + "/creators/upload-video",
      {
        method: "POST",
        body: JSON.stringify({
          video_title: video_title,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((uploadCreds) => {
        console.log(uploadCreds);
        const data = uploadCreds.data["clientPayload"];
        const key = uploadCreds.data["videoId"];

        const formData = new FormData();
        formData.append("x-amz-credential", data["x-amz-credential"]);
        formData.append("x-amz-algorithm", data["x-amz-algorithm"]);
        formData.append("x-amz-date", data["x-amz-date"]);
        formData.append("x-amz-signature", data["x-amz-signature"]);
        formData.append("key", data["key"]);
        formData.append("policy", data["policy"]);
        formData.append("success_action_status", "201");
        formData.append("success_action_redirect", "");
        formData.append("file", file); // Append the actual file

        // Perform the actual file upload using XMLHttpRequest
        const xhr = new XMLHttpRequest();
        xhr.upload.addEventListener("progress", (event) => {
          const percentComplete = (event.loaded / event.total) * 100;
          setUploadProgress(percentComplete);
        });

        xhr.open("POST", data.uploadLink, true);
        xhr.send(formData);

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 201) {
              console.log("File uploaded successfully");
              setUrl(key);
              toast.success("Video uploaded successfully");
            } else {
              console.error("Error uploading file:", xhr.statusText);
            }
          }
        };
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }, []);

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    isDragActive,
    fileRejections,
  } = useDropzone({
    onDrop,
    accept: {
      "video/mp4": "video/mp4",
      "video/x-m4v": "video/x-m4v",
      "video/*": "video/*",
    },
    maxFiles: 1,
  });

  // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );
  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    return (
      <li key={file.path}>
        {file.path} - {file.size} bytes
        <ul>
          {errors.map((e) => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </li>
    );
  });
  return (
    <>
      <div
        {...getRootProps({ style })}
        className={`dropbox container ${isDragActive ? "active" : ""}`}>
        <input {...getInputProps()} />
        <p>Drag and drop video here, or click to select files</p>
      </div>
      {uploadProgress > 0 && (
        <div>
          <p>Upload Progress: {uploadProgress.toFixed(2)}%</p>
          <progress value={uploadProgress} max='100'></progress>
        </div>
      )}
      {isDragReject && (
        <div style={{ color: "#000", marginTop: "10px" }}>
          Invalid file type. Please upload a video file.
        </div>
      )}

      {fileRejectionItems.length > 0 && (
        <section>
          <h4>Rejected files</h4>
          <ul>{fileRejectionItems}</ul>
        </section>
      )}
    </>
  );
};

export default UploadVideo;

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  height: "100px",
  justifyContent: "center",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};
