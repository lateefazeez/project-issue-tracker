import "../ListMaker/List";
import classNames from "classnames";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap";

const CommentListItem = (props) => {
  const { id, author, message, commentDelete } = props;

  const commentClass = classNames("list__item", {
    "list__item--selected": props.selected,
  });

  return (
    <li
      id="commenttile"
      className={commentClass}
      selected={props.selected}
      onClick={() => console.log("Yo")}
    >
      <div className="ComPost">
        <div className="ComPre">
          <div>
            <strong>{author}</strong>
          </div>
          <div>{message}</div>
        </div>
        <UncontrolledDropdown onClick={(e) => e.stopPropagation()}>
          <DropdownToggle
            className="btn-icon-only text-light"
            role=""
            size="sm"
            color="#585858"
            backgroundColor="#585858"
            id={"hi"}
          >
            <MoreVertIcon className="comtiny" />
          </DropdownToggle>
          <DropdownMenu
            className="dropdown-menu-arrow"
            end
            onClick={(e) => console.log(e)}
          >
            <DropdownItem
              onClick={() => {
                commentDelete(id);
              }}
            >
              Delete Comment
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </li>
  );
};

export default CommentListItem;
