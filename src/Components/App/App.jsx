
import React from "react";
import "../App/App.scss"
import arrCards from"../../../foodBurgers.json";
import { useState } from "react";
import Basket from "../Basket/Basket"

export default function App(){
    const [burgers,setBurgers] = useState(arrCards);
    const [AllproductsCount,setAllproductsCount] = useState(0);


    function editAllproductsCount(amper) {
        setAllproductsCount(AllproductsCount + amper)
    }

    function delBasket(id){
       const copyBurger {...burgers}
       const newBurgerArr = copyBurger.filter(item => item.id !=id)
       setBurgers(newBurgerArr);
    }

    if(!burgers){
        return
        <h1>Error 404</h1>
    }
   
    return(
        <div className="container">
        <h1>{AllproductsCount}</h1>

        <div className="wrapper_gl_cards">
            {burgers.map((item)=>(
                <Basket
                {...item}
                key={item.id}
                editAllproductsCount={editAllproductsCount}
                delBasket={delBasket}
                />
            ))}
            </div>

        </div>

       
     );










            } 
//      export default function Allamount(){
      
//         const [id,setId] = useState(1)
//         const [price,setPrice]= useState(0)

//         const a =    function (props){
//            console.log(props);
//            return(
//             <div className={props}>
//                 <p>
//                     {props.price}
//                 </p>

//             </div>
//            )
//         };

//    const b =  function (props){
//     console.log(props);
//     return(
//      <div className={props}>
//          <p>
//              {props.price_1}
//          </p>

//      </div>
//     )
//  };

//  const c =  function (props){
//     console.log(props);
//     return(
//      <div className={props}>
//          <p>
//              {props.price_2}
//          </p>

//      </div>
//     )
//  };



//         function plusAll(a,b,c){
//           <div className="block_amount">
//             a + b + c
//           </div>
//         } 
//      }
