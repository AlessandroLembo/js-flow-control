
const baseUrl = 'https://jsonplaceholder.typicode.com';
const postId5 = 5;
const postId18 = 18;
const card = document.getElementById('card');
const title = document.getElementById('title');
const author = document.getElementById('author');
const text = document.getElementById('text');
const title2 = document.getElementById('title2');
const text2 = document.getElementById('text2');
const author2 = document.getElementById('author2');


function getPost5(id, successCb, errorCb) {
    fetch(baseUrl + '/posts/' + id)
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

function getUserPost5(id, successCb, errorCb) {
    fetch(baseUrl + '/users/' + id)
    .then(response => response.json())
    .then(data => {
        successCb(data);
        author.classList.add('text-success');
        author.innerText = `${data.username} (${data.name})`;

    })
    .catch(error => {
        errorCb(error);
    })
}

// invoco la funzione passando come argomento la variabile che è il singolo post che voglio ottenere
getPost5(postId5, (data) => {
    console.log('Post:', data)
    // se ho ottenuto il singolo post faccio partire la chiamata per sapere l'autore del post.
    getUserPost5(data.userId, (data) => {
        console.log('User:', data)
    }, (error) => {
        console.error(error)
    })
}, (error) => {
    console.error(error)
});

/*----------------------------------------------------------------*/
// Promise patterns: Utilizzo dell'oggetto Promise per ottenere un nuovo post 
function getPost18(id) {
    return fetch(baseUrl + '/posts/' + id)
    .then(response => response.json())
}

function getUserPost18(id) {
    return fetch(baseUrl + '/users/' + id)
    .then(response => response.json())
}

getPost18(postId18)
    .then(post => {
        console.log('Post:', post);
        title2.classList.add('text-success');
        title2.innerText = post.title;
        text2.innerText = post.body;
        return getUserPost18(post.userId)
    })
    .then(user => {
        console.log('User:', user)
        author2.classList.add('text-success');
        author2.innerText = `${user.username} (${user.name})`;
    })
    .catch(error => {
        console.error(error);
        title2.classList.add('text-danger');
        title2.innerText = 'Spiacenti, non è stato possibile recuperare il post';
    })


