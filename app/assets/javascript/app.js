$(document).ready(function() {
  $(window).scroll(function() {
    let scroll = $(window).scrollTop();

    if (scroll > 200) {
      $('.navbar').css({
        background: 'white',
        color: '#003b46',
        opacity: '0.9'
      });
    } else {
      $('.navbar').css({ background: '#003b46', color: '#ebecf2' });
    }
  });
});
