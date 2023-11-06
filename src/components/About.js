import React, { useState } from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
      color: "black",
      backgroundColor: "white",
    });

    const [btnText, setBtnText] = useState("Enable Dark mode");

    const darkmode =()=>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color:"white",
                backgroundColor:'black',
                border: '1px solid white'
            })
            setBtnText("Enable Light mode");
        } else{
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText("Enable Dark mode");
        }
    }

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div class="card text-center my-3" style={myStyle}>
        <div class="card-header">Featured</div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <button className="btn btn-primary" onClick={darkmode} type="button">
            {btnText}
          </button>
        </div>
        <div class="card-footer text-muted">2 days ago</div>
      </div>
    </div>
  );
}
