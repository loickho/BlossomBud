import Webcam from 'react-webcam';
import { useRef, useState } from 'react';
import './Camera.css';

export default function Camera () {
  const webcamRef = useRef(null);
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const startCamera = () => {
    setShowCamera(true);
  };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setShowCamera(false);
  };

  return (
    <div>
      {!capturedImage && (
        <div>
          {!showCamera ? (
            <button onClick={startCamera} className='shutter-button'>Add picture</button>
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
