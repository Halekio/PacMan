var flag = 0;
function INITFB(){
	function load(callback){
		var script1= document.createElement('script');
		var script2= document.createElement('script');
		var script3= document.createElement('script');
		var script4= document.createElement('script');
		
		script1.src= "https://www.gstatic.com/firebasejs/8.0.2/firebase-app.js";
		script2.src= "https://www.gstatic.com/firebasejs/8.0.2/firebase-auth.js";
		script3.src= "https://www.gstatic.com/firebasejs/8.0.2/firebase-database.js";
		script4.src= "https://www.gstatic.com/firebasejs/8.0.2/firebase-analytics.js";
		
		document.getElementsByTagName('head')[0].appendChild(script1);
		document.getElementsByTagName('head')[0].appendChild(script2);
		document.getElementsByTagName('head')[0].appendChild(script3);
		document.getElementsByTagName('head')[0].appendChild(script4);
		script4.onload=function(){callback()};
	}
	
	function Init()
	{
		//the script has been loaded, do anything here
		var script= document.createElement('script');
		script.innerHTML = 'var firebaseConfig = {apiKey: "AIzaSyDsbQEMFEeNtPa_7cN964uO0NuwHJER9C8", authDomain: "pacman-d171c.firebaseapp.com", databaseURL: "https://pacman-d171c.firebaseio.com", projectId: "pacman-d171c", storageBucket: "pacman-d171c.appspot.com", messagingSenderId: "377352980618", appId: "1:377352980618:web:78b3438157d354fc8ac573", measurementId: "G-2QY94FMM4F"}; firebase.initializeApp(firebaseConfig); firebase.analytics();';

		document.getElementsByTagName('head')[0].appendChild(script);
		
		flag = 1;
	}
	
	load(Init);
}



