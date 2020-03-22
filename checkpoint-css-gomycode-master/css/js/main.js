$(".image").hover(function(){
    $(this).children("button").show();
    $(this).css("opacity",0.5)
    
   
},function(){
    $(this).css("opacity",1)
    $(this).children("button").hide();
})

// btn.onclick = function() {
//     modal.style.display = "block";