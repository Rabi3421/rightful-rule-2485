import React from 'react';
import Bying from "./BuyingRightNow.module.css";

export default function BuyingRightNow() {
  return (
    <div className={Bying.byingrightnow}>
        <div className={Bying.products}>
            <img alt="prop" src="https://static.thcdn.com/images/small/webp//productimg/480/480/11289609-1174892770940184.jpg"/>
            <p>SkinCeuticals C E Ferulic with 15% L-Ascorbic Acid Vitamin C Serum 30ml</p>
            <p>$169.00</p>
            <button>SHOP NOW</button>
        </div>
        <div className={Bying.products}>
            <img alt="prop" src="https://static.thcdn.com/images/small/webp//productimg/480/480/11588281-8764882139037003.jpg"/>
            <p>Sunday Riley GOOD GENES All-In-One Lactic Acid Treatment (0.5oz)</p>
            <p>$122.00</p>
            <button>SHOP NOW</button>
        </div>
        <div className={Bying.products}>
            <img alt="prop" src="https://static.thcdn.com/images/small/webp//productimg/480/480/13547814-8054931654720532.jpg"/>
            <p>Borghese Borghese Acqua Ristorativo Hydrating Concentrate 30ml</p>
            <p>$96.00</p>
            <button>SHOP NOW</button>
        </div>
        <div className={Bying.products}>
            <img alt="prop" src="https://static.thcdn.com/images/small/webp//productimg/480/480/11523630-6274891243712913.jpg"/>
            <p>Elemis Pro-Collagen Cleansing Balm 100g</p>
            <p>$66.00</p>
            <button>SHOP NOW</button>
        </div>
    </div>
  )
}
