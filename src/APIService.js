import { useCookies } from "react-cookie";
import axios from "axios";
import * as constants from "./constants";

export default class APIService {
  static UpdateImage(image_id, body, token) {
    return fetch(constants.SERVER_ADDRESS + `api/images/${image_id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static DeleteImage(image_id, token) {
    return fetch(constants.SERVER_ADDRESS + `api/images/${image_id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
  }

  static UpdateVideo(video_id, body, token) {
    return fetch(constants.SERVER_ADDRESS + `api/videos/${video_id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static DeleteVideo(video_id, token) {
    return fetch(constants.SERVER_ADDRESS + `api/videos/${video_id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
  }

  static UpdateVirtualTour(virtualtour_id, body, token) {
    return fetch(
      constants.SERVER_ADDRESS + `api/virtualtours/${virtualtour_id}/`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(body),
      }
    ).then((resp) => resp.json());
  }

  static DeleteVirtualTour(virtualtour_id, token) {
    return fetch(
      constants.SERVER_ADDRESS + `api/virtualtours/${virtualtour_id}/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    );
  }

  static GetAllImages(token) {
    return fetch(constants.SERVER_ADDRESS + "api/images", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
  }

  static GetAllVideos(token) {
    return fetch(constants.SERVER_ADDRESS + "api/videos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
  }

  static GetAllVirtualTours(token) {
    return fetch(constants.SERVER_ADDRESS + "api/virtualtours", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
  }

  static LoginUser(body) {
    return fetch(constants.SERVER_ADDRESS + "auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //'Referer': 'http://localhost:3000/'
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static RegisterUser(body) {
    return fetch(constants.SERVER_ADDRESS + "api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }
}
