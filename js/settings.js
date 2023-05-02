"use strict";

let displayCursor = true;

function enableCustomCursor() {
  const cursorFollow = $(".cursor-follow");
  const cursor = $(".cursor");
  const actionElements = $('[class*="action"]');

  cursor.fadeIn(250);
  cursorFollow.fadeIn(250);

  // Store original cursor property
  $("body *").each(function () {
    $(this).data("original-cursor", $(this).css("cursor"));
    $(this).css("cursor", "none");
  });

  $(document)
    .on("mousemove", (e) => {
      const x = e.pageX;
      const y = e.pageY;
      cursor.css({ left: x, top: y });
      setTimeout(() => {
        cursorFollow.css({ left: x, top: y });
      }, 100);
    })
    .on("mouseenter", () => {
      cursor.finish().fadeIn(250);
      cursorFollow.finish().fadeIn(250);
    })
    .on("mouseleave", () => {
      cursor.finish().fadeOut(250);
      cursorFollow.finish().fadeOut(250);
    });

  actionElements
    .on("mouseenter", () => {
      cursorFollow.finish().animate({ height: "40px", width: "40px" }, 250);
    })
    .on("mouseleave", () => {
      cursorFollow.finish().animate({ height: "25px", width: "25px" }, 250);
    });
}

function enableDefaultCursor() {
  const cursorFollow = $(".cursor-follow");
  const cursor = $(".cursor");

  if (
    cursor.css("display") != "none" &&
    cursorFollow.css("display") != "none"
  ) {
    cursor.fadeOut(250);
    cursorFollow.fadeOut(250);
  }

  $(document).off("mousemove mouseenter mouseleave");
  $('[class*="action"]').off("mouseenter mouseleave");

  // Restore original cursor property
  $("body *").each(function () {
    const originalCursor = $(this).data("original-cursor");
    if (originalCursor && originalCursor !== "none") {
      $(this).css("cursor", originalCursor);
    } else {
      $(this).css("cursor", "auto");
    }
  });
}

$(function settingsCursor() {
  const cursorToggle = $(".toggle input.for-cursor");
  const storedDisplayCursor = JSON.parse(localStorage.getItem("displayCursor"));

  function cursorCheck() {
    if (!isMobile && displayCursor) {
      enableCustomCursor();
    } else {
      enableDefaultCursor();
    }
  }

  if (storedDisplayCursor != null) {
    displayCursor = storedDisplayCursor;
  } else {
    localStorage.setItem("displayCursor", displayCursor);
  }

  cursorToggle
    .on("change", function () {
      displayCursor = $(this).is(":checked");
      localStorage.setItem("displayCursor", displayCursor);

      cursorCheck();
    })
    .prop("checked", displayCursor);

  cursorCheck();
});