import { useState, useEffect } from "react";

export const useImagePreloader = (urls) => {
  useEffect(() => {
    const preloadImages = () => {
      urls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    };

    preloadImages();
  }, [urls]);
};