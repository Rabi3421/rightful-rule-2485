import React from 'react';
import Blog from './OverOnTheBlog.module.css';

export default function OverOnTheBlog() {
  return (
    <div className={Blog.overtheblog}>
      <div className={Blog.products}>
        <img alt="prop" src = "https://static.thcdn.com/images/small/webp/widgets/121-us/10/original-0328-STDCRE-33849-WC-SS-April-Photography-Batching-Shot07-500x500-030310.jpg"/>
        <h1>SkinCeuticals: Vitamin C Beyond the Face`</h1>
        <p>SkinCeuticals believes in celebrating the skin-protective and rejuvenating powers of vitamin C every day, but this year they're making sure your eyes and lips get in on the antioxidant action (and benefits).</p>
        <button>READ MORE</button>
      </div>
      <div className={Blog.products}>
        <img alt="prop" src = "https://static.thcdn.com/images/small/webp/widgets/121-us/51/original-0224-STDCRE-32153-SS-BME-Skinstore-March-2022-Photography-Batching-Shot_13-500x500-023351.jpg"/>
        <h1>Which TriPollar Device is Right for You?</h1>
        <p>In 2008, TriPollar launched themselves into the home beauty sphere with an aim to innovate the technology behind at-home treatments and devices.</p>
        <button>READ MORE</button>
      </div>
      <div className={Blog.products}>
        <img alt="prop" src = "https://static.thcdn.com/images/small/webp/widgets/121-us/53/2004_THG0034749_SS_MAY_2022_SHOT_33_MAIN-071653.jpg"/>
        <h1>The HairStore at SkinStore: What Your Routine Needs</h1>
        <p>Give your hair the same love and care you give your skin by shopping The HairStore at SkinStore.</p>
        <button>READ MORE</button>
      </div>
    </div>
  )
}
