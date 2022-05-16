$(document).ready(function(){
    let mov = $(".desplazo"); 

    mov.click(function(evento){
        evento.preventDefault();
        $("body, html").animate({ 
            scrollTop:$(this.hash).offset().top,
        },1000
        );
    })
})