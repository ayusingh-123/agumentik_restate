import React from 'react';
import '../styles/upperdiv.css';
import SearchBar from './SearchBar';

function Upperdiv(){
  return (
    <div className='Main'>
        <div className='T2'>
            <span>Easy Booking</span>
            <span>Get Deliver Today!</span>
            </div>
        <div className='Boom'>
            <div className='search'><SearchBar/></div>
            <div className='dong'> <div className='circle1'></div>
            <div className='circle2'></div>
            <div className='circle3'></div></div>
            
        </div>
        <div className='Box3'>
            <div className='g1'></div>
            <div className='g2'><img width={300} height={450} src="https://wallpaperaccess.com/full/1899414.jpg" alt="" /></div>
            <div className='g3'><img width={300} height={450} src="https://thumbs.dreamstime.com/b/home-house-8589846.jpg" alt="" /></div>
        </div>
    </div>
  )
}

export default Upperdiv;