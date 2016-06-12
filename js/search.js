//Need: When typing in search bar only display images with captions containing those words

//Capture search field

var $searchBar = $('#search').val();




//Match with caption


$('#search').keyup(function search() {

	if $('a').attr("data-title"):contains($searchBar) {
		$(this).show

	} else {
		$(this).hide
	}



})


//Only display those with caption