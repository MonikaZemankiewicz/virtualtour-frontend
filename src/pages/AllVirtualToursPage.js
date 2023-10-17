import React from "react";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import MediaList from "../components/MediaList";
import * as constants from "../constants";

function AllVirtualToursPage() {
  const [virtualtours, setVirtualTours] = useState([]);
  const [token] = useCookies(["mytoken"]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    displayAllVirtualTours();
  }, []);

  const searchVirtualTours = () => {
    let searchedVirtualTours = [];
    {
      virtualtours.map((virtualtour) => {
        if (
          virtualtour.title
            .toString()
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          virtualtour.description
            .toString()
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        ) {
          searchedVirtualTours.push(virtualtour);
        }
      });
    }
    setVirtualTours(searchedVirtualTours);
  };

  const displayAllVirtualTours = () => {
    setSearchValue("");
    fetch(constants.SERVER_ADDRESS + "api/virtualtours", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 8427f0bfaf16ebda450f89f5988449f6cb67e17f",
        // 'Authorization': `Token ${token['mytoken']}`
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setVirtualTours(resp))
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
            onClick={searchVirtualTours}
            type="submit"
            className="btn btn-success searchbox_button"
          >
            Search
          </button>
          <button
            onClick={displayAllVirtualTours}
            className="btn btn-danger searchbox_button"
          >
            Cancel
          </button>
        </div>
        <MediaList type="virtualtours" media={virtualtours}></MediaList>
      </div>
    </Layout>
  );
}

export default AllVirtualToursPage;
