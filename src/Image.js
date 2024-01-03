import React, { useState, useEffect } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import Loader from "./Loader";

const Image = ({ url }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [downloading, setDownloading] = useState(true);

  useEffect(() => {
    const storage = getStorage();
    const storageRef = ref(storage, url);

    getDownloadURL(storageRef)
      .then((url) => {
        setImageUrl(url);
        setDownloading(false);
      })
      .catch((error) => {
        console.log(error);
        setDownloading(false); // Update state to reflect error and stop showing loader
      });
  }, [url]); // Dependency array with url to rerun this effect if url changes

  if (downloading) return <Loader />;
  return (
    <image
      src={imageUrl}
      className="img-responsive"
      alt="Profile Picture" // Ensure to provide a meaningful alt text
    />
  );
};

export default Image;
