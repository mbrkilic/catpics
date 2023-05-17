import React, { useState } from "react";
import Cat from "../assets/cat.png";

function RandomCats() {
  const [imageUrl, setImageUrl] = useState(
    "https://source.unsplash.com/featured/?cat"
  );

  const handleClick = () => {
    setImageUrl(
      `https://source.unsplash.com/featured/?cat&t=${new Date().getTime()}`
    );
  };

  return (
    <div className="container-md text-center mt-5">
      <h1 className="head">
        <img className="cat-logo" src={Cat} alt="cat icon"></img> Random Cat Pics
        <img className="cat-logo" src={Cat} alt="cat icon"></img>
      </h1>
      <div>
        <button className="btn btn-primary mb-3 p-3" onClick={handleClick}>
          next pic
        </button>
      </div>
      <img className="pics" id="cat-pic" src={imageUrl} alt="cat pic"></img>
    </div>
  );
}

export default RandomCats;
