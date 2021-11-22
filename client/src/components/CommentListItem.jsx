import "./ListItem.scss";
import classNames from "classnames";

const CommentListItem = (props) => {

  const { author, message } = props;

  const commentClass = classNames("list__item", {
   "list__item--selected": props.selected,
 });

//  const author = "Fred Flintstone"
//  const message= "Yabba Dabba doooo!!!"

 return (
   <li
     id="commenttile"
     className={commentClass}
     selected={props.selected}
     onClick={() => console.log('Yo')}
   >
     <div><strong>{props.author}</strong></div>
     <div>{props.message}</div>

   </li>
 );
}
 
export default CommentListItem;
