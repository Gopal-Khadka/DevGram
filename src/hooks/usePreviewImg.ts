import { useState } from "react";
import useShowToast from "./useShowToast";

const usePreviewImg = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const showToast = useShowToast();

  const maxFileSizeInBytes = 2 * 1024 * 1024; // 2 MB

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      if (file.size > maxFileSizeInBytes) {
        showToast({
          description: "file larger than 2MB",
          title: "Large File",
          status: "error",
        });
        return setSelectedFile(null);
      }
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedFile(reader.result as string);
      };

      reader.readAsDataURL(file);
    } else {
      showToast({
        status: "error",
        description: "Please upload image file",
        title: "File Error",
      });
      setSelectedFile(null);
    }
  };
  return { selectedFile, handleImageChange, setSelectedFile };
};

export default usePreviewImg;
