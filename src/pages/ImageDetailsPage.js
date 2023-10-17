import React from "react";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import ImageDetails from "../components/images/ImageDetails";
import { useParams } from "react-router-dom";
import * as constants from "../constants";

function AllImages() {
  const { id } = useParams();
  const url = constants.SERVER_ADDRESS + "api/images/";

  const [image, setImage] = useState([]);
  const [editImage, setEditImage] = useState(null);

  useEffect(() => {
    fetch(url.concat(id), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 8427f0bfaf16ebda450f89f5988449f6cb67e17f",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setImage(resp))
      .catch((error) => console.log(error));
  }, []);

  const editBtn = (image) => {
    setEditImage(image);
  };

  return (
    <Layout>
      <div className="page">
        <ImageDetails image={image} editBtn={editBtn}></ImageDetails>
      </div>
    </Layout>
  );
}

export default AllImages;
