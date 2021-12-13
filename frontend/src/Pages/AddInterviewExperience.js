import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import styles from "../assets/css/Editor.module.css";
import "../assets/css/Editor.module.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
// import { BASE_URL } from "../../../env";
const BASE_URL = "http://localhost:5000";

const Editor = () => {
  const history = useHistory();

  if (localStorage.token === "" || localStorage.token === undefined) {
    history.push("/signin");
  }


  const [text, setText] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [loader, setLoader] = useState(false);
  const [_id, setUserID] = useState("");
  // const [value, setValue] = useState("");
  const [topic, setTopic] = useState("Choose the Topic of Blog");
  const handleSelectDrop = (e) => {
    // setValue(e);
    setTopic(e);
  };
  
  function handleChange(value) {
    setText(value);
  }
  const [id, setID] = useState("");
  async function handleSubmit(event) {
    if (id !== "") {
      event.preventDefault();
      setLoader(true);
      let imageFile;
      const title = document.querySelector("#title").value;
      const author = document.querySelector("#author").value;

      const image = document.querySelector("#upload-file");

      if (
        title === "" ||
        author === "" ||
        image.files.length === 0 ||
        text === "" ||
        topic === ""
      ) {
        setInvalid(true);
        setLoader(false);
        return;
      }

      if (image.files.length !== 0) {
        imageFile = image.files[0];
      }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("body", text);
      formData.append("author", author);
      formData.append("_id", _id);
      formData.append("blog_image", imageFile);
      formData.append("topic", topic);
      formData.append("newid", id);

      axios
        .post(BASE_URL + "/addBlog", formData)
        .then((response) => {
          setLoader(false);
          history.push("/blog");
        })
        .catch((err) => {
          alert("Error on Uploading blog");
          setLoader(false);
        });
    } else {
      alert("please enter a unique id");
    }
  }

  var toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];
  const modules = {
    toolbar: toolbarOptions,
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
      <div>
          <Navbar />
    <div className={styles.editorContain}>
      <div style={{ marginLeft: "5%" }}>
        <div class={styles.blogText}>
          <br />
          <h1>Add Interview Experience! </h1>
        </div>
        <div class={styles.formgroup}>
          <input
            type="text"
            class={styles.formcontrol}
            id="title"
            placeholder="Title"
            required
          />
        </div>
        <div class={styles.formgroup}>
          <input
            type="text"
            class={styles.formcontrol}
            id="author"
            placeholder="Author"
            required
          />
        </div>

        {/* <h4>You selected {value}</h4> */}
        {/* <DragDrop /> */}
        <div className={styles.browse}>
          <label className="pl-3 pt-3" htmlFor="upload-photo">
            Browse...
          </label>
          <input
            className="ml-3"
            style={{ backgroundColor: "#e2e6e9", width: "15em" }}
            type="file"
            name="photo"
            id="upload-file"
          />
        </div>

        <div className="my-3 ">
          <label htmlFor="blogid">Enter a unique id</label>
          <input
            style={{ width: "50%" }}
            placeholder="Enter a unique ID please"
            name="blogid"
            type="text"
            value={id}
            onChange={(e) => {
              setID(e.target.value);
            }}
            className="form-control m-0"
            required
          />
        </div>
        <div>
          <ReactQuill
            className={styles.editorBox}
            theme="snow"
            value={text}
            onChange={handleChange}
            modules={modules}
            formats={formats}
          />
        </div>
        {invalid === false ? null : (
          <p style={{ color: "red" }}>Required fields are missing</p>
        )}

        {loader === false ? (
          <button class={styles.registerbtn} onClick={handleSubmit}>
            Submit
          </button>
        ) : (
          <button class={styles.registerbtn}>Loading...</button>
        )}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Editor;
