import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';


const Gallery = () => {
    const [file, setFile] = useState(null);
    const uploadImage = async () => {
        try {
          if (!file) return;
      
          const formData = new FormData();
          formData.append('image', file);
      
          const postRoute = `${process.env.REACT_APP_SERVER_ADDRESS}/gallery`
          const response = await axios.post(postRoute, formData);
      
          if (response.status >= 200 && response.status < 300) {
            console.log("Image uploaded successfully!");
          } else {
            console.error("Error uploading image:", await response.text());
          }
        } catch (error) {
          console.error("There was an error uploading the image", error);
        }
      };
      

    return (
        <div className='home-container'>
            <h1 className='home-title'>Gallery</h1>

            <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={uploadImage}>Upload</button><br />
            <Link to={"/"}>home</Link>

        </div>
    );
};

export default Gallery;