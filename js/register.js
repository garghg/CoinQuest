import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
// Find needed libraries here: https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { firebaseConfig } from './config.js'; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

//submit button
var submit = document.getElementById('submit')
submit.addEventListener('click', function(e){
    e.preventDefault();
    //inputs
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            sessionStorage.setItem('register', true);
            window.location.href = './html/home.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            var errorArr = String(errorCode).split("/");
            const errorMessage = errorArr[(errorArr.length-1)].replace(/-/g, " ").replace(/\b\w/g, (match) => match.toUpperCase());
            alert(errorMessage);
        });
})