import Webcam from 'react-webcam';
import { useRef, useState } from 'react';
import './Camera.css';
import { FaRegImages, FaCamera } from "react-icons/fa";

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

  return (
    <div>
      {!capturedImage && (
        <div className='camera'>
          {!showCamera ? (
            <button onClick={startCamera} className='open-camera-button'><FaRegImages />
            </button>
          ) : (
            <div className='opened-camera'>
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="webcam"
              />
              <button className="shutter-button" onClick={capture}><FaCamera />
</button>
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
