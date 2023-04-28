"use strict";

window.sr = ScrollReveal({ reset: true });

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  );

let displayCursor = true;

(async function animateTitle(title) {
  let i = 0;
  const intervalId = setInterval(function () {
    document.title = title.slice(0, i + 1);
    i++;
    if (i >= title.length) {
      clearInterval(intervalId);
      setTimeout(function () {
        animateTitle(title);
      }, 2000);
    }
  }, 300);
})("mk_");

function choose(choices) {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function enableCustomCursor() {
  const cursorFollow = $(".cursor-follow");
  const cursor = $(".cursor");

  cursor.fadeIn(250);
  cursorFollow.fadeIn(250);

  $("*").css("cursor", "none");

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

  $('[class*="action"]')
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
  $("*").css("cursor", "auto");
}

$(() => {
  const title = $(".title");
  const greetings = ["Hi", "Hello", "Hey", "Yo"];

  title.fadeIn(800).on("dblclick", () => {
    title.fadeOut(250, () => {
      title.text(choose(greetings) + " :)").fadeIn(250);
    });
  });
});

$(() => {
  $("footer").on("click", () => {
    window.open("https://github.com/madkarmaa", "_blank");
  });
});

$(() => {
  $(window).on("keypress", function (e) {
    if (e.key === "m" || e.key === "M") {
      let input = e.key;
      $(window).on("keypress", function (e) {
        input += e.key;
        if (input === "magic") {
          console.log("Hello there!");
        }
      });
    }
  });
});

$(() => {
  const pages = $('section[id^="section"]').toArray();

  for (let i = 1; i < pages.length; i++) {
    const page = pages[i];
    $(page).append('<div class="bg-container"></div>');
  }
});

$(() => {
  const cards = $(".bg-container").toArray();

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    sr.reveal(card, {
      duration: 1000,
      origin: "bottom",
      distance: "300px",
      delay: 300,
    });
  }
});

$(() => {
  const settingsButton = $(".settings-button");
  const settingsMenu = $(".settings-menu");
  const settingsButtonSpan = $(".settings-button span");
  let wasScrolled = true;

  if (isMobile) {
    settingsMenu.css("width", "100%");
    $('label[for="custom-cursor"]').hide();
    $('div[id="custom-cursor"]').hide();
  }

  $(window).on("scroll", () => {
    if ($(this).scrollTop() > 0 && !wasScrolled) {
      wasScrolled = true;

      settingsMenu.hide("slide", { direction: "right" }, 250, () => {
        settingsButton.prop("disabled", false);
      });

      settingsButtonSpan.fadeOut(250, () => {
        settingsButtonSpan
          .text(
            $(settingsButtonSpan).text().trim() === "settings"
              ? "close"
              : "settings"
          )
          .fadeIn(250);
      });
    }
  });

  settingsButton.on("click", () => {
    settingsButton.prop("disabled", true);

    settingsMenu.toggle("slide", { direction: "right" }, 250, () => {
      settingsButton.prop("disabled", false);
    });

    settingsButtonSpan.fadeOut(250, () => {
      settingsButtonSpan
        .text(
          $(settingsButtonSpan).text().trim() === "settings"
            ? "close"
            : "settings"
        )
        .fadeIn(250, () => {
          wasScrolled = $(settingsButtonSpan).text().trim() === "settings";
        });
    });
  });
});

$(() => {
  const cursorToggle = $(".toggle input");

  let storedDisplayCursor = JSON.parse(localStorage.getItem("displayCursor"));

  function cursorCheck() {
    if (!isMobile && displayCursor) {
      enableCustomCursor();
    } else {
      enableDefaultCursor();
    }
  }

  if (storedDisplayCursor !== null) {
    displayCursor = storedDisplayCursor;
    cursorToggle.attr("checked", displayCursor);
  } else {
    localStorage.setItem("displayCursor", displayCursor);
    cursorToggle.attr("checked", displayCursor);
  }

  cursorToggle.on("change", () => {
    displayCursor = cursorToggle.is(":checked");
    localStorage.setItem("displayCursor", displayCursor);

    cursorCheck();
  });

  cursorCheck();
});
