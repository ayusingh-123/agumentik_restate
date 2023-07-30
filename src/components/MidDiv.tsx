import React from 'react';
import "../styles/middiv.css";

function MidDiv(){
  return (
    <div className='Sain'>
        <div className='D1'>
            <div className='text'>
                <span>Find your perfect</span>
            <span>Real Estate</span></div>
            <div className="search-container">
        <input type="text" name="search" placeholder="Search..." className="search-input"/>
        <a href="#" className="search-btn">
        <img width="25" height="25" src="https://img.icons8.com/ios-filled/32/search--v1.png" alt="search--v1"/>      
        </a>
    </div>
        </div>

        <div className='D2'>
            <div className='Box1'>
            <div className="one">
                    <div>
                     <img src="https://i.pinimg.com/564x/81/38/bb/8138bbda2b4ca1bcd2fe42a782e61bd9.jpg" width={250} height={250} alt="" />
                    </div>
                    <div className='house'>
                        <span>The Room for Sell</span>
                        <span id='price'>$2500</span>
                    </div>
            </div>
            <div className="two">
                    <div>
                     <img src="https://i.pinimg.com/564x/98/2c/5c/982c5cdf047949e380580964baf9fca9.jpg" width={250} height={250} alt="" />
                    </div>
                    <div className='house'>
                        <span>The Room for Rent</span>
                        <span id='price'>$3500</span>
                    </div>
            </div>
            <div className="three">
                    <div>
                     <img src="https://i.pinimg.com/564x/43/c8/df/43c8df49fedbebd763594a7aebd7442a.jpg" width={250} height={250} alt="" />
                    </div>
                    <div className='house'>
                        <span>The house for Rent</span>
                        <span id='price'>$4500</span>
                    </div>
            </div>
            <div className="four">
                    <div>
                     <img src="https://i.pinimg.com/564x/39/8f/56/398f565d1a9ec11b04ecf803271f10e1.jpg" width={250} height={250} alt="" />
                    </div>
                    <div className='house'>
                        <span>The Room 1200 sqft</span>
                        <span id='price'>$7500</span>
                    </div>
            </div>
            </div>
            <div className='Box2'> 
            <div className='aa'>
                <p id='bluetext'>Astonia way Astero</p>
               
            </div>
            <div className='bb'></div>
            </div>
        </div>
    </div>
  )
}

export default MidDiv;