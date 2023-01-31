var image_tracker = "peterF"
function change(){
    var image = document.getElementById("fotito");
    if(image_tracker=="peterF"){
        image.src="foto2.jpg";
        image_tracker ="spiderF";
    } else {
        image.src = "foto1.jpg";
        image_tracker = "peterF";
    }
}
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}