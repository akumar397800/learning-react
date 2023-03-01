import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle =()=> {
    if(myStyle.color === 'white'){
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
      })
      setBtnText("Enable Dark Mode");
      
    }
    else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
      })
      setBtnText("Enable Light Mode");
    }
  }
  return (
    <div>
      <table className="table my-4" style={myStyle}>
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
      <div className="container">
        <button onClick={toggleStyle}   className="btn btn-secondary">{btnText}</button>
      </div>
    </div>
  );
}
