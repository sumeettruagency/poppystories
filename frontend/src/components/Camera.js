import React, { useEffect, useRef } from "react";
import Webcam from "react-webcam";
import Colordetect from "./Colordetect";

const videoConstraints = {
  width: 540,
  facingMode: "environment",
};
function Camera() {
  const webcamRef = useRef(null);
  const [url, setUrl] = React.useState(null);
  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webcamRef]);

React.useEffect(() => { },[url])
  const onUserMedia = (e) => {
    console.log(e);
  };
  return (
    <>
      <Webcam
        ref={webcamRef}
        audio={true}
        screenshotFormat="image/png"
        videoConstraints={videoConstraints}
        onUserMedia={onUserMedia}
        mirrored={true}
      />

      <button onClick={() => capturePhoto()}>Capture</button>
      <button onClick={() => setUrl(null)}>Refresh</button>

      {url}
      {url && (
        <div>
          <img src={url} alt="Screenshot" />
          <Colordetect url={ url } />
        </div>
      )}
    </>
  );
};

export default Camera;