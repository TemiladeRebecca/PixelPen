import React from "react";

const styles = {
  display: "flex",
  justifyContent: "space-between",
};

function Header(props) {
  return (
    <header>
      <div style={styles}>
        <h1 style={{ margin: 0 }}>Note Pad</h1>
        <button
          onClick={() => props.toggleDarkMode()}
          style={{ alignSelf: "center" }}
        >
          {props.darkMode ? "Dark Mode" : "Light Mode"}
        </button>
        <button
          onClick={() => props.displayNote()}
          style={{ marginLeft: "auto" }}
        >
          Write
        </button>
      </div>
    </header>
  );
}

export default Header;
