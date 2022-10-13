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
     room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
like=message_data['like'];
message=message_data['message'];

nametag="<h4>"+name+" <img src='tick.png' class='user_tick'></h4>";
messagetag="<h4 class='message_h4'>"+message+"</h4>";
likebuttontag="<button id="+firebase_message_id+" class='btn btn-primary' value="+like+" onclick='update_like(this.id)'>like: "+like+"</button> <hr>";
row=nametag+messagetag+likebuttontag;
document.getElementById("output").innerHTML+=row;


//End code
                  }
            });
      });
}
getData();

function update_like(message_id){
      console.log("click on the button"+message_id);
      button_id=message_id;
      like=document.getElementById(button_id).value;
      update_likes=Number(like)+1;
      console.log(update_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:update_likes
      });
}


function logout(){
      window.location = "index.html";
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
}
