import React from "react";
import BookMark from "./bookmarks";
import Qualitie from "./qualities";

const User = (props) => {
  const handleDelete = () => {
    props.onDelete(props.user._id);
  };

  const handleToggleBookmark = () => {
    props.onToggleBookMark(props.user._id);
  };

  return (
    <tr>
      <td>{props.user.name}</td>
      <td>
        {props.user.qualities.map((quality) => (
          <Qualitie key={quality._id} qualitie={quality} />
        ))}
      </td>
      <td>{props.user.profession.name}</td>
      <td>{props.user.completedMeetings}</td>
      <td>{props.user.rate} / 5</td>
      <td>
        <BookMark
          status={props.user.bookmark}
          onToggle={handleToggleBookmark}
        />
      </td>
      <td>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};
export default User;
