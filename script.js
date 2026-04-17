//your JS code here. If required.
let timerDisplay=document.getElementById("timer");
let currentDate=new Date();
set Interval{
   function()
	   {
		   currentDate=new Date();
		   timerDisplay.innerHTML=currentDate.tolocaleString();
},1000
}