import "./Box.scss";
import React, { useState } from "react";

export default function Box({img,prices,c_name,gr,id,text}){






    return <div className="container_card_1">

        



    <div className="contain_1">
    <div className="wr-img_1">
    <img src={img} alt="" />
</div>
<div className="wr-content">
    <div className="title">
        <h3>{c_name}</h3>
    </div>
    <div className="grams">
        <h3>{gr}</h3>
    </div>
    <div className="info-func">
        <div className="price">
            {prices}
        </div>
      

    </div>
   
</div>

    </div>
    <div className="wr-but">
      <button className="bt_2" onClick={(console.log(text))}> Добавить</button>
    </div>




</div>

}