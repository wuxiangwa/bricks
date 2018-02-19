import React from 'react';

const Levelbar = () => {
  return (
    <nav className={"level app-levelbar"}>
      <div className={"level-left"}>
        <div className={"level-item"}>
          <h3 className={"subtitle is-5"}>
            <strong>Home</strong>
          </h3>
        </div>
      </div>
      <div className={"level-right is-hidden-mobile"}>
        Home
      </div>
    </nav>
  )
}

export default Levelbar
