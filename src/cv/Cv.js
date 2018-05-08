import React from 'react';
import './Cv.css';
import SecondPage from "./secondPage/secondPage";
import FirstPage from "./firstPage/firstPage";

function Cv(props) {
  const user = props.user;

  return (
    <div className="Cv">
      {user ?
        <div>
          <FirstPage user={user} sources={{}} />
          <SecondPage user={user} sources={{}} />
        </div>
        : ''}

    </div>
  );
}

export default Cv;
