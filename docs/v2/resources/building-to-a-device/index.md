---
layout: v2/docs_base
id: resources
title: Ionic 2 | Building to a Device
header_title: Developer Tips - Building to a Device
header_sub_title: Ionic 2 Developer Preview
---

<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/guide/index.md'>
    Improve this doc
  </a>
</div>

# Building to a Device

<div id="what-is">

  <section id="overview">
    <h3><a href="#overview">Overview</code></a></h3>
    <p>TODO</p>
  </section>

  <section id="building-for-ios">
    <h3><a href="#building-for-ios">Building for iOS</code></a></h3>
    <p>TODO</p>
  </section>

  <section id="building-for-android">
    <h3><a href="#building-for-android">Building for Android</code></a></h3>
    <p>TODO</p>
  </section>

</div>

<script>
$(document).ready(function() {
  $(function () {

      var setHash = function(urlHash) {
        window.location.hash = (urlHash);
        currentHash = urlHash;
      };

      var currentHash = "#"
      $(document).scroll(function () {
          $('section').each(function () {
              var top = window.pageYOffset;
              var distance = top - $(this).offset().top;
              var hash = '#' + $(this).attr('id');
              if (distance < 20 && distance > -20 && currentHash != hash) {
                setHash(hash);
              }
          });
      });
  });
});
</script>
