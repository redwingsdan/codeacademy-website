var main = function(){
  
$('.btn').click(function(event){
 
var post = $('.status-box').val();
$('<li>').text(post).prependTo('.posts');
$('.status-box').val('');  
$('.counter').text(140);
$('.btn').addClass('disabled');
});  
 
$('.status-box').keyup(function(){
  
var postLength = $(this).val().length;  
 var charactersLeft = 140 - postLength; 
 //$('.counter').text(charactersLeft);

 if(charactersLeft < 0){
  $('.btn').addClass('disabled');
  //$('.counter').text(charactersLeft);
 }
 
 else if(charactersLeft == 140){
 $('.btn').addClass('disabled');
 $('.counter').text(charactersLeft);
 }
 
 else{
 $('.btn').removeClass('disabled');
 $('.counter').text(charactersLeft);
 }
});
 
$('.btn').addClass('disabled'); 
    
};

$(document).ready(main);
