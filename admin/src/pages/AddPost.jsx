import React, { useState, useRef, useEffect } from "react";
import { url } from "../App";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const AddPost = () => {
  const [img, setImg] = useState(null);
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    category: "",
    popular: false,
  });

  const modules = {
    toolbar: {
      container: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        [{ align: [] }],
        [{ color: [] }, { background: [] }],
        ["link", "image"],
        ["clean"],
      ],
    },
  };

  const quillRef = useRef(null);

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      editor.root.setAttribute("lang", "bn");
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setPostData({
      ...postData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleContentChange = (value) => {
    setPostData({
      ...postData,
      content: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!postData.title || !postData.content || !postData.category) {
      toast.error("Please fill in all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("title", postData.title);
    formData.append("content", postData.content);
    formData.append("category", postData.category);
    formData.append("popular", postData.popular);
    if (img) {
      formData.append("image", img);
    }

    try {
      const res = await axios.post(`${url}/api/post/add-post`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (res.data.success) {
        toast.success(res.data.message);

        setPostData({ title: "", content: "", category: "" });
        if (quillRef.current) {
          quillRef.current.getEditor().setContents("");
        }
        if (img) {
          URL.revokeObjectURL(img);
        }
        setImg(null);
        window.location.replace("/manage-posts");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Failed to add post. Please try again.");
    }
  };

  return (
    <div className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-10">
      <h2 className="text-3xl font-bold text-center">New Post</h2>

      <form
        action="#"
        method="post"
        className="mt-10 px-0 lg:px-36 mx-auto"
        onSubmit={handleSubmit}
      >
        <p className="pb-2 pt-4 text-gray-600">Post Title</p>
        <input
          type="text"
          name="title"
          value={postData.title}
          onChange={handleInputChange}
          placeholder="Post Title"
          className="border-gray-400 border px-2 py-1 outline-none w-[100%] mb-2"
          required
        />

        <p className="pb-2 pt-4 text-gray-600">Post Content</p>
        <ReactQuill
          ref={quillRef}
          className="h-[250px] mb-16"
          value={postData.content}
          onChange={handleContentChange}
          modules={modules}
        />

        <p className="pb-2 pt-4 text-gray-600">Post Category : </p>
        <select
          name="category"
          id="category"
          className="border px-3 py-2 mb-5 w-1/2"
          onChange={handleInputChange}
          value={postData.category}
          required
        >
          <option value="" disabled>
            Select a category
          </option>
          <option value="সরকারি চাকরি">সরকারি চাকরি</option>
          <option value="বেসরকারি চাকরি">বেসরকারি চাকরি</option>
          <option value="ব্যাংক চাকরি">ব্যাংক চাকরি</option>
          <option value="শিক্ষাক্রম">শিক্ষাক্রম</option>
          <option value="প্রযুক্তি">প্রযুক্তি</option>
          <option value="বিজ্ঞান">বিজ্ঞান</option>
          <option value="Job Solution">Job Solution</option>
          <option value="Academic Solution">Academic Solution</option>
          <option value="Notice">Notice</option>
        </select>

        <div>
          <p className="pb-3 text-gray-700">Post Image</p>
          <label htmlFor="fileInput">
            <input
              type="file"
              id="fileInput"
              onChange={(e) => setImg(e.target.files[0])}
              hidden
            />
            <img
              src={img ? URL.createObjectURL(img) : "/upload_area.svg"}
              alt="upload area"
              className="mb-5 h-[150px]"
            />
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="popular"
            id="popular"
            className="cursor-pointer"
            checked={postData.popular}
            onChange={handleInputChange}
          />
          <label htmlFor="popular" className="ps-2 text-sm cursor-pointer">
            Add to popular
          </label>
        </div>

        <button
          type="submit"
          className="bg-red-600 w-full p-2 mt-4 text-white font-semibold rounded-md"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddPost;
