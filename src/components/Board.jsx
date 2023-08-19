import "../styles/board.css";
import colors from "../data/colors";
function Board(props) {
  // console.log(props.color)
  return (
    <div className="board_box">
      <div className="color_div" style={{ background: `${colors[Number(props.boardColor)]}`}}></div>
      <div className="name_div">{props.boardName}</div>
      <div className="colon_div">
        <div className="material-icons-outlined">more_vert</div>
      </div>
    </div>
  );
}

export default Board;
