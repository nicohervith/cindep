import React from "react";
import { useParams } from "react-router-dom";

const MediaPage = () => {
  const { movieTitle } = useParams();

  return <div>MediaPage for {movieTitle}</div>;
};

export default MediaPage;
