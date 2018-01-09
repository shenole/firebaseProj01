// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDIONf54hLC1BK_6itF0Hnsi46Qh42yx5A",
    authDomain: "contact-form-8de32.firebaseapp.com",
    databaseURL: "https://contact-form-8de32.firebaseio.com",
    projectId: "contact-form-8de32",
    storageBucket: "",
    messagingSenderId: "607089964296"
  };
  firebase.initializeApp(config);

// Reference messages collection
/*
firebase.database() is how you initalize every firebase database, and ref('messages'); is how you reference a specific collection.
*/
var messagesRef = firebase.database().ref('messages');

// Listen for form Submit
document.querySelector('#contact-form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');

// Show alert info sent
document.querySelector('.success').style.display = 'block';

// Hide alert info sent
setTimeout(function(){
  document.querySelector('.success').style.display = 'none';
}, 3000);

// Reset Form
document.querySelector('#contact-form').reset();

// Save message
  saveMessage(name, email);
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save messages to Firebase
function saveMessage(name, email) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email
  });
}
