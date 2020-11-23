// Objects with which we will interact from our eventsheet

var AUTH = {
  errcd:"",
  errmsg:"",
  state:"",
  userID:"",
  userEmail:""
}

var DB = {
  leaderboardLoaded:0,
  pos1Score:0,
  pos1Name:"",
  pos1Str:"",
  pos2Score:0,
  pos2Name:"",
  pos2Str:"",
  pos3Score:0,
  pos3Name:"",
  pos3Str:"",
  pos4Score:0,
  pos4Name:"",
  pos4Str:"",
  pos5Score:0,
  pos5Name:"",
  pos5Str:"",
  pos6Score:0,
  pos6Name:"",
  pos6Str:"",
  pos7Score:0,
  pos7Name:"",
  pos7Str:"",
  pos8Score:0,
  pos8Name:"",
  pos8Str:"",
  pos9Score:0,
  pos9Name:"",
  pos9Str:"",
  pos10Score:0,
  pos10Name:"",
  pos10Str:"",
  pos11Score:0,
  pos11Name:"",
  pos11Str:"",
  pos12Score:0,
  pos12Name:"",
  pos12Str:"",
  pos13Score:0,
  pos13Name:"",
  pos13Str:"",
  pos14Score:0,
  pos14Name:"",
  pos14Str:"",
  pos15Score:0,
  pos15Name:"",
  pos15Str:"",
  pos16Score:0,
  pos16Name:"",
  pos16Str:"",
  pos17Score:0,
  pos17Name:"",
  pos17Str:"",
  pos18Score:0,
  pos18Name:"",
  pos18Str:"",
  pos19Score:0,
  pos19Name:"",
  pos19Str:"",
  pos20Score:0,
  pos20Name:"",
  pos20Str:"",
  pos21Score:0,
  pos21Name:"",
  pos21Str:"",
  pos22Score:0,
  pos22Name:"",
  pos22Str:"",
  pos23Score:0,
  pos23Name:"",
  pos23Str:"",
  pos24Score:0,
  pos24Name:"",
  pos24Str:"",
  pos25Score:0,
  pos25Name:"",
  pos25Str:"",
  pos26Score:0,
  pos26Name:"",
  pos26Str:"",
  pos27Score:0,
  pos27Name:"",
  pos27Str:"",
  posTime:0
}

function SetScore(name, score){
  DB.posTime = Date.now();

  firebase.database().ref("HighScore/" + DB.posTime).set({
    Name: name,
    Score: score
  });

  firebase.database().ref("Stats").child("GamesPlayed").set(firebase.database.ServerValue.increment(1));
}

function GetHighScore(){
  var i = 27;
  var query = firebase.database().ref('HighScore').orderByChild('Score').limitToLast(27);
  query.on('value', function(snapshot){
    snapshot.forEach(function(childSnapshot){
      switch (i) {
        case 27:
          DB.pos27Name = childSnapshot.child("Name").val();
          DB.pos27Score = childSnapshot.child("Score").val();
          DB.pos27Str = "    27     " + ("       " + DB.pos27Score.toString()).slice(-7) + "     " + ("   " + DB.pos27Name).slice(-3);
          break;
        case 26:
          DB.pos26Name = childSnapshot.child("Name").val();
          DB.pos26Score = childSnapshot.child("Score").val();
          DB.pos26Str = "    26     " + ("       " + DB.pos26Score.toString()).slice(-7) + "     " + ("   " + DB.pos26Name).slice(-3)
          break;
        case 25:
          DB.pos25Name = childSnapshot.child("Name").val();
          DB.pos25Score = childSnapshot.child("Score").val();
          DB.pos25Str = "    25     " + ("       " + DB.pos25Score.toString()).slice(-7) + "     " + ("   " + DB.pos25Name).slice(-3)
          break;
        case 24:
          DB.pos24Name = childSnapshot.child("Name").val();
          DB.pos24Score = childSnapshot.child("Score").val();
          DB.pos24Str = "    24     " + ("       " + DB.pos24Score.toString()).slice(-7) + "     " + ("   " + DB.pos24Name).slice(-3)
          break;
        case 23:
          DB.pos23Name = childSnapshot.child("Name").val();
          DB.pos23Score = childSnapshot.child("Score").val();
          DB.pos23Str = "    23     " + ("       " + DB.pos23Score.toString()).slice(-7) + "     " + ("   " + DB.pos23Name).slice(-3)
          break;
        case 22:
          DB.pos22Name = childSnapshot.child("Name").val();
          DB.pos22Score = childSnapshot.child("Score").val();
          DB.pos22Str = "    22     " + ("       " + DB.pos22Score.toString()).slice(-7) + "     " + ("   " + DB.pos22Name).slice(-3)
          break;
        case 21:
          DB.pos21Name = childSnapshot.child("Name").val();
          DB.pos21Score = childSnapshot.child("Score").val();
          DB.pos21Str = "    21     " + ("       " + DB.pos21Score.toString()).slice(-7) + "     " + ("   " + DB.pos21Name).slice(-3)
          break;
        case 20:
          DB.pos20Name = childSnapshot.child("Name").val();
          DB.pos20Score = childSnapshot.child("Score").val();
          DB.pos20Str = "    20     " + ("       " + DB.pos20Score.toString()).slice(-7) + "     " + ("   " + DB.pos20Name).slice(-3)
          break;
        case 19:
          DB.pos19Name = childSnapshot.child("Name").val();
          DB.pos19Score = childSnapshot.child("Score").val();
          DB.pos19Str = "    19     " + ("       " + DB.pos19Score.toString()).slice(-7) + "     " + ("   " + DB.pos19Name).slice(-3)
          break;
        case 18:
          DB.pos18Name = childSnapshot.child("Name").val();
          DB.pos18Score = childSnapshot.child("Score").val();
          DB.pos18Str = "    18     " + ("       " + DB.pos18Score.toString()).slice(-7) + "     " + ("   " + DB.pos18Name).slice(-3)
          break;
        case 17:
          DB.pos17Name = childSnapshot.child("Name").val();
          DB.pos17Score = childSnapshot.child("Score").val();
          DB.pos17Str = "    17     " + ("       " + DB.pos17Score.toString()).slice(-7) + "     " + ("   " + DB.pos17Name).slice(-3)
          break;
        case 16:
          DB.pos16Name = childSnapshot.child("Name").val();
          DB.pos16Score = childSnapshot.child("Score").val();
          DB.pos16Str = "    16     " + ("       " + DB.pos16Score.toString()).slice(-7) + "     " + ("   " + DB.pos16Name).slice(-3)
          break;
        case 15:
          DB.pos15Name = childSnapshot.child("Name").val();
          DB.pos15Score = childSnapshot.child("Score").val();
          DB.pos15Str = "    15     " + ("       " + DB.pos15Score.toString()).slice(-7) + "     " + ("   " + DB.pos15Name).slice(-3)
          break;
        case 14:
          DB.pos14Name = childSnapshot.child("Name").val();
          DB.pos14Score = childSnapshot.child("Score").val();
          DB.pos14Str = "    14     " + ("       " + DB.pos14Score.toString()).slice(-7) + "     " + ("   " + DB.pos14Name).slice(-3)
          break;
        case 13:
          DB.pos13Name = childSnapshot.child("Name").val();
          DB.pos13Score = childSnapshot.child("Score").val();
          DB.pos13Str = "    13     " + ("       " + DB.pos13Score.toString()).slice(-7) + "     " + ("   " + DB.pos13Name).slice(-3)
          break;
        case 12:
          DB.pos12Name = childSnapshot.child("Name").val();
          DB.pos12Score = childSnapshot.child("Score").val();
          DB.pos12Str = "    12     " + ("       " + DB.pos12Score.toString()).slice(-7) + "     " + ("   " + DB.pos12Name).slice(-3)
          break;
        case 11:
          DB.pos11Name = childSnapshot.child("Name").val();
          DB.pos11Score = childSnapshot.child("Score").val();
          DB.pos11Str = "    11     " + ("       " + DB.pos11Score.toString()).slice(-7) + "     " + ("   " + DB.pos11Name).slice(-3)
          break;
        case 10:
          DB.pos10Name = childSnapshot.child("Name").val();
          DB.pos10Score = childSnapshot.child("Score").val();
          DB.pos10Str = "    10     " + ("       " + DB.pos10Score.toString()).slice(-7) + "     " + ("   " + DB.pos10Name).slice(-3)
          break;
        case 9:
          DB.pos9Name = childSnapshot.child("Name").val();
          DB.pos9Score = childSnapshot.child("Score").val();
          DB.pos9Str = "     9     " + ("       " + DB.pos9Score.toString()).slice(-7) + "     " + ("   " + DB.pos9Name).slice(-3)
          break;
        case 8:
          DB.pos8Name = childSnapshot.child("Name").val();
          DB.pos8Score = childSnapshot.child("Score").val();
          DB.pos8Str = "     8     " + ("       " + DB.pos8Score.toString()).slice(-7) + "     " + ("   " + DB.pos8Name).slice(-3)
          break;
        case 7:
          DB.pos7Name = childSnapshot.child("Name").val();
          DB.pos7Score = childSnapshot.child("Score").val();
          DB.pos7Str = "     7     " + ("       " + DB.pos7Score.toString()).slice(-7) + "     " + ("   " + DB.pos7Name).slice(-3)
          break;
        case 6:
          DB.pos6Name = childSnapshot.child("Name").val();
          DB.pos6Score = childSnapshot.child("Score").val();
          DB.pos6Str = "     6     " + ("       " + DB.pos6Score.toString()).slice(-7) + "     " + ("   " + DB.pos6Name).slice(-3)
          break;
        case 5:
          DB.pos5Name = childSnapshot.child("Name").val();
          DB.pos5Score = childSnapshot.child("Score").val();
          DB.pos5Str = "     5     " + ("       " + DB.pos5Score.toString()).slice(-7) + "     " + ("   " + DB.pos5Name).slice(-3)
          break;
        case 4:
          DB.pos4Name = childSnapshot.child("Name").val();
          DB.pos4Score = childSnapshot.child("Score").val();
          DB.pos4Str = "     4     " + ("       " + DB.pos4Score.toString()).slice(-7) + "     " + ("   " + DB.pos4Name).slice(-3)
          break;
        case 3:
          DB.pos3Name = childSnapshot.child("Name").val();
          DB.pos3Score = childSnapshot.child("Score").val();
          DB.pos3Str = "     3     " + ("       " + DB.pos3Score.toString()).slice(-7) + "     " + ("   " + DB.pos3Name).slice(-3)
          break;
        case 2:
          DB.pos2Name = childSnapshot.child("Name").val();
          DB.pos2Score = childSnapshot.child("Score").val();
          DB.pos2Str = "     2     " + ("       " + DB.pos2Score.toString()).slice(-7) + "     " + ("   " + DB.pos2Name).slice(-3)
          break;
        case 1:
          DB.pos1Name = childSnapshot.child("Name").val();
          DB.pos1Score = childSnapshot.child("Score").val();
          DB.pos1Str = "     1     " + ("       " + DB.pos1Score.toString()).slice(-7) + "     " + ("   " + DB.pos1Name).slice(-3)
          break;
      }

      i = i - 1;
    });
  
    DB.leaderboardLoaded = 1;
  });
}


