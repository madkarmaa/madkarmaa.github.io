"use strict";

$(() => {
  const settingsMenu = $(".noselect.settings-menu");

  if (isMobile) {
    $(document).on("touchmove", (e) => {
      e.preventDefault();
    });

    settingsMenu.css("width", "100%");
    $('label[for="custom-cursor"]').hide();
    $('div[id="custom-cursor"]').hide();
  }
});
