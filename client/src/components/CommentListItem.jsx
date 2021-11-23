import "./ListItem.scss";
import classNames from "classnames";
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
     <div className="ComPost">
       <div className="ComPre">
     <div><strong>{props.author}</strong></div>
     <div>{props.message}</div>
     </div>
      <MoreVertIcon className="comtiny" />
    </div>
   </li>
 );
}
 
export default CommentListItem;
