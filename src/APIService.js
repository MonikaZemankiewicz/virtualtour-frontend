import {useCookies} from 'react-cookie'
import axios from 'axios';



export default class APIService {
    static UpdateImage(image_id, body, token) {
        return fetch(`http://127.0.0.1:8000/api/images/${image_id}/`, {
        'method' : 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
        }, 
        body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static DeleteImage(image_id, token) {
        return fetch(`http://127.0.0.1:8000/api/images/${image_id}/`, {
        'method' : 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
        }
        })
    }

    static UpdateVideo(video_id, body, token) {
        return fetch(`http://127.0.0.1:8000/api/videos/${video_id}/`, {
        'method' : 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
        }, 
        body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static DeleteVideo(video_id, token) {
        return fetch(`http://127.0.0.1:8000/api/videos/${video_id}/`, {
        'method' : 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
        }
        })
    }

    static UpdateVirtualTour(virtualtour_id, body, token) {
        return fetch(`http://127.0.0.1:8000/api/virtualtours/${virtualtour_id}/`, {
        'method' : 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
        }, 
        body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static DeleteVirtualTour(virtualtour_id, token) {
        return fetch(`http://127.0.0.1:8000/api/virtualtours/${virtualtour_id}/`, {
        'method' : 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
        }
        })
    }

    static GetAllImages(token) {
        return fetch('http://127.0.0.1:8000/api/images', {
        'method' : 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
        }
        })
    }

    static GetAllVideos(token) {
        return fetch('http://127.0.0.1:8000/api/videos', {
        'method' : 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
        }
        })
    }

    static GetAllVirtualTours(token) {
        return fetch('http://127.0.0.1:8000/api/virtualtours', {
        'method' : 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
        }
        })
    }


    static LoginUser(body) {
        return fetch('http://127.0.0.1:8000/auth/', {
        'method' : 'POST',
        headers: {
            'Content-Type': 'application/json',
            //'Referer': 'http://localhost:3000/'
        }, 
        body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    
    static RegisterUser(body) {
        return fetch('http://127.0.0.1:8000/api/users/', {
        'method' : 'POST',
        headers: {
            'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(body)
        }).then(resp => resp.json())
    }
}