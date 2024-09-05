function ShowImage(image_path)
{
	document.getElementById("imageviewer").style.backgroundImage = "url('" + image_path + "')";
	document.getElementById("imageviewer").style.display = 'inline-block';
	
	document.getElementById("body").scroll = false;
	document.getElementById("body").style.overflow = 'hidden';
}

function HideImage()
{
	document.getElementById("imageviewer").style.display = 'none';
	
	document.getElementById("body").scroll = true;
	document.getElementById("body").style.overflow = 'auto';
}