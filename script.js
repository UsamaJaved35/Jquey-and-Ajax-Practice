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
// $(document).ready(function(){
//     //by selecting required attribute
//     //$('input[required]').addClass('newClass')
//     //by selecting placeholder attribute
//    // $('input[placeholder=Email]').addClass('newClass')
//    //selecting all elements that have name in them
//    $('input[placeholder*=Name]').addClass('newClass')
// });

/*LESSON 5- DOM TRAVERSING */

$(document).ready(function(){
//    //using find method
//     var result=$('#animals').find('.creature');
//    console.log(result) 
    //using children method for direct descendents
    // var result=$('#animals').children('.creature')
    // console.log(result)
    // using first(),last(),prev(),next()
    //using first()
    //var res=$('#animals').children().children().first()
    //console.log(res)
    //using last()
    //var res=$('#animals').children().last().first()
    //console.log(res)
    //using next() and prev()
    var res=$('#animals').children().first().children().first().next()
    console.log(res)
    res=$('#animals').children().first().children().last().prev().prev()
    console.log(res)
});