$(document).ready(function () {
  const cardsContainer = $("#cards-container");
  const btn1 = $("#btn1");
  const btn2 = $("#btn2");
  const btn3 = $("#btn3");
  let clicked = true;
  btn1.click(function () {
    if (clicked) {
      btn2.parent().fadeOut(2000);
      btn3.parent().fadeOut(1000);
      clicked = !clicked;
    } else {
      btn2.parent().fadeIn(2000);
      btn3.parent().fadeIn(1000);
      clicked = !clicked;
    }
  });

  btn2.click(function () {
    $(this).parent().fadeOut(500).fadeIn(3500);
    btn1.parent().slideToggle(1000);
    btn3.parent().fadeToggle("hidden");
  });

  btn3.click(function () {
    $(this).parent().fadeOut(1000).fadeIn(500);
  });
});
