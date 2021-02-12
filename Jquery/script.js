$(document).ready(function() {
  const minus = $('.quantity__minus');
  const plus = $('.quantity__plus');
  const input = $('.quantity__input');
  minus.click(function(e) {
    e.preventDefault();
    var value = $(this).siblings().find('input').val();
    if (value > 1) {
      value--;
    }
    $(this).siblings().find('input').val(value);
  });

  plus.click(function(e) {
    e.preventDefault();
    var value = $(this).siblings().find('input').val();
    value++;
    $(this).siblings().find('input').val(value);
  })




$(".send_mail").click(function(e) {
    sendEmail();
})


// Send Email
function sendEmail() {

  $('.fav-main-wrapper').slick('unslick');

var teaser = $(".fav-main-wrapper").html();
var jHtmlObject = jQuery(teaser);
var editor = jQuery("<p>").append(jHtmlObject);
editor.find(".quantity").remove();
editor.find(".add_to_cart_wrapper").remove();
editor.find(".quantity_text").remove();
var favContent = editor.html();
//console.log(favContent);

  Email.send({
  	Host: "smtp.gmail.com",
  	Username : "jasons6297@gmail.com",
  	Password : "Ruvinia1997",
  	To : 'ruvini.2016194@iit.ac.lk',
  	From : "jasons6297@gmail.com",
  	Subject : "Favourites List",
  	Body : favContent,
  	}).then(
  		//message => alert("mail sent successfully")
      $(".pop-wrapper").fadeIn(1000)
  	);
}

$(".reinitial-slick").click(function(e){

  $('.fav-main-wrapper').slick({
  // infinite: true,
  // speed: 300,
  // slidesToShow: 1
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToScroll: 1,
    arrows: true,
    // customPaging : function(slider, i) {
    //         var thumb = jQuery(slider.$slides[i]).data();
    //         // return '<a>'+(i+1)+'</a>'; // <-- old
    //         return '<a>'+('0'+(i+1)).slice(-2)+'</a>'; // <-- new
    //     },
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
});

  $(".pop-wrapper").fadeOut(500)

})



var myFavList= [];
//Add to Fav list
$(".favIcon").click(function(e){
  var ItemName =  $(this).siblings('.popularHeading').text() != "" ? $(this).siblings('.popularHeading').text() : $(this).siblings('.productHeading').text() != "" ? $(this).siblings('.productHeading').text()  : $(this).siblings('.arrivalsHeading').text();
  var ItemPrice = $(this).siblings('.popularPriceTag').text() != "" ? $(this).siblings('.popularPriceTag').text() :  $(this).siblings('.priceTag').text() != "" ? $(this).siblings('.priceTag').text() : $(this).siblings('.arrivalsPriceTag').text();
  var ImgSrc = $(this).siblings('.popularImage').attr('src') != undefined ?  $(this).siblings('.popularImage').attr('src') : $(this).siblings('.productImage').attr('src') != undefined ? $(this).siblings('.productImage').attr('src') :  $(this).siblings('.arrivalsImage').attr('src');

  var favItem= {name:ItemName, price:ItemPrice, src:ImgSrc};
  myFavList.push(favItem);
  localStorage.setItem('myFavList', JSON.stringify(myFavList));
  var output = JSON.parse(localStorage.getItem('myFavList'));
})

//Apend to Fava page List
if ($('body.fav-page').length > 0)
{
   var favList = JSON.parse(localStorage.getItem('myFavList'));
   if(favList != null && favList.length > 0){
     var elements = $();
      for(x = 0; x < favList.length; x++) {

        var image = favList[x].src !== 'undefined' ? favList[x].src :  "";
        var name = favList[x].name !== 'undefined' ? favList[x].name : "";
        var price = favList[x].price !== 'undefined' ? favList[x].price : "";


        var html = "";

         html += "<div class='fav_item_wrapper'><div class='fav_img'><img src='" +  image + "'/></div><div class='fav_description'><span>" +  name  + "</span><p><span style='color:#555555;'>Unit Price:</span><span>&nbsp;" +  price  + "</span></p><p class='quantity_text'>Quantity:</p><div class='quantity'><a href='#' class='quantity__minus'><span>-</span></a><input name='quantity' type='text' class='quantity__input' value='1'><a href='#' class='quantity__plus'><span>+</span></a></div></div><div class='add_to_cart_wrapper'><div class='add_to_cart'><span>Add to Cart</span></div><div class='remove'><span><img src='images\\remove.svg'/>Remove</span></div></div></div>";

          elements = elements.add(html);
      }
      $('.fav-main-wrapper').append(elements);

   }

}

if ($('body.fav-page').length > 0)
{
  $('.fav-main-wrapper').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });

}
// Remove favourites
$('.remove span').click(function(e){
 $(this).closest(".fav_item_wrapper").remove();
});


//Back button
$('.back').click(function(){
       parent.history.back();
       return false;
});

function topFunction() {
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
  var body = $("html, body");
  body.stop().animate({scrollTop:0}, 1000, 'swing', function() {
  });
}

});
