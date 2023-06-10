import { Add, Chat, Home, Person, Settings } from "@mui/icons-material";
import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="add">
          <Add />
        </div>
        <div className="icon-wrapper">
          <div>
            <Home />
            <Chat />
          </div>
          <div>
            <Settings />
            <Person
              style={{
                color: "blue",
                
              }}
            />
          </div>
        </div>
      </div>
      <div className="nav-half"></div>
    </div>
  );
}
