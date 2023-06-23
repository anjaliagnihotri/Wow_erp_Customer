import React, { useState } from "react";
import Dropzone from "react-dropzone";

const VideoUploader = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleDrop = (acceptedFiles) => {
    const video = acceptedFiles.find((file) => file.size <= 5242880); // 5 MB (5 * 1024 * 1024 bytes)
    if (video) {
      setSelectedVideo(video);
    }
  };

  const handleRemove = () => {
    setSelectedVideo(null);
  };

  return (
    <div>
      <Dropzone onDrop={handleDrop} accept="video/*" multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {!selectedVideo ? (
              <p>
                Drag and drop video file (max size : 5 Mb), or <br />
                <p
                  style={{
                    "text-decoration": "underline",
                    cursor: "pointer",
                    "margin-top": "-1px",
                  }}
                >
                  {" "}
                  Click to Browse Video
                </p>
              </p>
            ) : (
              <p
                style={{
                  "text-decoration": "underline",
                  color: "red",
                }}
              >
                Video selected
              </p>
            )}
          </div>
        )}
      </Dropzone>

      {selectedVideo && (
        <div>
          <p style = {{"font-size": "14px","margin-top": "10px",}}>{selectedVideo.path}</p>
          <button onClick={handleRemove}>Remove</button>
        </div>
      )}
      <div>
        <h5
          style={{
            "font-size": "14px",
            color: "#009688",
            "font-weight": "700",
            "margin-top": "20px",
          }}
        >
          Video Upload
          <h7 style={{ color: "red" }}>(Max file size 5 MB.)</h7>
        </h5>
      </div>
    </div>
  );
};

export default VideoUploader;
