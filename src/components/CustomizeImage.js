import React, { useState } from "react";

export default function CustomizeImage() {
  const [url, setUrl] = useState("https://timedotcom.files.wordpress.com/2019/03/kitten-report.jpg");
  const [size, setSize] = useState(100);

  function handleUrlChange(event) {
    setUrl(event.target.value);
  }
  function handleSizeChange(event) {
    setSize(Number(event.target.value));
  }

  return (
    <div>
      <h1>Customize Image</h1>
      <input type="text" value={url} onChange={handleUrlChange} />
      <br /> <br />
      <input
        type="range"
        min="0"
        max="200"
        value={size}
        onChange={handleSizeChange}
      />
      <br /> <br />
      <p> {size} x {size} px </p>
      <img src={url} alt="" style={{height: size, width: size}} />
      {/* <pre>{JSON.stringify(url)}</pre>
      <pre>{JSON.stringify(size)}</pre> */}
    </div>
  );
}
