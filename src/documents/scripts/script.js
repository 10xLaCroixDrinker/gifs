/* Author: Alex Mesarosh



*/
(function($) {

  $(function() {

    var $gifs = $('#gifs ul'),
        $search = $('#search'),
        $tag = $('#tag');

    function populateGifList(tag) {

      $gifs.html('');

      for(key in gifList) {

        for(index in gifList[key]) {

          if(gifList[key][index] === tag) {

            $gifs.append('<li data-tags="' + gifList[key] + '"><a href="http://gifs.jimmy.s3.amazonaws.com/' + key + '"><img src="http://gifs.jimmy.s3.amazonaws.com/' + key + '" /></a></li>');

          }

        }

      }
    }

    // Search handler
    $search.submit(function(e) {
      e.preventDefault();

      var tag = $tag.val();

      populateGifList(tag);
    });

  });

}(jQuery));

$(function(){
  $('#gifs').masonry({
    itemSelector : 'li',
    columnWidth : 240
  });
});