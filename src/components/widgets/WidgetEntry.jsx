import React from "react";
import "./css/widgetEntry.css";

export default function WidgetEntry({ title, subtitle, image,onClick }) {

  
  return (
    <div className="entry-body flex" onClick={onClick}>
      <img src={image} alt={title} className="entry-image" />
      <div className="entry-right-body flex">
        <p className="entry-title">{title}</p>
        <p className="entry-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}