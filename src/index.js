window.addEventListener('DOMContentLoaded', function() {
  document.getElementsByTagName('title')[0].innerHTML = title;
}); //displaying title from config.js



$(window).on("scroll", function() {
  var footerHeight = $("footer").outerHeight();
  var windowHeight = $(window).height();
  var scrollTop = $(window).scrollTop();
  var documentHeight = $(document).height();
  var remainingSpace = documentHeight - (scrollTop + windowHeight);
  if (remainingSpace < footerHeight) {
    var newBottom = footerHeight - remainingSpace;
    $("footer").css("bottom", newBottom + "px");
  } else {
    $("footer").css("bottom", "0");
  }
}); //scrollable footer code


