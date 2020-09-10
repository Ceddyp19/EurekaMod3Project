//Goals
// When the html page is loaded, we want a login screen/div to appear 
//User is shown their specific posts once logged in
//User can create posts
//User can edit posts
//User can delete posts
//User can favorite posts
//User can signout
const userUrl = "http://localhost:3000/users"
const postUrl = "http://localhost:3000/posts"
const body = document.querySelector('body')
showLoginScreen();
const loginButton = document.querySelector('#login').addEventListener('click', userLogin)
const signInButton = document.querySelector('#sign-up').addEventListener('click', userSignUp)

//=========================================================================
//Login Functions
function showLoginScreen(){
   let loginDiv = document.createElement('div')
   loginDiv.setAttribute('id', 'loginScreen')
   loginDiv.innerHTML = ` <h2>Hello, Login or Sign-up </h2>
                          <button id='login'>Login</button>
                          <button id='sign-up'>Signup</button>`
  body.append(loginDiv)
}

function userLogin(){
    // let loginDiv = document.querySelector('div')
    // loginDiv.style.visibility = "hidden";
    body.innerHTML = ''
    // fetch(userUrl)
    // .then(resp => resp.json())
    // .then(console.log)
    let loginForm = document.createElement('form')
    loginForm.setAttribute('id','login-form')
    
    loginForm.innerHTML = `<label for="name">Name:</label>
                           <input type="text" id="name" name="fname"><br>
                           <label for="email">Email:</label>
                           <input type="text" id="email" name="email"><br>
                           <input type="submit" value="Submit">`
    body.append(loginForm)
    loginForm.addEventListener('submit', verifyUser)
}


function userSignUp(){
    body.append(loginForm)
  console.log('hi')
}


function verifyUser(e){
    e.preventDefault();
    //console.log(e.target.email.value)
    fetch(userUrl)
    .then(resp => resp.json())
    .then((users) => {
        for( user of users){
            //console.log(user.email)
            if(e.target.name.value === user.name & e.target.email.value === user.email){
                showApp();
            }
        }
    });
}
//=============================================================================
//Sign-up Functions





//==============================================================================
//Render Specific User Posts

function showApp(){
    body.innerHTML = ''
//must fetch all posts related to user 


    postsDiv = document.createElement('div')
    
    console.log('this is where the app pops up')
}
