import React from "react";


const menus = ["Home", "About", "Skills", "Services", "Portfolio", "Contactme"];


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuShow: false,
        }
    }
    render() {
        return (
                <div 
                    className="col-10 d-flex flex-row nav-bar"
                >
                    <div 
                        className="col-4"
                    >
                        <p 
                            className="margin-left-90 medium"
                        >
                            Alexa
                        </p>
                    </div>
                    <div 
                        className="col-6 d-flex flex-row margin-top-16 margin-bottom-16 medium poppins cursor-pointer"
                    >
                        {menus.map((menu) => (
                            <a className="margin-left-30 black text-decoration-none" href="#sd">{menu}</a>
                        ))}
                        <img 
                            className="margin-left-20 w-20" 
                            src="/images/moon.svg" 
                            alt="mode" 
                        />
                    </div>
                </div>
        )
    }
}

export default Header;