import React from "react";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import VirtualTourDetails from "../components/virtualtours/VirtualTourDetails";
import { useParams } from "react-router-dom";
import * as constants from "../constants";

function VirtualTourDetailsPage() {
  const { id } = useParams();
  const url = constants.SERVER_ADDRESS + "api/virtualtours/";

  const [virtualtour, setVirtualTour] = useState([]);

  useEffect(() => {
    fetch(url.concat(id), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 8427f0bfaf16ebda450f89f5988449f6cb67e17f",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setVirtualTour(resp);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Layout>
      <div className="page">
        <VirtualTourDetails virtualtour={virtualtour}></VirtualTourDetails>
      </div>
    </Layout>
  );
}

export default VirtualTourDetailsPage;
