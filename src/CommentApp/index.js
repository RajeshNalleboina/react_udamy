import React from "react";
import CommentDetails from "./CommentDetails";
import faker from "@faker-js/faker";
import ApproveCard from "./ApproveCard";

const CommentApp = () => {
  return (
    <div className="ui container comments">
      <ApproveCard>
        <CommentDetails
          image={faker.image.avatar()}
          auther="Rajesh"
          date={new Date().getHours() + ":" + new Date().getMinutes()}
          content="Nice blog related to React!!"
        />
      </ApproveCard>
      <ApproveCard>
        <CommentDetails
          image={faker.image.avatar()}
          auther="Rajesh2"
          date={new Date().getHours() + ":" + new Date().getMinutes()}
          content="Nice blog related to Angular!!"
        />
      </ApproveCard>
      <ApproveCard>
        <CommentDetails
          image={faker.image.avatar()}
          auther="Rajesh3"
          date={new Date().getHours() + ":" + new Date().getMinutes()}
          content="Nice blog related to React-redux!!"
        />
      </ApproveCard>
      <ApproveCard>
        <CommentDetails
          image={faker.image.avatar()}
          auther="Rajesh4"
          date={new Date().getHours() + ":" + new Date().getMinutes()}
          content="Nice blog related to router!!"
        />
      </ApproveCard>
      {/* <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 11PM</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div> */}
    </div>
  );
};

export default CommentApp;
