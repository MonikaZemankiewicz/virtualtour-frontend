import React from "react";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import MediaList from "../components/MediaList";
import * as constants from "../constants";

function AllImages() {
  const [images, setImages] = useState([]);
  const [token] = useCookies(["mytoken"]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    displayAllImages();
  }, []);

  const searchImages = () => {
    let searchedImages = [];
    {
      images.map((image) => {
        if (
          image.title
            .toString()
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          image.description
            .toString()
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        ) {
          searchedImages.push(image);
        }
      });
    }
    setImages(searchedImages);
  };

  const displayAllImages = () => {
    setSearchValue("");
    fetch(constants.SERVER_ADDRESS + "api/images", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 8427f0bfaf16ebda450f89f5988449f6cb67e17f",
        // 'Authorization': `Token ${token['mytoken']}`
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setImages(resp))
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
            onClick={searchImages}
            type="submit"
            className="btn btn-success searchbox_button"
          >
            Search
          </button>
          <button
            onClick={displayAllImages}
            className="btn btn-danger searchbox_button"
          >
            Cancel
          </button>
        </div>

        <MediaList type="images" media={images}></MediaList>
      </div>
    </Layout>
  );
}

export default AllImages;
