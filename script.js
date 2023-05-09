
const BaseUrl = 'https://jsonplaceholder.typicode.com';
const postId = 5;

function getPost(id) {
    fetch(BaseUrl + '/posts/' + id)
    .then(response => response.json())
    .then(data => {
        console.log('Post:', data)
    })
    .catch(error => {
        console.error(error)
    })
}

function getUser(id) {
    fetch(BaseUrl + '/users/' + id)
    .then(response => response.json())
    .then(data => {
        console.log('User:', data)
    })
    .catch(error => {
        console.error(error)
    })
}

// invoco la funzione passando come argomento la variabile che è il singolo post che voglio ottenere
getPost(postId);

/* invoco la funzione passando come argomento l'userID ottenuto dalla chiamata del
   singolo post, e che corrisponde all'autore di quel post*/
getUser(1);