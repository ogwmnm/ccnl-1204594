(function($, ScrollReveal) {

  "use strict";

  var sr,
      $window = $(window),
      $backToTopBtn = $("#js-back-to-top-btn");

  // 600pxスクロールしたらTOPに戻るボタンをふわっと表示する
  $window.on("scroll", function() {
    if ($window.scrollTop() > 600) {
      $backToTopBtn.fadeIn(500);
    } else {
      $backToTopBtn.fadeOut(500);
    }
  });

  // TOPに戻るボタンを押したら、0.5秒かけてアニメーションしてTOPに戻る
  $backToTopBtn.on("click", function(e) {
    e.preventDefault();
    $("body, html").animate({ scrollTop: 0 }, 500);
  });

  // スクロールでふわっと出るやつ
  sr = new ScrollReveal({ duration: 1000, scale: 1 });
  sr.reveal(".sr-top",    { origin: "top" });
  sr.reveal(".sr-right",  { origin: "right" })
  sr.reveal(".sr-bottom", { origin: "bottom" });
  sr.reveal(".sr-left",   { origin: "left" });
  sr.reveal(".sr-fade",   { distance: 0 });
  sr.reveal(".sr-delay",  { delay: 500 });
  sr.reveal(".sr-seq", 200);

})(jQuery, ScrollReveal);
