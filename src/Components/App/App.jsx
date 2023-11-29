import  { useState } from "react";
import arrCards from "../../../foodBurgers.json"
import arrBox from "../../../second.json"
import "./App.scss"
import Card from "../Card/Card";
import Box from "../Box/Box";

export default function App(){

    const [burgers,setBurgers] = useState(arrCards);
    const [burgers_1,setBurgers_1] = useState(arrBox)
    const [allProductsCount,setAllProductsCount]= useState(0)

    function editAllAllProductsCount(amper){
        setAllProductsCount(allProductsCount + amper);
    }
    

    
  
    if(!burgers){
        return <h1>Error 404</h1>
    }
    if(!burgers_1){
        return <h1>Error 404</h1>
    }




    return(
       <div className="container">

        <div className="div">
        <p className="Burgs_n">
            Бургеры
        </p>
        <div className="Wr-box">
        {burgers_1.map((item)=> <Box {...item} key={item.id} />
        )}
        </div>
        
       </div>
            <div className="b_result"><p>
        Корзина
    </p>

    </div>
    <h1>{allProductsCount}</h1>
        {burgers.map((item)=> <Card {...item} key={item.id} editAllAllProductsCount={editAllAllProductsCount} />
        )}
       </div>

       


    );
    
}