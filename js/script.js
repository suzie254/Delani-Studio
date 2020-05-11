$(document).ready(function () {

  /*WHAT WE DO SECTION STYLING*/
  /*toggle for the design part*/
  $('#design-image').click(function () {
     $('#design-paragraph').show();
     $('#design-image').hide();
 });
     
 $('#design-paragraph').click(function(){
     $('#design-image').show();
     $('#design-paragraph').hide();
 });
 
 /*toggle for the development part*/
 $('#development-image').click(function () {
     $('#development-paragraph').show();
     $('#development-image').hide();
 });

 $('#development-paragraph').click(function(){
     $('#development-image').show();
     $('#development-paragraph').hide();
 });

 /*toggle for the product part*/
 $('#product-image').click(function () {
     $('#product-paragraph').show();
     $('#product-image').hide();
 });

 $('#product-paragraph').click(function(){
     $('#product-image').show();
     $('#product-paragraph').hide();
 });


 /*Creating the toggle function for the Portfolio section*/
 /*The toggle function is on hover*/
 $('#folio-card-one').hover(function(){
     $('.overlayone').slideToggle();
 });

 $('#folio-card-two').hover(function(){
         $('.overlaytwo').slideToggle();
 });

 $('#folio-card-three').hover(function(){
         $('.overlaythree').slideToggle();
 });

 $('#folio-card-four').hover(function(){
         $('.overlayfour').slideToggle();
 });

 $('#folio-card-five').hover(function(){
         $('.overlayfive').slideToggle();
 });

 $('#folio-card-six').hover(function(){
         $('.overlaysix').slideToggle();
 });

 $('#folio-card-seven').hover(function(){
         $('.overlayseven').slideToggle();
 });

 $('#folio-card-eight').hover(function(){
         $('.overlayeight').slideToggle();
 });

 /*This section describes the confirmation of receipt of details or otherwise with a corresponding alert message*/
 /*the .one() allows for a respone on one click event only*/
 $('button').one('click',function(){
     $('form.validate').submit(function(event){
         /*assign user inputs to variables nameInput and emailInput*/
         var nameInput = $('input#mce-NAME').val();
         var emailInput = $('input#mce-EMAIL').val();
         /*Pop up to show validation of the reception of details*/
         if(nameInput !== "" && emailInput !== ""){
             event.stopPropagation();
             /*If details are in order, pop up confirmation message and proceed to the confirmation page*/
             alert("Welcome "+ nameInput + ", we have recieved your details. Thank you for visiting our site. The next page shows response to your request. Enable pop ups to view confirmation.");
             return true;
         }
         else{
             alert("All fields must be filled before submission.");
             return false;
         }

         event.preventDefault();
     });
 });

});