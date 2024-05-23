"use client";
// components/ImageUpload.js
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FormSection } from "./form-section";
import { XIcon } from "lucide-react";
import { useRef } from "react";
const defaultImageURL = "/default-image.svg";

export function ImageUpload() {
  const fileInputRef = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault()
    fileInputRef.current.click();
  };

  return (
    <FormSection htmlFor="upload-images" label="Upload Images">
      <div className="sm:col-span-2">
        <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6 dark:border-gray-800">
          <div className="space-y-1 text-center">
            <svg
              aria-hidden="true"
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 48 48"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
            <div className="flex text-sm text-gray-600 dark:text-gray-400">
              <label
                className="relative cursor-pointer rounded-md bg-white font-medium text-primary-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 hover:text-primary-500 dark:bg-gray-950 dark:text-primary-500 dark:hover:text-primary-400"
                htmlFor="file-upload"
              >
                <Button variant="ghost" onClick={handleButtonClick}>Upload a file</Button>
                <input
                  ref={fileInputRef}
                  className="sr-only"
                  id="file-upload"
                  multiple
                  name="file-upload"
                  type="file"
                />
              </label>
              <span className="px-4 items-center flex">
                <p className="pl-1">or drag and drop</p>
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div>
      </div>
    </FormSection>
  );
}
