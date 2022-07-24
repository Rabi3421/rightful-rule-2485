import React from 'react';
import Brands from './Brands';
import BuyingRightNow from './BuyingRightNow';
import Footer from './Footer';
import HomeCurousel from "./HomeCurousel";
import OverOnTheBlog from './OverOnTheBlog';
import ShopByCategory from './ShopByCategory';
import TrendingNow from './TrendingNow';
import TrendingOffers from './TrendingOffers';
// import ShopByCategory from './ShopByCategory';

const Home = () => {
  return (
    <>
      <HomeCurousel />
      <h2 style={{textAlign: 'center', marginTop: '40px'}}>Trending Offers</h2>
      <TrendingOffers />
      <h2 style={{textAlign: 'center', marginTop: '40px'}}>Shop by Category</h2>
      <ShopByCategory />
      <h2 style={{textAlign: 'center', marginTop: '40px'}}>What People Are Buying Right Now</h2>
      <BuyingRightNow />
      <Brands />
      <TrendingNow />
      <h2 style={{textAlign: 'center', marginTop: '40px'}}>Over On The Blog...</h2>
      <OverOnTheBlog />
      <Footer />
    </>
    
  )
}

export default Home