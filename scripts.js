
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
	}

	function setNextAndPrev(currentID){
		var numberID = parseInt(currentID.slice(5));
		//console.log((numberId+1).toString());

		document.getElementById("lightbox_next").setAttribute("img_display_id","photo" + (numberID+1).toString());
		document.getElementById("lightbox_prev").setAttribute("img_display_id","photo" + (numberID-1).toString());
	}

	function displayLightBox(){
		var currentID = window.event.srcElement.id;
		// var numberId = parseInt(eId.slice(5));
		// console.log((numberId+1).toString());

		setNextAndPrev(currentID);

		// document.getElementById("lightbox_next").setAttribute("img_display_id","photo" + (numberId+1).toString());
		// document.getElementById("lightbox_prev").setAttribute("img_display_id","photo" + (numberId-1).toString());

		var displayImg = document.getElementById(currentID);
		//displayImg.style = ""

		// var container = document.getElementById('container');
		// container.innerHTML = "";
		// container.appendChild(displayImg);

		replaceContainer(displayImg);

		var light = document.getElementById('light');
		light.style.height = displayImg.style.height;
		light.style.width = displayImg.style.width;
		light.style.display = 'block';
		var fade = document.getElementById('fade');
		fade.style.display = 'block';
	}

	function closeLightBox(){
		console.log("Close func!");
		document.getElementById('light').style.display = 'none';
		document.getElementById('fade').style.display= 'none';
	}

	function nextLightBox(){
		var e = window.event.srcElement
		var x = e.getAttribute("img_display_id");
		var img = document.getElementById(x);
		console.log("next!");
		console.log(img);
		replaceContainer(img);
		setNextAndPrev(x);
	}

	function prevLightBox(){
		var e = window.event.srcElement
		var x = e.getAttribute("img_display_id");
		var img = document.getElementById(x);
		console.log("prev!");
		console.log(img);
		replaceContainer(img);
		setNextAndPrev(x);
	}

	//event listener on all images for showing lightbox on click of img
	var allPrimaryImages = document.getElementsByClassName("primaryImage");
	for (var i = 0; i < allPrimaryImages.length; i++){
		allPrimaryImages[i].addEventListener("click", function(){displayLightBox()}, false);
	}
	
	//event listener for the close button on the lightbox
	var lightboxClose = document.getElementById('lightbox_close');
	lightboxClose.addEventListener("click", function(){closeLightBox()});

	//event listener for next button
	var lightboxNext = document.getElementById('lightbox_next');
	lightboxNext.addEventListener("click", function(){nextLightBox()});

	//event listener for prev button
	var lightboxPrev = document.getElementById('lightbox_prev');
	lightboxPrev.addEventListener("click", function(){prevLightBox()});



}











