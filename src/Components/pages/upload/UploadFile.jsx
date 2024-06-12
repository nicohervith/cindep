import React, { useState } from "react";
import axios from "axios";
import styles from "./styles.module.scss";
import TextField from "@mui/material/TextField";
import { TextareaAutosize } from "@mui/material";
import Navbar from "../navbar/Navbar";

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("video", file);
    formData.append("title", title);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("tags", tags);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/video/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            let percent = Math.floor((loaded * 100) / total);
            setProgress(percent);
          },
        }
      );
      console.log("Upload successful:", response.data);
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  return (
    <>
      <div className={styles.uploadContainer}>
        <div className={styles.navBarContainer}>
          <Navbar />
        </div>
        <br />
        <br />
        <div className={styles.mainUploadContainer}>
          <div
            className={styles.uploadBox}
            style={{
              margin: "0 auto",
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "10px",
            }}
          >
            <div className={styles.uploadVideo}>
              <h2>Upload Video</h2>
              <div style={{ marginBottom: "10px" }}>
                <input type="file" onChange={handleFileChange} />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <h4>Choose image</h4>
                <input type="file" onChange={handleImageChange} />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <div className={styles.inputContainer}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Title"
                    value={title}
                    type="text"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <textarea
                    className={styles.textarea}
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{
                      padding: "10px",
                    }}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Tags"
                    type="text"
                    placeholder="Tags (comma separated)"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                  />
                </div>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <button
                  onClick={handleUpload}
                  style={{ padding: "10px 20px", cursor: "pointer" }}
                >
                  Upload
                </button>
              </div>
              {progress > 0 && (
                <div style={{ marginTop: "20px" }}>
                  <div style={{ height: "10px", background: "#ccc" }}>
                    <div
                      style={{
                        height: "10px",
                        width: `${progress}%`,
                        background: "#4caf50",
                        transition: "width 0.5s",
                      }}
                    ></div>
                  </div>
                  <div style={{ textAlign: "center", marginTop: "10px" }}>
                    {progress}%
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadFile;
