import "./Card.scss";
import React, { useState } from "react";

export default function Card({context,kg,price,pict,id,editAllAllProductsCount}){
    const [num,setNum] = useState(0)


  
    function editCount(amper){
        if(String(amper) === "-1" && num === 0){
            return;
        }
        const result = num + amper
        editAllAllProductsCount(amper);
        setNum(result);
    }




    return <div className="container_card">


        <div className="contain">
        <div className="wr-img">
        <img src={pict} alt="" />
    </div>
    <div className="wr-content">
        <div className="title">
            <h3>{context}</h3>
        </div>
        <div className="grams">
            <h3>{kg}</h3>
        </div>
        <div className="info-func">
            <div className="price">
                {price}
            </div>
            <div className="wt_button">
                <button className="bt_1">
                <button className="bt" onClick={() => editCount(-1)}>-</button>
                <span>{num}</span>
                <button className="bt" onClick={()=> editCount(+1) }>+</button>
                </button>
            
            </div>

        </div>
        <div className="basket">
            <img src="" alt="" />
        </div>
    </div>

        </div>


   

    </div>
}