import PH from '../assets/placeholder.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

function Input() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [resultImage, setResultImage] = useState(PH); // Store the placeholder or uploaded/processed image
  const [fileName, setFileName] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [isProcessed, setIsProcessed] = useState(false); // Processed state

  const handleFileChange = (event) => {
    if (event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setResultImage(URL.createObjectURL(file)); // Show the uploaded image immediately
      setFileName(file.name);
      setIsProcessed(false); // Reset processed state when a new file is uploaded
    }
  };

  const handleChangeBg = async () => {
    if (!selectedFile) {
      alert('Please select an image first!');
      return;
    }

    const form = new FormData();
    form.append('image', selectedFile);

    const options = {
      method: 'POST',
      headers: {
        'apy-token': 'APY0nqTFD9QzRKQNnqVR05vxeVYVB9YmOhEVPdQAoq9WrGLo16Vy89tfAS4mnhIi2',
      },
      body: form,
    };

    try {
      setIsLoading(true); // Start loading
      const response = await fetch(
        'https://api.apyhub.com/processor/image/remove-background/file?output=test-sample.png',
        options
      );
      if (!response.ok) {
        throw new Error('Failed to process the image');
      }
      const blob = await response.blob(); // Get the processed image as a blob
      const imageUrl = URL.createObjectURL(blob); // Create a URL for the blob
      setResultImage(imageUrl); // Update the state with the processed image URL
      setIsProcessed(true); // Mark as processed
      setFileName('');
    } catch (error) {
      console.error('Error:', error);
      alert('Error processing the image. Please try again.');
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex flex-col justify-center items-center" id="inputSection">
      <div className="bg-gray-100 p-5 w-4/6 gap-5 border-2 rounded-lg border-solid border-cyan-500 flex flex-col items-center justify-center inputBg">
        <img
          src={resultImage}
          alt="Uploaded/Processed"
          style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ccc' }}
          className="placeholder2"
        />
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
            fontFamily: 'Kanit',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          <FontAwesomeIcon icon={faPlus} size="1x" color="#000" /> <span className="text-transparent">..</span>Upload Your
          Image here
        </label>
        {fileName && <p style={{ marginTop: '10px' }}>Selected: {fileName}</p>}
        
        {/* Remove Background Button */}
        {!isProcessed && (
          <button
            onClick={handleChangeBg}
            style={{
              padding: '10px 20px',
              backgroundColor: isLoading ? 'gray' : '#4caf50',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: isLoading ? 'not-allowed' : 'pointer',
            }}
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? <p><FontAwesomeIcon icon={faSpinner} size="lg" spin color="#fff" /> <span className='text-transparent'>.</span>Processing</p> : 'Remove Background'}
          </button>
        )}

        {/* Download Button */}
        {isProcessed && (
          <a
            href={resultImage}
            download="processed-image.png"
            style={{
              marginTop: '10px',
              padding: '10px 20px',
              backgroundColor: 'cyan',
              color: '#000',
              textDecoration: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontFamily:'Kanit',
            }}
          >
            Download Image
          </a>
        )}
      </div>
    </div>
  );
}

export default Input;
