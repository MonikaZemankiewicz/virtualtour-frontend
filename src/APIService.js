import {useCookies} from 'react-cookie'
import axios from 'axios';



export default class APIService {
    static UpdateImage(image_id, body, token) {
        return fetch(`https://monikazemankiewicz.pythonanywhere.com/api/images/${image_id}/`, {
        'method' : 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
        }, 
        body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static DeleteImage(image_id, token) {
        return fetch(`https://monikazemankiewicz.pythonanywhere.com/api/images/${image_id}/`, {
        'method' : 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
        }
        })
    }

    static UpdateVideo(video_id, body, token) {
        return fetch(`https://monikazemankiewicz.pythonanywhere.com/api/videos/${video_id}/`, {
        'method' : 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
        }, 
        body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static DeleteVideo(video_id, token) {
        return fetch(`https://monikazemankiewicz.pythonanywhere.com/api/videos/${video_id}/`, {
        'method' : 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
        }
        })
    }

    static GetAllImages(token) {
        return fetch('https://monikazemankiewicz.pythonanywhere.com/api/images', {
        'method' : 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
        }
        })
    }

    static GetAllVideos(token) {
        return fetch('https://monikazemankiewicz.pythonanywhere.com/api/videos', {
        'method' : 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
        }
        })
    }

    static GetAllVirtualTours(token) {
        return fetch('https://monikazemankiewicz.pythonanywhere.com/api/virtualtours', {
        'method' : 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
        }
        })
    }


    static LoginUser(body) {
        return fetch('https://monikazemankiewicz.pythonanywhere.com/auth/', {
        'method' : 'POST',
        headers: {
            'Content-Type': 'application/json',
            //'Referer': 'http://localhost:3000/'
        }, 
        body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    
    static RegisterUser(body) {
        return fetch('https://monikazemankiewicz.pythonanywhere.com/api/users/', {
        'method' : 'POST',
        headers: {
            'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(body)
        }).then(resp => resp.json())
    }
}