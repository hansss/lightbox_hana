$(document).ready(function(){

function jsonFlickrApi(rsp){
	window.rsp = rsp;
	var numberOfPhotos = rsp.photos.photo.length;

	for (var i=0; i < numberOfPhotos; i++){
		var singlePhoto = rsp.photos.photo[i]
		var photoId = singlePhoto.id;
		var photoFarmId = singlePhoto.farm;
		var photoServerId = singlePhoto.server;
		var photoSecret = singlePhoto.secret;
	
		var newUrl = "https://farm" + photoFarmId + ".staticflickr.com/" + photoServerId + "/" + photoId + "_" + photoSecret + ".jpg";
		var img = document.createElement("img");
		document.getElementById('picture_grid').appendChild(img);
		img.src = newUrl;
	}
}
});