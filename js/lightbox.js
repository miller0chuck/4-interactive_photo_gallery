var $overlay = $('<div id="overlay"</div>');
var $image = $("<img>");
var $caption = $("<p></p>");


//Create Overlay and add img & caption
$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);

//On Click Show overlay, and add set img & caption
$(".thumb_link").click( function() {
  event.preventDefault();
  var src = $(this).attr("href");
  var alt = $(this).children("img").attr("alt");
  $image.attr("src", src);
  $caption.text(alt);
  $overlay.show();
})

//On Second click, hide overlay
$overlay.click( function () {
  $overlay.hide();             
});