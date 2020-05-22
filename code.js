var gallery = document.getElementById("gall");
var photos  = ["art/1.jpg"
			  ,"art/2.jpg"
			  ,"art/3.jpg"
			  ,"art/4.jpg"
			  ,"art/5.jpg"
			  ,"art/6.jpg"
			  ,"art/7.jpg"
			  ,"art/8.jpg"
			  ,"art/9.jpg"
			  ,"art/10.jpg"
			  ,"art/11.jpg"
			  ,"art/12.jpg"
			  ,"art/13.jpg"
		]
var sel= 0;
var image = new Image();
for(var i = 0;i<photos.length-1;i++){
	image.src = photos[i]
}
image.onload = main();
function main(){
	gallery.src = photos[sel];
}
function left(){
	sel--
	if(sel<0){
		sel = photos.length-1;
	}
	main();
}
function right(){
	sel++
	if(sel >= photos.length){
		sel = 0;
	}
	main()
}