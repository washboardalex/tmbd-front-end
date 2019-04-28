const apiCall = (qryStr) => {
    return fetch(`https://api.themoviedb.org/3/${qryStr}`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
}

export default apiCall;