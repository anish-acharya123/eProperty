import React from "react";
import "../home/Home.css";


export default function Home() {
  // const [active, setActive] = useState(false)
  // const toggle = ()=>{
  //      setActive(!active)
  //     }
  
  return (
    <>
      <div className="container">
        <div className="contain">
          <h1 className="heading">We build your dream residence</h1>
          <h2 className="text1" >
            {" "}
            Standing above competetion
          </h2>{" "}
          <span className="reviews" >
            With the best users reveiws!
            <span>Over a millions happy customers!</span>
            
          </span>
          <div className="join-btn">
         <span className="join-text">What are you waiting for,</span> <br />
         <button className="btn" > <h2>join us now</h2></button>

          </div>
        </div>
      </div>
    </>
  );
}
