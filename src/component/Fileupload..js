
import React, { useState } from 'react';
import './file.css'
const Fileupload = () => {
    const [file, setFile] = ('');

    // Handle file selection
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    // Handle file submission
    const handleSubmit = (event) => {
        event.preventDefault();
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            // Replace with your API endpoint
            fetch('http://your-server-url/upload', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('File uploaded successfully:', data);
                })
                .catch((error) => {
                    console.error('Error uploading file:', error);
                });
        } else {
            alert('Please select a file to upload');
        }
    };

    return (
        <div style={{ margin: '50px', textAlign: 'center' }}>
            <form onSubmit={handleSubmit}>
                <h2 className='hader2'> <img className='image'  src='https://thumbs.dreamstime.com/b/documents-1774097.jpg'>
                </img> Upload Your Document</h2>
                <div className='file'>
                <input className='choose_file'
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.txt"
                   
                />
                 </div>
                <br />
                <button className='uploadbutton'  type="submit" style={{ marginTop: '20px' }}>
                    Upload
                </button>
            </form>
        </div>
    );
};

export default Fileupload