import React from 'react';

interface FileUploadButtonProps {
  onFileSelect: (file: File) => void;
  buttonText?: string;
  accept?: string;
}

const FileUploadButton: React.FC<FileUploadButtonProps> = ({ onFileSelect, buttonText = 'Choose File', accept }) => {
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <>
      <input
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileSelect}
        accept={accept}
        ref={(fileInput) => (fileInputRef = fileInput)}
      />
      <button onClick={() => fileInputRef?.click()}>{buttonText}</button>
    </>
  );
};

let fileInputRef: HTMLInputElement | null = null;

export default FileUploadButton;