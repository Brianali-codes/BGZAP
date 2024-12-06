import PH from '../assets/placeholder.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';

function Input() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [resultImage, setResultImage] = useState(PH); // Store the processed image URL
  const [fileName, setFileName] = useState('');


  const handleFileChange = (event) => {
    if (event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      
    }
    if (event.target.files[0]) {
      setFileName(event.target.files[0].name);
    }
  };

  const handleChangeBg = async () => {
    if (!selectedFile) {
      alert('Please select an image first!');
      return;
    }

    const url = 'https://sdk.photoroom.com/v1/segment';
    const form = new FormData();
    form.append('image_file', selectedFile); // Attach the selected file
    form.append('format', 'image/png'); // Example: Specify the format
    form.append('channels', 'rgba'); // Example: Specify channels
    form.append('bg_color', ''); // Add background color if needed
    form.append('size', ''); // Add size parameter if needed
    form.append('crop', 'true'); // Example: Enable cropping
    form.append('despill', 'true'); // Example: Enable despill

    const options = {
      method: 'POST',
      headers: {
        Accept: 'image/png, application/json',
        'x-api-key': 'sandbox_f166712ef5f5bfce3f7631da8526ccd5275ca775', // Replace with your actual API key
      },
      body: form,
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Failed to process the image');
      }
      const blob = await response.blob(); // Get the processed image as a blob
      const imageUrl = URL.createObjectURL(blob); // Create a URL for the blob
      setResultImage(imageUrl); // Update the state with the processed image URL
      setFileName('');
    } catch (error) {
      console.error('Error:', error);
      alert('Error processing the image. Please try again.');
    }
  };

  return (
    <div className='flex flex-col justify-center items-center ' id='inputSection'>
        <div className='bg-gray-100 p-5 w-4/6 gap-5 border-2 rounded-lg border-solid border-cyan-500 flex flex-col items-center justify-center inputBg '>
          
          {resultImage ? (
                    <img
                        src={resultImage}
                        alt="Processed"
                        style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ccc' }}
                         className='placeholder2' />
                    ) : (
                    <img src={PH} alt="" className='placeholder'/>
                )}
          <input
                  type="file"
                  id="fileInput"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
          <label
              htmlFor="fileInput"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: 'cyan',
                color: 'black',
                fontFamily:'Kanit',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            ><FontAwesomeIcon icon={faPlus} size="1x" color="#000" /> <span className='text-transparent'>..</span>Upload Your Image here</label>
            {fileName && <p style={{ marginTop: '10px' }}>Selected: {fileName}</p>}
          <button
            onClick={handleChangeBg}
            style={{
              padding: '10px 20px',
              backgroundColor: '#4caf50',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Remove Background
          </button>
        </div>
    </div>
  );
}

export default Input;
