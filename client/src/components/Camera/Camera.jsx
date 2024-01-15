import Webcam from 'react-webcam';
import { useRef, useState } from 'react';
import './Camera.css';
import CryptoJS from 'crypto-js';

export default function Camera ({ capturedImage, setCapturedImage}) {
  const webcamRef = useRef(null);
  const [showCamera, setShowCamera] = useState(false);

  const startCamera = () => {
    setShowCamera(true);
  };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setShowCamera(false);
  };

  // async function uploadImage () {
  //   const cloudName = 'dyif3hely';
  //   const uploadPreset = 'bloomBud';
  //   const timestamp = (Date.now() / 1000 | 0).toString();
  //   const hash_string = `eager=w_400,h_300,c_pad|w_260,h_200,c_crop&public_id=sample_image&timestamp=${timestamp}`;
  //   const signature = CryptoJS.SHA1(hash_string).toString();
  //   console.log(signature);

  //   const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  //   const formData = new FormData();
  //   formData.append('file', capturedImage);
  //   formData.append('api_key', '');
  //   // formData.append('upload_preset', uploadPreset);
  //   formData.append('timestamp', timestamp);
  //   formData.append("public_id", "sample_image");
  //   formData.append('eager', 'w_400,h_300,c_pad|w_260,h_200,c_crop');
  //   formData.append('signature', signature);

  //   console.log(formData);

  //   try {
  //     const response = await fetch(uploadUrl, {
  //       method: 'POST',
  //       body: formData
  //     });

  //     if (response.ok) {
  //       const result = await response.json();
  //       console.log(result);
  //     }
  //   } catch (error) {
  //     console.error('failed', error);
  //   }
  // }

  return (
    <div>
      {!capturedImage && (
        <div className='camera'>
          {!showCamera ? (
            <button onClick={startCamera} className='shutter-button'>Take a picture</button>
          ) : (
            <div>
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="webcam"
              />
              <button onClick={capture}>Capture Photo</button>
            </div>
          )}
        </div>
      )}

      {capturedImage && (
        <div>
          <h2>Captured Image:</h2>
          <img src={capturedImage} alt='plant image' className='captured-image'/>
        </div>
      )}
    </div>
  );
}
