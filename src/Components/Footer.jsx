import React from "react";

const menus = ["Home", "About", "Skills", "Services", "Portfolio", "Contactme"];
const imageNames = ["estate", "user", "file-alt", "briefcase-alt", "scenery","message"]

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuShow: false,
        }
    }
    render() {
        return (
            <div>
                <div className="d-flex flex-row footer">
                                <p>Alexa</p>
                                <div className="footer-right">
                                <img 
                                    className="w-20" 
                                    src="/images/moon.svg" 
                                    alt="mode" 
                                />      
                                <img 
                                    className="w-20 margin-left-20" 
                                    src="/images/apps.svg" 
                                    alt="mode" 
                                    onClick={() => this.setState({ menuShow: true})}
                                />  
                                </div>
                            </div>
                            {this.state.menuShow &&
                            <div className="menu">
                                <div class="grid-container">
                                    {menus.map((menu, i) => (
                                        <div class="grid-item cursor-pointer w-80 h-60">
                                            <img 
                                                className="w-20" 
                                                src={`/images/${imageNames[i]}.svg`} 
                                                alt="menus"
                                            />
                                            <p className="margin-0" style={{fontSize: '14px', margin: '0px'}}>{menu}</p>
                                        </div>
                                    ))}
                            </div>
                            <div style={{marginLeft: '87vw'}}>
                                <img className="w-25 cursor-pointer" src="/images/times-circle.svg" 
                                    onClick={() => this.setState({ menuShow: false})}
                                    alt="close"
                                    />
                        </div>
                </div>}
            </div>
        )
    }
}

export default Footer;