import React from 'react';

const Preloader = () =>{
    // js here
    const preloaderGiphUrl = 'https://media.tenor.com/ao5pNZBUF58AAAAC/transparent-loading.gif';
    return(
        <>
            <div className='preloader'>
                <img src={preloaderGiphUrl} alt='preloader' className='img-fluid'/>
            </div>
        </>
    );
}
export default Preloader;
