import React from 'react';

const Navbar = () =>{
  return(
    <div className='myNav d-flex align-items-center'>
        <div className='container'>
            <div className='navFlexer d-flex align-items-center justify-content-between'>
                <div className='navBrand'>
                    <a href="#"> 🌦️ Weather App </a>
                </div>
                {/* <div>
                    hello
                </div> */}
            </div>
        </div>
    </div>
  );
}
export default Navbar;