function myHeader(){
	let header = document.getElementById('headerNav');
	window.addEventListener("scroll",function(){
		(window.scrollY > 0)?header.classList.add("active"):header.classList.remove("active");
		
	})
}
myHeader();


//time
//set the date we're counting down to
var countDownDate= new Date("Feb 10, 2022 23:34").getTime();

//update the count down every 1 second
var x= setInterval(function() {

	//get today's date and time
	var now = new Date().getTime();

	//find the distance between now and the count down date
	var distance = countDownDate - now;

	//time calculation for days, hours,minutes and seconds

	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance %(1000  * 60)) / 1000);

	//output the result in al elemnt 
	document.getElementById("days").innerHTML=days;
	document.getElementById("hours").innerHTML=hours;
	document.getElementById("minutes").innerHTML=minutes;
	document.getElementById("seconds").innerHTML=seconds;
      
    document.getElementById("days1").innerHTML=days;
	document.getElementById("hours1").innerHTML=hours;
	document.getElementById("minutes1").innerHTML=minutes;
	document.getElementById("seconds1").innerHTML=seconds;  

	document.getElementById("days2").innerHTML=days;
	document.getElementById("hours2").innerHTML=hours;
	document.getElementById("minutes2").innerHTML=minutes;
	document.getElementById("seconds2").innerHTML=seconds;

    document.getElementById("days3").innerHTML=days;
	document.getElementById("hours3").innerHTML=hours;
	document.getElementById("minutes3").innerHTML=minutes;
	document.getElementById("seconds3").innerHTML=seconds;
    
    if(seconds < 10) seconds= '0' + seconds;
   
    // if the count down is over , write some txt
   // if(distance < 1){
    //	clearInterval(x);
    //	document.getElementById("time_over").innerHTML="time over ! ";
    //}
});

var read_new_ul=document.getElementById('new_ul_l');
read_new_ul.addEventListener('mouseover',function(){
document.getElementById('new_ul').style='display:flex';
});
read_new_ul.addEventListener('mouseout',function(){
	document.getElementById('new_ul').style='display:none';
});