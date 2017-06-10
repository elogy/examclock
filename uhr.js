var duration = 0;
var duration_double = 0.0;
var started=false;

var settings = {
  lecture: 'Einführung Internet-Technologien',
  lecture_short: 'EIT',
  assignments: '5',
  semester: 'SS',
  default_duration: '90',
}


function init() {

  var now = new Date();
  var year = now.getFullYear();
  // set placeholders
  document.getElementById("lecture").innerHTML = settings.lecture_short;
  document.getElementById("assignments").innerHTML = settings.assignments;
  document.getElementById("duration").value = settings.default_duration;
  document.title = settings.lecture;

  if (settings.semester == 'SS') {
    document.getElementById("semester").innerHTML = "Sommersemester " + year;
  } else if (settings.semester == 'WS') {
    document.getElementById("semester").innerHTML = "Wintersemester " + year+"/"+(year+1);
  }

  // Alle Sekunde getTime neu aufrufen
  window.setInterval('getTime()',1000);
}

function startTimer() {
  duration=document.getElementById("duration").value;
  duration_double=duration*2;
  document.getElementById("mins").innerHTML = duration;
  window.setInterval('getTimeLeft()',60000);
  window.setInterval('getDoubleTimeLeft()', 30000);
  started=true;
}

function getTimeLeft() {
  if(started){
    duration--;
    document.getElementById("mins").innerHTML = duration;
    // Ab 10 Minuten Stress machen
    if(duration<=10) {
      document.getElementById("mins").style.color = "red";
    }
    if (duration <=1) {
      document.getElementById("mins").className += "blink";
      document.getElementById("text").innerHTML = "Minute";
    }
    // Klausur ist vorbei
    if(duration<=0) {
		document.getElementById("timeleft").innerHTML="Die Bearbeitungszeit ist vorbei!";
      var stop1 = window.setInterval('getTimeLeft()',60000);
      var stop2 = window.setInterval('getTimeLeft()',30000);
      clearInterval(stop1);
      clearInterval(stop2);

    }
  }
}

function getDoubleTimeLeft() {
  if(started){
    duration_double--;
    if(duration_double <= 1) {
      var jeopardy = document.getElementById("jeopardy");
      jeopardy.play();
    }
  }
}

function getTime() {
  var Jetzt = new Date();
  var Jahr = Jetzt.getYear();
  var Stunden = Jetzt.getHours();
  var Minuten = Jetzt.getMinutes();
  var Sekunden = Jetzt.getSeconds();
  // die null in 05:01:02
  var Vorstd = ((Stunden < 10) ? "0" : "");var Vormin = ((Minuten < 10) ? ":0" : ":");var Vorsek = ((Sekunden < 10) ? ":0" : ":");
  var Uhrzeit = Vorstd + Stunden + Vormin + Minuten + Vorsek + Sekunden;
  document.getElementById("time").innerHTML = Uhrzeit;
  }
