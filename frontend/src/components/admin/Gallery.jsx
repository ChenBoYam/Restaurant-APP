import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';


const Gallery = () => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState(""); // State to hold the file name
    const [images, setImages] = useState([]);


    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/gallery`);
                setImages(response.data);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };

        fetchImages();
    }, []); // <-- The empty dependency array ensures this effect runs only once when the component mounts.

    const uploadImage = async () => {
        try {
            if (!file) return;

            const formData = new FormData();
            formData.append('image', file);
            formData.append('filename', fileName);  // Add the filename to formData

            const postRoute = `${process.env.REACT_APP_SERVER_ADDRESS}/gallery`;
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

            <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                    setFile(e.target.files[0]);
                    setFileName(e.target.files[0].name);  // Set the filename when a file is selected
                }}
            />
            <button onClick={uploadImage}>Upload</button>

            <div className='image-grid'>
                {images.map(image => (
                    <div key={image._id} className='image-container'>
                        <img src={image.path} alt={image.filename} />
                        <p>{image.filename}</p>
                    </div>
                ))}
            </div>

            <br />
            <Link to={"/"}>home</Link>
        </div>

    );
};


export default Gallery;