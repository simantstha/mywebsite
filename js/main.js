$(document).ready(function(){
    $('.header').height($(window).height());
    $('.progress .progress-bar').css("width",
        function() {
            return $(this).attr("aria-valuenow") + "%";
            });
    $(".navbar a").click(function(){
        $("body,html").animate({
            scrollTop:$("#" + $(this).data('value')).offset().top
            },1000)});
   });
   $(function(){

    var url = window.location.href; 

    $("#menu a").each(function() {

        if(url == (this.href)) { 
            $(this).closest("li").addClass("active");
        }
    });

});
