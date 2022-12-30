var start=document.getElementById('start');
var game=document.getElementById('game');
var timer=document.getElementById('timer');
var arr=["1","2","3","1","2","3"];
var total_count=arr.length/2;
var total_check=0;
var total_time=10;
var first=0;
var first_id=0
var sT;

start.addEventListener('click',startGame);

function startGame(){
	var k=1;
	var html=""
	arr.sort(function(){
		return .5 - Math.random()
	});
	
	timer.innerHTML=total_time;
	sT=setInterval(function(){
		total_time=total_time-1;
		if(total_time==0){
			alert('OOPs');
			total_time=10;
			clearInterval(sT);
			startGame();
		}
		timer.innerHTML=total_time;
	},1000);
	
	for(var image of arr){
		html+="<img src='images/empty.jpg' onclick=check('"+image+"','"+k+"') id='"+k+"'>";
		k++;
	}
	game.innerHTML=html;
}

function check(image,k){
	if(first_id!=k){
		if(first==0){
			first=image;
			first_id=k;
			document.getElementById(k).src="images/"+image+".jpg";
		}else{
			if(first==image){
				document.getElementById(k).src="images/"+image+".jpg";
				
				document.getElementById(first_id).removeAttribute('onclick');
				document.getElementById(k).removeAttribute('onclick');
				
				total_check=total_check+1;
				if(total_check==total_count){
					alert('You win');
					total_time=10;
					clearInterval(sT);
					startGame();
				}
			}else{
				document.getElementById(k).src="images/"+image+".jpg";
				setTimeout(function(){
					document.getElementById(first_id).src="images/empty.jpg";
					document.getElementById(k).src="images/empty.jpg";
					first_id=0;
				},500);
			}
			first=0;
		}	
	}
}o