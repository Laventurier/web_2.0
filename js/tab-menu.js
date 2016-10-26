
var current=0;
$('document').ready(function() {
    $('.tab').eq(0).fadeIn(400);
    $('.tabs').children('ul').addClass('tabs-menu');
    $('ul.tabs-menu').children('li').click(function() {
        $('ul.tabs-menu').children('li').removeClass('active');
        current = $(this).addClass('active').index();
        $('.tab').hide();
        $('.tab').eq(current).fadeIn(400);

})

var getSize = $('ul.tabs-menu li').length;
    $('.brown-right').click(function () {
      current++;
      if(current==getSize){
        current=0;
      }
      $('.tab').hide();
      $('.tab').eq(current).fadeIn(400);
      $('ul.tabs-menu').children('li').removeClass('active');
      $(' ul.tabs-menu li').eq(current).addClass('active');
    })

    $('.brown-left').click(function () {
      if(current<=0){
        current=getSize;
      }
      current--;
      $('.tab').hide();
      $('.tab').eq(current).fadeIn(400);
      $('ul.tabs-menu').children('li').removeClass('active');
      $(' ul.tabs-menu li').eq(current).addClass('active');
    })
})
