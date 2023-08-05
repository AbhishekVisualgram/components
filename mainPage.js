import React from "react";



const MainPageContents = () => {
    const [count, setCount] = React.useState(0);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    return (
      <div>
       <h1  className="centered" >VISUALGRAM</h1>
        <div id='pillar-body' className="centered">
          <p>Welcome to the exciting journey of learning every concept visually</p>
          <p>Number of active subscribers: {count}</p>
          <button onClick={increment}>Welcome {count}</button>
          <img className="image-class" src='./images/image_processing20211102-17742-4oxvtr' alt="" />
          <video id="myVideo" preload="metadata" loop="" muted="" data-autoplay="" poster="https://content.jwplatform.com/thumbs/GfXZqD8a-1920.jpg" className="hidden-xs">
            <source type="video/mp4" src="https://content.jwplatform.com/videos/GfXZqD8a-P99A17ek.mp4"></source>
          </video>
        </div>
      </div>
    );
  };

  export default MainPageContents;