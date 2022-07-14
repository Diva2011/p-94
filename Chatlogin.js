var firebaseConfig = {
    apiKey: "AIzaSyAu9gz-P19wbXxiLhTFvlzeywpKpcd7AD4",
    authDomain: "kwitter-4f092.firebaseapp.com",
    databaseURL: "https://kwitter-4f092-default-rtdb.firebaseio.com",
    projectId: "kwitter-4f092",
    storageBucket: "kwitter-4f092.appspot.com",
    messagingSenderId: "848445906330",
    appId: "1:848445906330:web:dc2a74e58c921603d8ee23"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function adduser()
{
    get_name = document.getElementById("user_name").value;
    localStorage.setItem("User_Name" , get_name);
    window.location = "Chatter_room.html";
}