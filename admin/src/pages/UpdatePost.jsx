import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { url } from "../App";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const UpdatePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const quillRef = useRef(null);
  const [img, setImg] = useState(null);
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    category: "",
    popular: false,
  });

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      editor.root.setAttribute("lang", "bn");
    }
  }, []);

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

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const res = await axios.get(`${url}/api/post/get-post/${id}`);
        if (res.data.success) {
          const { title, content, category, popular, imageUrl } = res.data.post;
          setPostData({ title, content, category, popular, image: imageUrl });
          setImg(imageUrl);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        toast.error("Failed to fetch post data.");
      }
    };
    fetchPostData();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setPostData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleContentChange = (value) => {
    setPostData((prevState) => ({
      ...prevState,
      content: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", postData.title);
    formData.append("content", postData.content);
    formData.append("category", postData.category);
    formData.append("popular", postData.popular);
    if (img instanceof File) {
      formData.append("image", img);
    }

    try {
      const res = await axios.put(
        `${url}/api/post/update-post/${id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/manage-posts");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Failed to update the post.");
    }
  };

  return (
    <div className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-10">
      <h2 className="text-3xl font-bold text-center">Edit Post</h2>

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
          className="border-gray-400 border px-2 py-1 outline-none w-full mb-2"
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
          <p className="py-3 text-gray-700">Post Image</p>
          <label htmlFor="fileInput">
            <input
              type="file"
              id="fileInput"
              onChange={(e) => setImg(e.target.files[0])}
              hidden
            />
            <img
              src={
                img instanceof File
                  ? URL.createObjectURL(img)
                  : img || "/upload_area.svg"
              }
              alt="upload area"
              className="mb-5 h-[200px]"
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
          className="bg-red-600 w-full p-2 mt-5 text-white font-semibold rounded-md"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdatePost;
