import {useCookies} from 'react-cookie'


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

    static AddImage(body, token) {
        return fetch('http://127.0.0.1:8000/api/images/', {
            'method' : 'POST',
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


    static LoginUser(body) {
        return fetch('http://127.0.0.1:8000/auth/', {
        'method' : 'POST',
        headers: {
            'Content-Type': 'application/json',
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