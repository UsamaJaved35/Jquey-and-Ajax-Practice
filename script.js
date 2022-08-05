/*LESSON 1 - SIMPLE SELECTION BY ID AND CLASS */
// $(document).ready(function (){
//     // //changing container html
//     // $("#container").html("<b>hello world</b>")
//     // //changing list items text
//     // $("li").text("hello")
// });

/*LESSON 2 - HOW TO SELECT MULTIPLE CLASSES AND ADDING A CLASS BY JQUERY */
// $(document).ready(function (){
//     //Selecting multiple classes
//     $('.class2,.class3').addClass('highlight')
// });

/* LESSON 3- HOW TO SELECT DESCENDENTS*/
// $(document).ready(function(){
//     //SELECTING ALL DESCENDENTS
//     //$('#listing  li').addClass('newClass')
//     //SELECTING DIRECT/FIRST DESCENDENTS
//     $('#listing > li').addClass('newClass')   
// });

/*LESSON 4- SELECTING BY ATTRIBUTES */
$(document).ready(function(){
    //by selecting required attribute
//    $('input[required]').addClass('newClass')
    $('input[placeholder=Email]').addClass('newClass')
});
