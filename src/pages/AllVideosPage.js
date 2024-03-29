import React from "react";
import Layout from "../components/Layout";
import MediaList from "../components/MediaList";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import * as constants from "../constants";

function AllVideos() {
  const [videos, setVideos] = useState([]);
  const [token] = useCookies(["mytoken"]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    displayAllVideos();
  }, []);

  const searchVideos = () => {
    let searchedVideos = [];
    {
      videos.map((video) => {
        if (
          video.title
            .toString()
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          video.description
            .toString()
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        ) {
          searchedVideos.push(video);
        }
      });
    }
    setVideos(searchedVideos);
  };

  const displayAllVideos = () => {
    setSearchValue("");
    fetch(constants.SERVER_ADDRESS + "api/videos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 8427f0bfaf16ebda450f89f5988449f6cb67e17f",
        // 'Authorization': `Token ${token['mytoken']}`
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setVideos(resp))
      .catch((error) => console.log(error));
  };

  return (
    <Layout>
      <div className="page">
        <div className="searchbox_div">
          <input
            type="text"
            className="form-control"
            id="search"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            required
          ></input>
          <button
            onClick={searchVideos}
            type="submit"
            className="btn btn-success searchbox_button"
          >
            Search
          </button>
          <button
            onClick={displayAllVideos}
            className="btn btn-danger searchbox_button"
          >
            Cancel
          </button>
        </div>
        <MediaList type="videos" media={videos}></MediaList>
      </div>
    </Layout>
  );
}

export default AllVideos;
