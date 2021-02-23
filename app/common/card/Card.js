import React from 'react';

import './card.css';

/* This component takes props as
  title - String
  value - Number/String
*/

export default function Card(props) {
  const { title, value } = props;
  return (
    <div className="crd10boxContainer crd10text">
      <div className="crd10title">{title}</div>
      <div className="crd10value">{value}</div>
    </div>
  );
}
