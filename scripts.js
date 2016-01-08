
function jsonFlickrApi(rsp){
	window.rsp = rsp;

	// Creating the elements for each photo
	var numberOfPhotos = rsp.photos.photo.length;

	for (var i=0; i < numberOfPhotos; i++){
		var singlePhoto = rsp.photos.photo[i]
		var photoId = singlePhoto.id;
		var photoFarmId = singlePhoto.farm;
		var photoServerId = singlePhoto.server;
		var photoSecret = singlePhoto.secret;
		var photoTitle = singlePhoto.title;

		var newUrl = "https://farm" + photoFarmId + ".staticflickr.com/" + photoServerId + "/" + photoId + "_" + photoSecret + ".jpg";

		var img = document.createElement("img");
		img.id = "photo" + i;
		img.className = "primaryImage";
		img.src = newUrl;
		img.alt = photoTitle;

		var list = document.getElementById('picture_list');
		var entry = document.createElement('li');

		entry.appendChild(img);
		list.appendChild(entry);
	}

	function replaceContainer(img){
		var container = document.getElementById('container');
		container.innerHTML = "";
		container.appendChild(img);
		document.getElementById('title').innerHTML = img.alt;
	}

	function setNextAndPrev(currentID){
		var numberID = parseInt(currentID.slice(5));
		document.getElementById("lightbox_next").setAttribute("img_display_id","photo" + (numberID+1).toString());
		document.getElementById("lightbox_prev").setAttribute("img_display_id","photo" + (numberID-1).toString());
	}

	function displayLightBox(currentID){
		setNextAndPrev(currentID);
		//source of next-prev bug mentioned in README
		var displayImg = document.getElementById(currentID);
		replaceContainer(displayImg);

		var light = document.getElementById('light');
		light.style.height = displayImg.height + 20 + "px";
		light.style.width = displayImg.width + 150 + "px";
		light.style.display = 'block';

		document.getElementById('lightbox_prev').style.height = displayImg.height + "px";

		var fade = document.getElementById('fade');
		fade.style.display = 'block';
	}

	function closeLightBox(){
		document.getElementById('light').style.display = 'none';
		document.getElementById('fade').style.display= 'none';
	}

	function nextLightBox(){
		var e = document.getElementById('lightbox_next');
		var newID = e.getAttribute("img_display_id");
		displayLightBox(newID);
	}

	function prevLightBox(){
		var e = document.getElementById('lightbox_prev');
		var newID = e.getAttribute("img_display_id");
		displayLightBox(newID);
	}

	//event listener on all images for showing lightbox on click of img
	var allPrimaryImages = document.getElementsByClassName("primaryImage");
	for (var i = 0; i < allPrimaryImages.length; i++){
		allPrimaryImages[i].addEventListener("click", function(){displayLightBox(window.event.srcElement.id)}, false);
	}
	
	///// Event Listener Set Up ////
	//event listener for the close button on the lightbox
	var lightboxClose = document.getElementById('lightbox_close');
	lightboxClose.addEventListener("click", function(){closeLightBox()});

	//event listener for next button
	var lightboxNext = document.getElementById('lightbox_next');
	lightboxNext.addEventListener("click", function(){nextLightBox()});

	//event listener for prev button
	var lightboxPrev = document.getElementById('lightbox_prev');
	lightboxPrev.addEventListener("click", function(){prevLightBox()});


	document.onkeydown = checkKey;

	function checkKey(e) {

	    e = e || window.event;
	    //left arrow
	    if (e.keyCode == '37') {
	        prevLightBox();
	    }
	    //right arrow
	    else if (e.keyCode == '39') {
	    	nextLightBox();
	    }
	    //esc key
	    else if (e.keyCode == '27'){
	    	closeLightBox();
	    }

	}
}











