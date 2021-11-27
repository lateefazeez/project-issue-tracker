import { Fragment, useState } from 'react'
import PrimaryButton from "./PrimaryButton";

const CommentEntry = (props) => {

  const { commentCreate, LoneTicket } = props;

  return ( 
    <Fragment>
      <div className="commentZone">
       <input id="commentInput" placeholder="Comment Away..." onChange={event => setComment(event.target.value)}></input>
       <div className="new-comment"><PrimaryButton style={{backgroundColor: "#4D45B5"}} id="buthead" children = "+ Comment"/></div>
      </div>
    </Fragment>
   
   );
}
 
export default CommentEntry; 

