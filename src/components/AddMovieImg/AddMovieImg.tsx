import { Button } from "@headlessui/react";
import React, { useRef, useState, type JSX } from "react";

export default function AddMovieImg(): JSX.Element {
  const [fileName, setFileName] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files && e.target.files[0];
    if (!file) {
      setFileName(null);
      return;
    }
    setFileName(file.name);
  }

  return (
    <Button
      className="file-input-card"
      onClick={() => inputRef.current?.click()}
      aria-label="Add an image"
    >
      <input
        className="file-input"
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />

      <div className="file-content">
        {fileName ? (
          <p className="file-name">{fileName}</p>
        ) : (
          <p className="file-placeholder">Add PNG/JPG file</p>
        )}
      </div>
    </Button>
  );
}