import React from 'react';


const Navbar = () => {

  return (
        <div className='row'>
            <div className='col'>
                <h1>Weather App</h1>
            </div>
            <div className='col-md-auto'>
                <a href="https://github.com/mihue14">
                    <img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-noir.png" alt="" style={{height:"53px"}}/>
                </a>
            </div>
            <div className='col col-lg-1'>
                <a href="https://www.linkedin.com/in/samirantoniojose/">  
                    <img src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png" alt="" style={{height:"50px"}}/>    
                </a>
            </div>
        </div>
  )
}

export default Navbar