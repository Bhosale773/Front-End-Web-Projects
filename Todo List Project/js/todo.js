$("ul").on("click","li",function()
{
    $(this).toggleClass("apply");
});
$("ul").on("click","span",function()
{
    $(this).parent().fadeOut(500,function()
    {
        $(this).remove();
    });
});
$("input").keypress(function(event){
    if(event.which === 13)
    {
        $("ul").append("<li><span><i class='far fa-trash-alt'></i> </span>"+$(this).val()+"</li>");
        $(this).val("");
    }
});
$("#icon").click(function(){
    $("input").fadeToggle();
    $("#icon").toggleClass("fas fa-plus");
    $("#icon").toggleClass("fas fa-minus");
});
