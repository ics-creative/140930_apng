(function () {
  $(function () {
    APNG.ifNeeded().then(function () {
      var images = document.querySelectorAll(".apng-image");
      for (var i = 0; i < images.length; i++) APNG.animateImage(images[i]);
    });
  })
})();