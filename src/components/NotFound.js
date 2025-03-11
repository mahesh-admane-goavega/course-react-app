import React from "react";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {


    const animation = useRef(null);
   
    useEffect(() => {
        // Load the animation when the component mounts
        lottie.loadAnimation({
            container: animation.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://lottie.host/d987597c-7676-4424-8817-7fca6dc1a33e/BVrFXsaeui.json'
        });
    
        // Cleanup the animation on component unmount
        return () => lottie.destroy();
      }, []);


      return (
        <div>
            <div className="error-container">
                <div className="lottie-animation">
                    <div ref={animation} className="small-animation"></div> {/* Apply class here */}
                </div>
                <div className="error-content">
                    <h1>404</h1>
                    <p>Oops! The page you're looking for doesn't exist.</p>
                    <a href="/" className="btn btn-primary">Go Back to Home</a>
                </div>
            </div>
        </div>
    );
}


export default NotFound;
