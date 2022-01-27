/* TP Bootstrap
Formation Développement WEB
Espero-soft Informatique : https://espero-soft.com
Email: contact@espero-soft.com


*/
$(function(){
  $(".navbar a,#moi a,#caret").on("click",function(event){
    event.preventDefault()
    var hash = this.hash
    $('html, body').animate({scrollTop: $(hash).offset().top},1800,function() {
      window.location.hash = hash
    })
  })
})
// personnaliser le collapse
$('.bouton-menu').click(function() {
    $('.navbar-collapse').collapse('hide')
    }
  )

  // associer un srollspy au menu
  $('body').scrollspy({
    target:'#NavbarMenu'
  })
