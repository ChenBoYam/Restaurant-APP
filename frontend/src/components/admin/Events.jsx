import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Button } from 'react-bootstrap';


const Events = () => {
  const [file, setFile] = useState(null);
  const [eventName, setEventName] = useState(""); // State to hold the file name
  const [images, setImages] = useState([]);
  const uploadPath = "http://localhost:3500/"


  useEffect(() => {
    const fetchImages = async () => {
      try {
        // const response = await axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/event`);
        const response = await axios.get('http://localhost:3500/admin/event');
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
      formData.append('eventName', eventName);  // Add the eventName to formData

      // const postRoute = `${process.env.REACT_APP_SERVER_ADDRESS}/gallery`;
      const postRoute = `http://localhost:3500/admin/event`;
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
      const response = await axios.delete(`http://localhost:3500/admin/event/${imageId}`);

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
      <h1 className='home-title'>Event</h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          setFile(e.target.files[0]);
          // setFileName(e.target.files[0].name);  // Set the filename when a file is selected
        }}
      />
      <label>Set Filename: </label>
      <input
        type="text"
        placeholder="Enter eventName"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <Button onClick={uploadImage}>Upload</Button>

      <Row className="mt-4">
        {images.map(image => (
          <Col xs={12} md={4} className="mb-4" key={image._id}>
            <div className='image-container'>
              <img className="uniform-image" src={uploadPath + image.path} alt={image.eventName} style={{ width: "100%" }} />
              <p>{image.eventName}</p>
              <Button variant="danger" className="mt-2" onClick={() => deleteImage(image._id)}>Delete</Button>
            </div>
          </Col>
        ))}
      </Row>
    </div>

  );
};

export default Events;