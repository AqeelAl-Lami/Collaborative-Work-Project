
$(document).ready(function(){
    jquery()
}) 

function jquery(){
$("#stars").click(function(){
$("#stars").html('<i class="fa fa-star"</i>');
$("#stars1,#stars2,#stars3,#stars4").html('<i class="fa fa-star-o" aria-hidden="true"></i>')
})
$("#stars1").click(function(){
$("#stars,#stars1").html('<i class="fa fa-star"</i>');
$("#stars2,#stars3,#stars4").html('<i class="fa fa-star-o" aria-hidden="true"></i>')
})
$("#stars2").click(function(){
$("#stars,#stars1,#stars2").html('<i class="fa fa-star"</i>');
$("#stars3,#stars4").html('<i class="fa fa-star-o" aria-hidden="true"></i>')
})
$("#stars3").click(function(){
$("#stars,#stars1,#stars2,#stars3").html('<i class="fa fa-star"</i>');
$("#stars4").html('<i class="fa fa-star-o" aria-hidden="true"></i>')
})
$("#stars4").click(function(){
$("#stars,#stars1,#stars2,#stars3,#stars4").html('<i class="fa fa-star"</i>')
})

}