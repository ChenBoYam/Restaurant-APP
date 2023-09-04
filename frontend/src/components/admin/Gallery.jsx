import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Button } from 'react-bootstrap';


const Gallery = () => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState(""); // State to hold the file name
    const [images, setImages] = useState([]);
    const uploadPath = "http://localhost:3500/"


    useEffect(() => {
        const fetchImages = async () => {
            try {
                // const response = await axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/gallery`);
                const response = await axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/admin/gallery`);
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

            // const postRoute = `${process.env.REACT_APP_SERVER_ADDRESS}/gallery`;
            const postRoute = `${process.env.REACT_APP_SERVER_ADDRESS}/admin/gallery`;
            const response = await axios.post(postRoute, formData);


            if (response.status >= 200 && response.status < 300) {
                console.log("Image uploaded successfully!");
                window.location.reload();
            } else {
                console.error("Error uploading image:", await response.text());
            }
        } catch (error) {
            console.error("There was an error uploading the image", error);
        }
    };

    const deleteImage = async (imageId) => {
        try {
            const response = await axios.delete(`${process.env.REACT_APP_SERVER_ADDRESS}/admin/gallery/${imageId}`);

            if (response.status === 200) {
                console.log("Image deleted successfully!");
                // Update the UI by removing the deleted image
                setImages(images => images.filter(image => image._id !== imageId));
            } else {
                console.error("Error deleting image:", await response.text());
            }
        } catch (error) {
            console.error("There was an error deleting the image", error);
        }
    };

    return (
        <div className='home-container'>
            <h1 className='home-title'>精選照片</h1>

            <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                    setFile(e.target.files[0]);
                    // setFileName(e.target.files[0].name);  // Set the filename when a file is selected
                }}
            />
            <label>照片名稱: </label>
            <input
                type="text"
                placeholder="Enter filename"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
            />
            <Button onClick={() => uploadImage()}>上傳</Button>

            <Row className="mt-4">
                {images.map(image => (
                    <Col xs={12} md={4} className="mb-4" key={image._id}>
                        <div className='image-container'>
                            <img className="uniform-image" src={process.env.REACT_APP_SERVER_ADDRESS + "/" + image.imgPath} alt={image.filename} style={{ width: "100%" }} />
                            <p>{image.filename}</p>
                            <Button variant="danger" className="mt-2" onClick={() => deleteImage(image._id)}>刪除</Button>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>

    );
};


export default Gallery;