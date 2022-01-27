
function chandan(key){
				
				switch (key){
				case "w":new Audio("tom-1.mp3").play();
				break;
				case "a":new Audio("tom-2.mp3").play();
				break;
				case "s":new Audio("tom-3.mp3").play();
				break;
				case "d":new Audio("tom-4.mp3").play();
				break;
				case "j":new Audio("snare.mp3").play();
				break;
				case "k":new Audio("crash.mp3").play();
				break;
				case "l":new Audio("kick-bass.mp3").play();
				break;				
				default:
				}
}
for(var i=0;i<document.querySelectorAll(".drum").length;i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function (){
				var inner=this.innerHTML;
				chandan(inner);
				ani(inner);
});
}																
	document.addEventListener("keypress", function(event){
						chandan(event.key)
						ani(event.key);
		})	;																																																																																																																																																																										
function ani(current){
				var active=document.querySelector("."+current);
				active.classList.add("pressed");
				setTimeout(function(){
								active.classList.remove("pressed");
				},100);
				}
