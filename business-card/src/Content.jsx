import React from "react";

export default function Content() {
    return (
        <main>
            <div className="main-info">
                <h2>Thomas Ridvan</h2>
                <p>FrontEnd Developer</p>
                <div className="main-buttons">
                    <a href="tomas.ridvos@gmail.com" className="email-btn" target="_blank"><i className="fa-solid fa-envelope"></i>Email</a>
                    <a href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-ridvan/" target="_blank" className="linked-btn"><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
                </div>
            </div>
            <div className="main-text">
                <h3>About</h3>
                <p>I am a frontend developer that enjoys programming and making things simple but effective. I really love learning new stuff about programming every day and the fact I am able to build stuff like this and many more. </p>
                
                <h3>Interests</h3>
                <p>Guitar player, Food expert, Gaming fanatic, Karate doer, Beer drinker, Computer geek, Travel enjoyer, Sushi lover</p>  
            </div>
        </main>
    )
}