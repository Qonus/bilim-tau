// components/PostForm.tsx
"use client";
import styles from "./MaterialPostForm.module.scss";
import { useState } from "react";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles([...files, ...Array.from(e.target.files)]);
    }
  };

  // Remove a file from the selection
  const handleFileRemove = (fileToRemove: File) => {
    setFiles(files.filter((file) => file !== fileToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("tags", JSON.stringify(tags));
    files.forEach((file) => formData.append("files", file));

    const res = await fetch("/api/posts", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.success) {
      console.log("Post created successfully:", data);
    } else {
      console.error("Error creating post:", data.error);
    }
  };

  return (
    <form className={styles.postform} onSubmit={handleSubmit}>
      <label>
        Заголовок:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Описание:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Тэги (разделенные запятой):
        <input
          type="text"
          value={tags.join(", ")}
          onChange={(e) =>
            setTags(e.target.value.split(",").map((tag) => tag.trim()))
          }
        />
      </label>
      <label>
        Закрепить файлы:
        <input type="file" multiple onChange={handleFileChange} />
      </label>
      <div>
        <h4>Выбранные файлы:</h4>
        <ul>
          {files.map((file, index) => (
            <li key={index}>
              {file.name}{" "}
              <button
                type="button"
                onClick={() => handleFileRemove(file)}
                style={{ color: "red" }}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button className="primary-button" type="submit">
        Опубликовать Материал
      </button>
    </form>
  );
};

export default PostForm;
