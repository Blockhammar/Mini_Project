

function doStuff(input){
    console.log(document.getElementById(input).src)
	if (document.getElementById(input).src == "http://127.0.0.1:5500/images/on.png")
    {
        document.getElementById(input).src = "images/off.png";
    } 
    else {

        document.getElementById(input).src = "images/on.png";

    }
}
