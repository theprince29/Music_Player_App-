import React from "react";
import "./css/widgetCard.css";
import WidgetEntry from "./WidgetEntry";
import { IconContext } from "react-icons";
import { FiChevronRight } from "react-icons/fi";

export default function WidgetCard({ title, similar, featured, newRelease }) {
  console.log(
    "similar",
    similar,
    "featured",
    featured,
    "newRelease",
    newRelease
  );
  const handleSelectTrack = (track) => {
    onSelectTrack(track);
  };
  return (
    <div className="widgetcard-body">
      <p className="widget-title">{title}</p>
      {similar
        ? similar.map((artist) => (
            <WidgetEntry
              key={artist.id} 
              title={artist?.name}
              subtitle={artist?.followers?.total + " Followers"}
              image={artist?.images[2]?.url}
              onClick={handleSelectTrack}
            />
          ))
        : featured
        ? featured.map((playlist) => (
            <WidgetEntry
              key={playlist.id}
              title={playlist?.name}
              subtitle={playlist?.tracks?.total + " Songs"}
              image={playlist?.images[0]?.url}
              onClick={handleSelectTrack}
            />
          ))
        : newRelease
        ? newRelease.map((album) => (
            <WidgetEntry
              key={album.id}
              title={album?.name}
              subtitle={album?.artists[0]?.name}
              image={album?.images[2]?.url}
              onClick={handleSelectTrack} 
            />
          ))
        : null}
      <div className="widget-fade">
        <div className="fade-button">
          <IconContext.Provider value={{ size: "24px", color: "#c4d0e3" }}>
            <FiChevronRight />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}