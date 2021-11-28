import { Fragment, useState } from 'react'
import PrimaryButton from "./PrimaryButton";

const CommentEntry = (props) => {

  const { commentCreate, LoneTicket } = props;
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
      users_id: 2,
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
       <div className="new-comment"><PrimaryButton onPress={handleSubmit} style={{backgroundColor: "#4D45B5"}} id="buthead" children = "+ Comment"/></div>
      </div>
    </Fragment>
   
   );
}
 
export default CommentEntry; 

