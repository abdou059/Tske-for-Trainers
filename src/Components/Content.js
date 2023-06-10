import React from "react";

export default function Content({data}) {
  return (
    <div className="content_wrapper">
      <div className="image_wrapper">
        <img
          src={data.photo}
          alt="profile img"
        />
        <h3>{data.name}</h3>
        <p>developer</p>
        <p>location</p>
      </div>
      <div className="data_wrapper">
        <div className="number">

        <div>
          {data.followers}
          <span>followers</span>
        </div>
        <div>
          {data.follow}
          <span>following</span>
        </div>
        <div>
          {data.likes}
          <span>likes</span>
        </div>
        </div>
        <div className="button_wrapper">
            <button>Edit profile</button>
            <button>Add friends</button>
        </div>
      </div>
    </div>
  );
}
