import React from "react";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuShow: false,
        }
    }
    render() {
        return (
            <div>
                <div 
                    className="col-10 d-flex flex-row margin-top-50"
                > 
                    <div 
                        className="col-1 d-flex flex-column social-media"
                    >
                        <img 
                            className="w-20 margin-20" 
                            src="/images/linkedin-alt.svg" 
                            alt="linked-in" 
                        />
                        <img 
                            className="w-20 margin-20" 
                            src="/images/basketball.svg" 
                            alt="sport" 
                        />
                        <img 
                            className="w-20 margin-20" 
                            src="/images/github-alt.svg" 
                            alt="github" 
                        />
                    </div>
                    <div 
                        className="col-8 intro"
                    >
                        <div 
                            className="d-flex flex-column poppins summary"
                        >
                            <p 
                                className="name margin-bottom-10 margin-top-20"
                            >
                                Hi, I'am Alexa
                            </p>
                            <p 
                                className="margin-top-10 margin-bottom-10 grey"
                            >
                                Frontend developer
                            </p>
                            <p 
                                className="margin-top-10 margin-bottom-10 grey"
                            >
                                High level experience in web design and development knowledge, 
                                producing quality work
                            </p>
                            <button 
                                className="contact-me-button margin-top-20"
                            >
                                Contact me 
                                <img 
                                    src="/images/message-w.svg" 
                                    className="margin-left-5" 
                                    style={{width: '15px', stroke: '#fff'}}
                                    alt="message"
                                />
                            </button>
                            <div className="d-flex flex-row margin-top-50 scroll-down">
                                <img className="w-20" src="/images/mouse-alt.svg" alt="mouse" />
                                Scroll down
                                <img className="w-20" src="/images/arrow-down.svg" alt="arrow-down" />
                            </div>
                        </div>
                        <div 
                            className="col-3 d-flex flex-row profilepic"
                        >
                        <svg 
                            viewBox="0 0 200 187" 
                            xmlns="http://www.w3.org/2000/svg" 
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <mask 
                                id="mask0" 
                                mask-type="alpha"
                            >
                                <path 
                                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" 
                                    fill="#716fff"
                                />
                            </mask>
                            <g 
                                mask="url(#mask0)"
                            >
                                <path 
                                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" 
                                    fill="#716fff"
                                />
                                <image 
                                    width="170" 
                                    height="210" 
                                    xlinkHref="images/perfil.png"
                                />
                            </g>
                        </svg>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;