import './page2.css';
import React from 'react';
let v=0;
function Key()
{
  return(
   <>
      <p id="innerDisc">Payment</p>
    <div id="container2">
      <h1>Bill Details:</h1>
     <div id = "align1">
        <p id="billDetail1">Item Total :</p>
        <p id="billDetail2">{parseFloat(v).toPrecision(3)}</p>
      </div>
      <div id = "align2">
        <p id="billDetail1">Packing Fee :</p>
        <p id="billDetail2">{parseFloat(v).toPrecision(3)}</p>
      </div>
      <div id = "align3">
        <p id="billDetail1">Delivery Fee:</p>
        <p id="billDetail2">{parseFloat(v).toPrecision(3)}</p>
      </div>
      <div id = "align4">  
        <p id="billDetail1">Total Price:</p>
        <p id="billDetail2">{parseFloat(v).toPrecision(3)}</p>
      </div>
    </div>
    <div id="container3">
    <h1>Payment:</h1>
    <input id="bt1" type="radio"/><br/>
    <hr id="hr1"/>
    <input id="bt2" type="radio"/><br/>
    <input id="bt3" type="radio"/>
    <hr id="hr3"/>
    <p id="pay1">Cash On Delivery</p>
    <p id="pay2">Credit / Debit Card</p>
    <p id="pay3">UPI Payment</p> 
    <p id="innerDisc1">Next</p>
    </div>
   </>
  )
}

export default Key;