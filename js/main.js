
$(function randomAPOD (){
  var randomYear = Math.floor((Math.random() * 11) + 2006);
  var randomMonth = Math.floor((Math.random() * 12) + 1);
  var randomDay = 0;
  if( randomMonth === 4 || randomMonth === 6 || randomMonth === 9 || randomMonth === 11){
    randomDay = Math.floor((Math.random() * 30) + 1);
  }
  else if(randomMonth === 2 ){
    randomDay = Math.floor((Math.random() * 28) + 1);

  }
  else{
    randomDay = Math.floor((Math.random() * 31) + 1);

  }
  var newDate = "&date=" + randomYear + "-" + randomMonth + "-" + randomDay;




var $xhr = $.getJSON('https://api.nasa.gov/planetary/apod?api_key=PirZOUN6wUlpA1bv8nVmcbZMDZ3rb8en4F0nsWEw' + newDate);
$xhr.done(function(data) {

    // console.log(data.url);
    var isImage = checkURL(data.url);
    if(isImage == true){
    // console.log("is image")
     $('#imageORurl').append("<img src=\"" + data.url + "\">" );

    }else{
      // console.log("NOT image")

      $('#imageORurl').append( $( "<a href=\"" + data.url + "\">Todays Image is Interactive!</a>" ) );


    }
          var displaydate;

         $('#title').text(data.title)
         $('#copyright').text("Photo by: " + data.copyright)
         $('#date').text(data.date)
         $('#explanation').text(data.explanation)

         // console.log("data.title" + data.title);
         // console.log("ata.copyright)" + data.copyright);
         // console.log("data.date)" + data.date);
         // console.log("data.explanation)" + data.explanation);

         $('#displaydate').text(data.date);




});

function checkURL(url) {
    return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
  }


$xhr.fail(function(err) {
    // console.log(err);

});

var $xNASAearth = $.get('https://api.nasa.gov/planetary/earth/imagery?api_key=PirZOUN6wUlpA1bv8nVmcbZMDZ3rb8en4F0nsWEw');



$xNASAearth.fail(function(err) {
    // console.log(err);

});
$('img').animate({
        opacity:1

    });

    $('img').hover(function() {
        $(this).stop().animate({opacity:.4},200);

    }, function() {
        $(this).stop().animate({opacity:1},500)

    });


 var randomImageMars = Math.ceil(Math.random() * 1000);
// console.log(randomImageMars)
$xhr.fail(function(err) {
    // console.log(err);

});
var nasaAPODrandomYear = Math.ceil(Math.random() + 1 * 2000);
// console.log(nasaAPODrandomYear)








      $('#imageORurl').click(function(){
          // console.log("photo clicked");
          $('p').toggle(500);
          $('this').toggleClass('bigger');

        });



 
}); // end of jQuery
