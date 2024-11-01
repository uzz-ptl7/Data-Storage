fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    // .then(data => console.log(data));
    .then(data => {
        const postDiv = document.getElementById('posts');
    })