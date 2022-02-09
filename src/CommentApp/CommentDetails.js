import React from "react";
import faker from "@faker-js/faker";

const CommentDetails = ({ image, auther, date, content }) => {
  return (
    // <div className="ui cards">
    //   <div className="card">
    <div className="comment">
      <a href="/" className="avatar">
        <img src={image} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {auther}
        </a>
        <div className="metadata">
          <span className="date">Today at {date}PM</span>
        </div>
        <div className="text">{content}</div>
      </div>
    </div>
    // <div class="extra content">
    //   <div class="ui two buttons">
    //     <div class="ui basic green button">Approve</div>
    //     <div class="ui basic red button">Decline</div>
    //   </div>
    // </div>
    //   </div>
    // </div>
  );
};

export default CommentDetails;
