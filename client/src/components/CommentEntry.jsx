import { Fragment, useState } from 'react'
import { Button } from "@mui/material";
import PrimaryButton from "./PrimaryButton";



const CommentEntry = () => {


  return ( 
    <Fragment>
      <div className="commentZone">
       <input id="commentInput" placeholder="Comment Away..."></input>
       <div className="new-comment"><PrimaryButton style={{backgroundColor: "#4D45B5"}} id="buthead" children = "+ Comment"/></div>
      </div>
    </Fragment>
   
   
   );
}
 
export default CommentEntry; 

