export default class APIService {
    static UpdateImage(image_id, body) {
        return fetch(`http://127.0.0.1:8000/api/images/${image_id}/`, {
        'method' : 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token 8427f0bfaf16ebda450f89f5988449f6cb67e17f'  
        }, 
        body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static AddImage(body) {
        return fetch('http://127.0.0.1:8000/api/images/', {
            'method' : 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token 8427f0bfaf16ebda450f89f5988449f6cb67e17f'  
            }, 
            body: JSON.stringify(body)
            }).then(resp => resp.json())
    }
}