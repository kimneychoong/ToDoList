$("#notcompleted-ul").on("click","li", function(){
    $(this).toggleClass('completed');
})

$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})
$("ul").on("click",".fa-check-square", function(event){
    $(this).parent().fadeOut(500, function(){
        $("#completed-ul").append("<li><span><i class = 'fa fa-trash'></i></span> " + $(this).text())
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
    if(event.which == 13){
        var txt = $(this).val();
        $(this).val("")
        $("#notcompleted-ul").append("<li><span><i class = 'fa fa-trash'></i></span> " + txt + "<i class='fa fa-check-square'></i></li>")
    }
})

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle()
})

$(".fa-minus").click(function(){
    $("#completed-ul").fadeToggle()
})