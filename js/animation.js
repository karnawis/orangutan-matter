//Animation
$(document).ready(function(){

    //Navigation
    $('#burger-link').click(function(e){
        e.preventDefault();
        $('header').toggleClass('toggled');
    });

  // init controller
  var controller = new ScrollMagic.Controller();

  // loop through all elements
  $('.slide').each(function() {

    // build a tween
    var tween = TweenMax.from($($(this.children[0]).find('.circle')), 0.7, {autoAlpha: 0, scale: 0.5, y: '+=5', ease:Linear.easeNone});

    // build a scene
    var scene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      duration: '100'
    })
    .setClassToggle('this','fadr-in')
    .setTween(tween) // trigger a TweenMax.to tween
    .setPin($(this.children[0]))
    .addTo(controller);

  });

});
