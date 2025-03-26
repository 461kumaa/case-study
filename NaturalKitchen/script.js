// カルーセル
$('.carousel-fade').slick({
  autoplay: true,
  dots: true,
  arrows: false,
  infinite: true,
  autoplayspeed: 500,
  fade: true,
  cssEase: 'linear'
});

// スクロール時セクションをフェードイン
$(window).scroll(function () {
  const scrollAmount = $(window).scrollTop();
  const windowHeight = $(window).height();
  $('section').each(function () {
    const position =$(this).offset().top;
    if (scrollAmount > position - windowHeight + 100) {
      $(this).addClass('fade-in');
    }
  });
});

// ヘッダー追従
$(window).on('scroll', function() {
  $('header').toggleClass('fixed', $(this).scrollTop() > 500);
});