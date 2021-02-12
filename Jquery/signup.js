var firebaseConfig = {
  apiKey: "AIzaSyCXfU0dRqJk91_xL9fWyBPmnXD29eyQ1WQ",
  authDomain: "projectalwis.firebaseapp.com",
  databaseURL: "https://projectalwis.firebaseio.com",
  projectId: "projectalwis",
  storageBucket: "projectalwis.appspot.com",
  messagingSenderId: "723390819859",
  appId: "1:723390819859:web:8d921c14dd0f3fd0ffd9e6",
  measurementId: "G-DB3683CHB3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function buyerSignUpAuthentication() {

    var email= document.getElementById("txt-email").value;
    var password= document.getElementById("txt-password").value;
    var retypePassword = document.getElementById("txt-password-confirm").value;

    if (retypePassword === password){
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function(error){
            var errorMessage = error.message;
            console.log(errorMessage);
            window.location.href = "Home.html";
        }).catch(function (error) {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
    }else{
        window.alert("Passwords should be match to proceed");
    }
}


function buyerSignInAuthentication(){

    var email= document.getElementById("txt-name").value;
    var password= document.getElementById("txt-password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(error) {

            var errorMessage = error.message;
            console.log(errorMessage);
            window.location.href = "Home.html";
        })
        .catch(function(error) {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
}

function forgetPassword(){
  var auth = firebase.auth();
  var emailAddress = document.getElementById("txt-name").value;

  auth.sendPasswordResetEmail(emailAddress).then(function() {
    alert("Pasword Rest E-mail Sent Successfully")
    // Email sent.
  }).catch(function(error) {
    alert("An error has occured")
    // An error happened.
  });
}
