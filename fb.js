// Objects with which we will interact from our eventsheet

var AUTH = {
  errcd:"",
  errmsg:"",
  state:"",
  userID:"",
  userEmail:""
}

var DB = {
  highScore:0,
  highScoreName:""
}

function SetScore(name, score){
  firebase.database().ref("HighScore/" + Date.now()).set({
    Name: name,
    Score: score
  });

  firebase.database().ref("Stats").child("GamesPlayed").set(firebase.database.ServerValue.increment(1));
}

function GetHighScore(){
  var query = firebase.database().ref('HighScore').orderByChild('Score').limitToLast(1);
  query.on('value', function(snapshot){
    snapshot.forEach(function(childSnapshot){
      DB.highScoreName = childSnapshot.child("Name").val();
      DB.highScore = childSnapshot.child("Score").val();
    });
  });
}


