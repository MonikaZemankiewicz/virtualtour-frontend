import React from "react";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import VideoDetails from "../components/videos/VideoDetails";
import { useParams } from "react-router-dom";
import * as constants from "../constants";

function VideoDetailsPage() {
  const { id } = useParams();
  const url = constants.SERVER_ADDRESS + "api/videos/";

  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetch(url.concat(id), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 8427f0bfaf16ebda450f89f5988449f6cb67e17f",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setVideo(resp))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Layout>
      <div className="page">
        <VideoDetails video={video}></VideoDetails>
      </div>
    </Layout>
  );
}

export default VideoDetailsPage;
