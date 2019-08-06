import React, { useState } from "react";

export default function CustomizeImage() {
  const [size, setSize] = useState("");
  const [url, setUrl] = useState("");

  function handleInputChange(event) {
    setUrl(event.target.value);
  }
  function handleSizeChange(event) {
    setSize(event.target.value);
  }

  return (
    <div>
      <h1>Customize Image</h1>
      <input type="text" value={url} onChange={handleInputChange} />
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
      <img src={url} height={size} width={size} />
    </div>
  );
}
