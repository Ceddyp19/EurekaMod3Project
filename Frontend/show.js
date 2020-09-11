const postUrl = "http://localhost:3000/posts"
const postsList = document.querySelector('#posts')

fetchPosts();

function fetchPosts() {
    fetch(postUrl)
        .then(r => r.json())
        .then(renderPosts)
}

function renderPosts(posts) {
    for (const post of posts) {
        renderPost(post)
    }
}

function renderPost(post) {
    console.log(post)
    const editBtn = document.createElement("button")
    editBtn.innerText = "Edit"
    editBtn.setAttribute('data-id', post.id)
    editBtn.setAttribute('class', 'button')
    editBtn.addEventListener('click', editPost)
    //===========Delete button creation
    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete"
    deleteBtn.setAttribute('data-id', post.id)
    deleteBtn.setAttribute('class', 'button')
    //deleteBtn.addEventListener('click', deletePost)
    //==============Favorite Button creation
    const favBtn = document.createElement("button")
    favBtn.innerText = "Favorite"
    favBtn.setAttribute('data-id', post.id)
    favBtn.setAttribute('class', 'button')
    //favBtn.addEventListener('click', favoritePost)
    //=============Post div creation
    let postDiv = document.createElement('div')
    postDiv.innerHTML = `<h2>${post.title}</h2>
                      <p>${post.created_at}</p>
                      <p>${post.description}</p>`

    //=============Appending children 
    postDiv.append(editBtn)
    postDiv.append(deleteBtn)
    postDiv.append(favBtn)
    postsList.append(postDiv)

}


function editPost(){
    
}