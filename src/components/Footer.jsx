import React from 'react';

const Footer = () =>{
    // js here
    const currentYear = new Date().getFullYear();
  return(
    <>
        <footer>
            <div className='container pt-2'>
                <p className='text-center'>CopyRight {currentYear} ©️ JS Dev.All Rights Reserved | Terms and Conditions Applied.</p>
            </div>
        </footer>
    </>
  );
}
export default Footer;