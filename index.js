
    var alHours = '';
    var alMinutes = '';
    var alarmTime = '';


function digitalClock(){

    var date = new Date();
    var hours = date.getHours() + '';
    var minutes = date.getMinutes() + '';
    var seconds = date.getSeconds() + '';
    var day = date.getDay();

    if(hours.length < 2) {
        hours = '0' + hours;
    }

    if(minutes.length < 2) {
        minutes = '0' + minutes;
    }

    if(seconds.length < 2) {
        seconds = '0' + seconds;
    }

    var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    var clock =weekDays[day] + ' ' + hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock').innerHTML = clock;

    

    if (minutes == alMinutes && hours == alHours && date.getSeconds() < 12 ) {
        alarmSound();
        setTimeout(()=>{
            // console.log("Alarm Played");
                alarmSound();
        },300000);
        setTimeout(()=>{
            // console.log("Alarm Played 2");
                alarmSound();
        },60000);
    }    

}

function setAlrmTime() {
    var timeString = String(document.getElementById("alarmTimeSelect").value);
    alHours = timeString.charAt(0) + timeString.charAt(1);
    alMinutes = timeString.charAt(3) + timeString.charAt(4);
    document.getElementById("alarm").innerHTML = 'Alarm: ' + alHours + ':' + alMinutes;  
    var info = document.getElementById('info');
    info.innerHTML="The alarm will asnooze after 5 and 10 minutes of set alarm"  
}



function alarmSound() {
    var audio = new Audio('audio');
    audio.src = "alarmsound.mp3";
    audio.play();
    }  
    function disable(){
        console.log("Enter disble");
        var time_tag = document.getElementById('alarmTimeSelect');
        time_tag.value='';
        console.log();
    }

digitalClock();
setInterval(digitalClock, 1000);