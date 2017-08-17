
$(function 

  randomAPOD (){
  // add DATE text &date=2016-10-09
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
  // console.log("randomYear " + randomYear + "randomMonth " + randomMonth + "randomDay " + randomDay);
  var newDate = "&date=" + randomYear + "-" + randomMonth + "-" + randomDay;
// newDate = "&date=2016-10-10"; // HERE FOR RANDOM OR DATE ***************************  HERE FOR RANDOM OR DATE *

//   function getRandomYear(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// console.log("randomMonth " + randomMonth)
// }

//// get today
var newDate = new Date();
var dd = newDate.getDate();
var mm = newDate.getMonth()+1;//January is 0!`

var yyyy = newDate.getFullYear();
if(dd<10){dd='0'+dd}
if(mm<10){mm='0'+mm}
var newDate = "&date=" + yyyy+'-'+mm+'-'+dd;

///

var $xhr = $.getJSON('https://api.nasa.gov/planetary/apod?api_key=PirZOUN6wUlpA1bv8nVmcbZMDZ3rb8en4F0nsWEw' + newDate);
$xhr.done(function(data) {

    console.log(data.url);
    var isImage = checkURL(data.url);
    if(isImage == true){
console.log("is image")
     $('#imageORurl').append("<img src=\"" + data.url + "\">" );

    }else{
      console.log("NOT image")

      $('#imageORurl').append( $( "<a href=\"" + data.url + "\">Todays Image is Interactive!</a>" ) );


    }
          var displaydate;

         $('#title').text(data.title)
         $('#copyright').text("Photo by: " + data.copyright)
         $('#date').text(data.date)
         $('#explanation').text(data.explanation)

         console.log("data.title" + data.title);
         console.log("ata.copyright)" + data.copyright);
         console.log("data.date)" + data.date);
         console.log("data.explanation)" + data.explanation);

         $('#displaydate').text(data.date);




});

function checkURL(url) {
    return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
  }


$xhr.fail(function(err) {
    console.log(err);

});

var $xNASAearth = $.get('https://api.nasa.gov/planetary/earth/imagery?api_key=PirZOUN6wUlpA1bv8nVmcbZMDZ3rb8en4F0nsWEw');

// $xNASAearth.done(function(data, PirZOUN6wUlpA1bv8nVmcbZMDZ3rb8en4F0nsWEw) {
//     console.log(data.url);
//          $('#urlNASAearth').attr("src", data.url);
//          $('#date').text(data.date)
//          $('#copyright').text("Cloud Score" + data.cloud_score)
//          $('#id').text(data.id)
//         //  $('#explanation').text(data.explanation)
//
//          console.log(data);
//
// });

$xNASAearth.fail(function(err) {
    console.log(err);

});
$('img').animate({
        opacity:1

    });

    $('img').hover(function() {
        $(this).stop().animate({opacity:.4},200);

    }, function() {
        $(this).stop().animate({opacity:1},500)

    });

// var $MarsAPI = $.getJSON(' https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=PirZOUN6wUlpA1bv8nVmcbZMDZ3rb8en4F0nsWEw');
//
// $MarsAPI.done(function(data) {
//     console.log(data.url);
//          $('#urlMarsAPI').attr("src", data.photos[randomImageMars].img_src);
//          $('#date').text(data.photos[randomImageMars].date)
//          $('#marsCopyright').text("Cloud Score" + data.photos[randomImageMars].cloud_score)
//          $('#id').text(data.photos[randomImageMars].id)
//         //  $('#explanation').text(data.explanation)
//
//          console.log(data);
//
//
// });
 var randomImageMars = Math.ceil(Math.random() * 1000);
console.log(randomImageMars)
$xhr.fail(function(err) {
    console.log(err);

});
var nasaAPODrandomYear = Math.ceil(Math.random() + 1 * 2000);
console.log(nasaAPODrandomYear)






////////////////////////////////////


    // $( "#photo" ).mouseover(function() {
    //     console.log("NASA");
    //   });

      $('#imageORurl').click(function(){
          console.log("photo clicked");
          $('p').toggle(500);
          $('this').toggleClass('bigger');

        });



 // function getRandomYear(){
 // randomYear = Math.ceil(Math.random()*10+2000);
 // console.log(randomYear);
 // }
 // getRandomYear() //

 // function getRandomMonth(){
 // randomMonth = Math.ceil(Math.random()*12);
 // console.log(randomMonth);
 // }
 // getRandomMonth()
/////////////////////

// var $xhrSound = "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";
//
//
// $xhrSound.done(function(data, PirZOUN6wUlpA1bv8nVmcbZMDZ3rb8en4F0nsWEw) {
//     console.log(sound.url);
//          $('#url').attr("src", data.url);
//          $('#title').text(data.title)
//          $('#copyright').text(data.copyright)
//          $('#date').text(data.date)
//          $('#explanation').text(data.explanation)
//
//          console.log(data);
//
// });
//
// $xhr.fail(function(err) {




//     console.log(err);
// });
}); // end of jQuery
