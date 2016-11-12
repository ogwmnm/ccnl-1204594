(function() {

  "use strict";

  var $window = $(window),
      $backToTopBtn = $("#js-back-to-top-btn");

  // スクロールでTOPに戻るボタンを表示・非表示する
  $window.on("scroll", function() {
    if ($window.scrollTop() > 600) {
      $backToTopBtn.fadeIn(500);
    } else {
      $backToTopBtn.fadeOut(500);
    }
  });

  // TOPに戻るボタンを押したらアニメーションしてTOPに戻る
  $backToTopBtn.on("click", function(e) {
    e.preventDefault();
    $("body, html").animate({ scrollTop: 0 }, 500);
  });

})();