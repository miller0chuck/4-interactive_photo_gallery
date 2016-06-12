function img_link($src, $alt, $location) {
  var $thumb_link;
  $thumb_link= '<a class="thumb_link" href="';
  $thumb_link+= 'Photos/';
  $thumb_link+= $src;
  $thumb_link+= '">';
  $thumb_link+= '<img src="';
  $thumb_link+= 'Photos/Thumbnails/';
  $thumb_link+= $src;
  $thumb_link+= '" alt="';
  $thumb_link+= $alt;
  $thumb_link+= '">';
  $thumb_link+= '</a>';
  return $thumb_link;
  
};

function load_img(i) {
      $(".thumbnail_list").append(
      img_link($photo_info[i].src, $photo_info[i].alt, $('.thumbnail_list'))
      );
};

function load_all_imgs() {
  for (var i = 0; i < $photo_info.length; i += 1) {
      $(".thumbnail_list").append(
      img_link($photo_info[i].src, $photo_info[i].alt, $('.thumbnail_list'))
      );
  }
};

function remove_img($class) {
  $($class).remove();
};

function reset($class) {
  remove_img($class);
  load_all_imgs();
}


//Trigger - On keyup
$("#search").keyup( function(){
  var $search = $("#search").val();
  
  //If Blank then Reset
  if ($search.length == 0) {
    reset('.thumb_link');
  } else { //Else, remove all imgs and load imgs with matcing alt tag
    remove_img(".thumb_link");
    for (var i = 0; i < $photo_info.length; i += 1) {
      if ($photo_info[i].alt.includes($search)) {
       load_img(i);
      }
    }
  }
});