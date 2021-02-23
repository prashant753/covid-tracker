import React from 'react';

import './notFound.css';

export default function NotFound(props) {
  return (
    <div>
      Not Found 404, please go to home page
      <button
        onClick={() => props.history.push("/")}
        style={{ padding: "5px", marginLeft: "10px" }}
      >
        Home Page
      </button>
    </div>
  );
}
