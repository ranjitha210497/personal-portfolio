import React from 'react'

/**
* @author
* @function Skills
**/

const frontend_developer_courses = ["HTML", "CSS", "JavaScript", "React"];

class Skills extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            frontend_developer: false,
            designer: false,
        }
    }

render() {
    const { frontend_developer, designer } = this.state;
  return(
    <div className='col-10 text-align-center introduction poppins'>
        <p className='medium fs-36 margin-0'>Skills</p>
        <p className='grey'>My Technical level</p>
        <div className='d-flex flex-row'>
            <div className='col-8 frontend-developer d-flex flex-row margin-left-230'>
                <img className='w-25' src="/images/brackets-curly.svg" alt='curly-brackets'/>
                <div className='d-flex flex-column'>
                    <div className='d-flex flex-row'>
                        <div className='d-flex flex-column margin-left-10 margin-right-10 margin-top-20'>
                            <p className='medium fs-20 margin-0 '>Frontend Developer</p>
                            <p className='fs-12 light-periwinkle margin-top-5 text-align-left'>More than 4 years</p>
                        </div>
                        <img 
                            className='w-25 margin-left-70 cursor-pointer' 
                            src={`/images/${this.state.frontend_developer ? `angle-up` : `angle-down`}.svg`} 
                            alt='arrow-down' 
                            onClick={() => this.setState({ frontend_developer: !frontend_developer})}
                        />
                    </div>
                </div>
                <img className='w-25 margin-left-20' src="/images/pathfinder.svg" alt='curly-brackets'/>
                <div className='d-flex flex-column'>
                    <div className='d-flex flex-row'>
                        <div className='d-flex flex-column margin-left-3 margin-right-10 margin-top-20'>
                            <p className='medium fs-20 margin-0 '>Designer</p>
                            <p className='fs-12 light-periwinkle margin-top-5 margin-left-20'>More than 5 years</p>
                        </div>
                        <img 
                            className='w-25 margin-left-170 cursor-pointer' 
                            src={`/images/${this.state.designer ? `angle-up` : `angle-down`}.svg`} 
                            alt='arrow-down' 
                            onClick={() => this.setState({ designer: !designer})}
                        />
                    </div>
                </div>
            </div>
            
        </div>
        
        
        {(frontend_developer || designer) &&
            <div className='d-flex flex-row bg'>
            <div className='d-flex flex-column col-3 margin-left-265'>
                {frontend_developer && frontend_developer_courses.map((course,i) => (
                    <div>
                        <div className='d-flex flex-row col-3 fs-13'>
                            <p className='text-align-left medium col-1'>{course}</p>
                            <p className='row-reverse grey col-1-5 d-flex flex-row' style={{right: '0px'}}>90%</p>
                        </div>
                        <div className='w-290 h-5' style={{backgroundColor: '#bcbbff', borderRadius: '1px'}}> 
                            <div className={`w-${Math.floor(32*0.1*29)} h-5`} style={{backgroundColor: '#6563ff', borderRadius: '1px'}}></div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='d-flex bg flex-column col-3 margin-left-20'>
                {designer && frontend_developer_courses.map((course,i) => (
                    <div>
                        <div className='d-flex flex-row col-3 fs-13'>
                            <p className='text-align-left medium col-1'>{course}</p>
                            <p className='row-reverse grey col-1-5 d-flex flex-row' style={{right: '0px'}}>90%</p>
                        </div>
                        <div className='w-290 h-5' style={{backgroundColor: '#bcbbff', borderRadius: '1px'}}> 
                            <div className={`w-${Math.floor(32*0.1*29)} h-5`} style={{backgroundColor: '#6563ff', borderRadius: '1px'}}></div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            }
        <div className='d-flex flex-row margin-top-20'>
            <div className='col-8 frontend-developer d-flex flex-row margin-left-230'>
                <img className='w-25' src="/images/server-network.svg" alt='curly-brackets'/>
                <div className='d-flex flex-column'>
                    <div className='d-flex flex-row'>
                        <div className='d-flex flex-column margin-left-10 margin-right-10 margin-top-20'>
                            <p className='medium fs-20 margin-0 '>Backend Developer</p>
                            <p className='fs-12 light-periwinkle margin-top-5 text-align-left'>More than 4 years</p>
                        </div>
                        <img 
                            className='w-25 margin-left-70 cursor-pointer' 
                            src={`/images/${this.state.frontend_developer ? `angle-up` : `angle-down`}.svg`} 
                            alt='arrow-down' 
                            onClick={() => this.setState({ frontend_developer: !frontend_developer})}
                        />
                    </div>
                </div>
            </div>
            
        </div>
        
        
        {(frontend_developer || designer) &&
            <div className='d-flex flex-row bg'>
            <div className='d-flex flex-column col-3 margin-left-265'>
                {frontend_developer && frontend_developer_courses.map((course,i) => (
                    <div>
                        <div className='d-flex flex-row col-3 fs-13'>
                            <p className='text-align-left medium col-1'>{course}</p>
                            <p className='row-reverse grey col-1-5 d-flex flex-row' style={{right: '0px'}}>90%</p>
                        </div>
                        <div className='w-290 h-5' style={{backgroundColor: '#bcbbff', borderRadius: '1px'}}> 
                            <div className={`w-${Math.floor(32*0.1*29)} h-5`} style={{backgroundColor: '#6563ff', borderRadius: '1px'}}></div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            }
    </div>
   )
  }
  }

  export default Skills;
