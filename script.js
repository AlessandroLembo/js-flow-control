
const BaseUrl = 'https://jsonplaceholder.typicode.com';
const postId = 5;
const card = document.getElementById('card');
const title = document.getElementById('title');
const author = document.getElementById('author');
const text = document.getElementById('text');

function getPost(id, successCb, errorCb) {
    fetch(BaseUrl + '/posts/' + id)
    .then(response => response.json())
    .then(data => {
        successCb(data);
        title.classList.add('text-success');
        text.innerText = data.body;
        title.innerText = data.title;
    })
    .catch(error => {
        errorCb(error);
        title.classList.add('text-danger');
        title.innerText = 'Spiacenti, non è stato possibile recuperare il post';
    })
}

function getUser(id, successCb, errorCb) {
    fetch(BaseUrl + '/users/' + id)
    .then(response => response.json())
    .then(data => {
        successCb(data);
        author.classList.add('text-success');
        author.innerText = data.name;

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

