import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PH from '../assets/placeholder.svg'

const url = 'https://sdk.photoroom.com/v1/segment';
const form = new FormData();
form.append('image_file', '');
form.append('format', '');
form.append('channels', '');
form.append('bg_color', '');
form.append('size', '');
form.append('crop', '');
form.append('despill', '');

const options = {
  method: 'POST',
  headers: {Accept: 'image/png, application/json', 'x-api-key': '123'}
};

options.body = form;

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}



function Input() {

    const [fileName, setFileName] = useState('');
  
    const handleFileChange = (event) => {
      if (event.target.files[0]) {
        setFileName(event.target.files[0].name);
      }
    };

  return (
    <>
    <div className='flex flex-col justify-center items-center ' id='inputSection'>
      <div className='bg-gray-100 p-5 w-3/6 gap-5 border-2 rounded-lg border-solid border-cyan-500 flex flex-col items-center justify-center inputBg '>
            
            <img src={PH} alt="" className='placeholder'/>
            
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
            >
              <FontAwesomeIcon icon={faPlus} size="1x" color="#000" /> <span className='text-transparent'>..</span>Upload Your Image here
            </label>
              {fileName && <p style={{ marginTop: '10px' }}>Selected: {fileName}</p>}
              <button className='bg-cyan-400 h-15 p-3 rounded-md font-bold hover:bg-black hover:text-white transition-all btn'>Remove Background</button>
            </div>

    </div>
      
      
    </>
  )
}

export default Input
