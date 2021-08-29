import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className="container banner">
            <div className="container-center">
                <div className="banner-gradient"></div>
                <div className="banner-content">
                    <h1>React Landing Page</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
