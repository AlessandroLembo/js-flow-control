
const BaseUrl = 'https://jsonplaceholder.typicode.com';
const postId = 5;

function getPost(id, successCb, errorCb) {
    fetch(BaseUrl + '/posts/' + id)
    .then(response => response.json())
    .then(data => {
        successCb(data)
    })
    .catch(error => {
        errorCb(error)
    })
}

function getUser(id, successCb, errorCb) {
    fetch(BaseUrl + '/users/' + id)
    .then(response => response.json())
    .then(data => {
        successCb(data)
    })
    .catch(error => {
        errorCb(error)
    })
}

// invoco la funzione passando come argomento la variabile che è il singolo post che voglio ottenere
getPost(postId, (data) => {
    console.log('Post:', data)
    // se ho ottenuto il singolo post faccio partire la chiamata per sapere l'autore del post.
    getUser(data.userId, (data) => {
        console.log('User:', data)
    }, (error) => {
        console.error(error)
    })
}, (error) => {
    console.error(error)
});

