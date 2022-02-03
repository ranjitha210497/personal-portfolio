import React from 'react'


export const Introduction  = (props) => {
  return(
    <div className='col-10 text-align-center introduction poppins'>
        <p className='medium fs-36 margin-0'>About Me</p>
        <p className='grey'>My Introduction</p>
        <div className='d-flex flex-row margin-top-50'>
          <div className='col-4 margin-left-150'>
            <img className='w-300 margin-top-20' src="/images/about.jpg" alt='about' />
          </div>
          <div className='col-3'>
            <p className='grey text-align-left fs-14 margin-0'>
              Web developer, with extensive knowledge and years of 
              experience, working in web technologies and Ui/Ux design, 
              delivering quality work.
            </p>
            <div className='grid-container margin-top-20'>
              <div className='grid'>
                <p className='medium fs-24 margin-0'>08+</p>
                <p className='grey fs-12 margin-0'>Years experience</p>
              </div>
              <div className='grid'>
                <p className='medium fs-24 margin-0'>20+</p>
                <p className='grey fs-12 margin-0'>Completed projects</p>
              </div>
              <div className='grid'>
                <p className='medium fs-24 margin-0'>05+</p>
                <p className='grey fs-12 margin-0'>Companies worked</p>
              </div>
              <button 
                className="contact-me-button margin-top-20"
              >
                Download CV
                <img 
                  src="/images/download-alt.svg" 
                  className="margin-left-5" 
                  style={{width: '15px', stroke: '#fff'}}
                  alt='download'
                />
              </button>
            </div>
          </div>
        </div>
    </div>
   )
  }
