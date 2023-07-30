// components/HeroBanner.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'; // Assuming you have a RootState type defined
import Navbar from './Navbar';
import Upperdiv from './Upperdiv';
import MidDiv from './MidDiv';
import Footer from './Footer';
import LineBar from './LineBar';

const HeroBanner: React.FC = () => {
  const heroBannerContent = useSelector((state: RootState) => state.heroBanner.content);
  const val = heroBannerContent.title != '' ? heroBannerContent.title : 'Re-state';
  return (
    <div className="hero-banner">
     <Navbar title={val}/>
      <Upperdiv/>
      <MidDiv/>
      <LineBar/>
      <Footer/>

    </div>
  );
};

export default HeroBanner;

{/* Your hero banner content here   {heroBannerContent.subtitle}  */}

