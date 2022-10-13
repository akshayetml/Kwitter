// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCISYCr4SMvgVAMChlUDrcssQgzbmIcdEQ",
      authDomain: "kwitter-cbfb8.firebaseapp.com",
      databaseURL: "https://kwitter-cbfb8-default-rtdb.firebaseio.com",
      projectId: "kwitter-cbfb8",
      storageBucket: "kwitter-cbfb8.appspot.com",
      messagingSenderId: "651339316136",
      appId: "1:651339316136:web:a81e04ffd8b5e737573b9d"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
   
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom(){
      room_names=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_names).update({
            purpose:"addingroomname"
      });
      localStorage.setItem("room_name",room_name );
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML += row;


      //End code
      });});}
getData();

function redirectToRoomName(name){
     console.log(name);
     localStorage.setItem("room_name", name );
     window.location = "kwitter_page.html";
}

function logout(){
      window.location = "index.html";
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
}

