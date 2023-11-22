import React, { useState } from "react";
import "./Basket.scss"

export default function Basket({name,kg,price,id,img,editAllproductsCount,delBasket}){

    const [num,setNum] = useState(0)


    function editCount(amper){
        if (String(amper) ==="1" && num ===0) {
            return;
        }

        const Result = num +amper;
        editAllproductsCount(amper);
        setNum(Result);
    }



    return(
        <div className="container_card">
       <div className="wr-img">
        <img src="{img}" alt="" />
       </div>

       <div className="wr-content">
        <div className="title">
            <h3>
                {name}
            </h3>
        </div>

        <div className="info-funct">
            <div className="price">
                {price}
            </div>
            <div className="wt-button">
                <button onClick={()=> editCount(+1) }>+</button>
                <span>{count}</span>
                <button onClick={()=> editCount(-1) }>-</button>
            </div>
        </div>
        <div className="basket_1" onClick={()=> delBasket(id)}>
     <img src="{}" alt="" />
        </div>
       </div>
        </div>
    )
}