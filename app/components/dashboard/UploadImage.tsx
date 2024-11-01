"use client";
import React, { ChangeEvent, useState } from "react";

const UploadImage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<string[]>([]);

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]); // Set the first selected file
    }

    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });

      if (!res.ok) throw new Error(await res.text());

      const result = await res.json();
      if (result?.image) {
        console.log(result.image);

        setImage([...image, result.image]); // Assuming API returns { path: 'image-url' }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input type="file" name="file" onChange={(e) => handleUpload(e)} />
    </div>
  );
};

export default UploadImage;
