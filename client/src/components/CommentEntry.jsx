import { Fragment, useState } from 'react'
import PrimaryButton from "./PrimaryButton";

const CommentEntry = (props) => {

  const { commentCreate, LoneTicket, loggedInUser, userIdFromSession, userNameFromSession } = props;
  const [comment, setComment] = useState({tickets_id: "", users_id: "", message: ""})
  const [inputVal, setInputval] = useState("")

  if (!LoneTicket[0]){
    return null
  }

  let ticketId = LoneTicket[0].id

  const handleChange = (e) => {
    setComment({
      ...comment,
      tickets_id: ticketId,
      users_id: userIdFromSession,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    commentCreate(comment)
    setComment({message:""})
  }

  return ( 
    <Fragment>
      
      <div className="commentZone">
       <input name="message" id="commentInput" placeholder="Comment Away..." onChange={handleChange} value={comment.message}></input>
       <PrimaryButton onPress={handleSubmit} style={{backgroundColor: "#4D45B5", height: "inherit", borderRadius: "30px", width: "12rem"}} id="buthead" children = "+ Comment"/>
      </div>
    </Fragment>
   
   );
}
 
export default CommentEntry; 

