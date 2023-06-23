/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from "react";
import Dropzone from "react-dropzone";

const ImageUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleDrop = (acceptedFiles) => {
    // Filter out files that exceed the size limit
    const filteredFiles = acceptedFiles.filter(
      (file) => file.size <= 1048576 && selectedFiles.length < 4
    );

    setSelectedFiles((prevFiles) => [...prevFiles, ...filteredFiles]);
  };

  const handleRemove = (index) => {
    setSelectedFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
  };

  return (
    <div>
      <Dropzone onDrop={handleDrop} accept="image/*" multiple>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
              {selectedFiles.length === 4 ? (
                <p
                  style={{
                    "text-decoration": "underline",
                    color: "red",
                  }}
                >
                  Maximum number of files selected
                </p>
              ) : (
                <p>
                  Drag and drop image (maxium 4), or <br />
                  <p
                    style={{
                      "text-decoration": "underline",
                      cursor: "pointer",
                      "margin-top": "-1px",
                    }}
                  >
                    {" "}
                    Click to Browse Image
                  </p>
                </p>
              )}
          </div>
        )}
      </Dropzone>

      {selectedFiles.length > 0 && (
        <div>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  style={{ width: "100px", height: "auto" }}
                />
                <p>
                  {file.name} - {Math.round(file.size / 1024)} KB
                </p>
                <button onClick={() => handleRemove(index)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <h5
          style={{
            "font-size": "14px",
            color: "#009688",
            "font-weight": "700",
            "margin-bottom": "20px",
          }}
        >
          Image Upload
          <h7 style={{ color: "red" }}>(Max file size 1 MB.)</h7>
        </h5>
      </div>
    </div>
  );
};

export default ImageUploader;
