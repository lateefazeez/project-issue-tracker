import { Button } from "@mui/material";
import PrimaryButton from "./PrimaryButton";

const CommentEntry = () => {
  return ( 
    <div className="commentZone">
       <input id="commentInput" placeholder="Comment Away..."></input>
       <div className="new-comment"><PrimaryButton id="buthead" children = "+ Comment"/></div>
    </div>
   
   );
}
 
export default CommentEntry; 

