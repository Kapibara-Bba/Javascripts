$(function () {
  // 以下で、hideメソッドを用いて<h1>要素を隠してください
  $('h1').hide();

});

$(function() {
  // 以下で、fadeOutメソッドを用いて<img>要素を隠してください
  $('img').fadeOut();
  
  // 以下で、slideUpメソッドを用いて<p>要素を隠してください
  $('p').slideUp();
  
});

$(function() {
  // slideUpメソッドを用いて、「#title」の要素を隠してください
  $('#title').slideUp();
  
  // fadeOutメソッドを用いて、「.lesson-item」の要素を隠してください
  $('.lesson-item').fadeOut();
  
});

$(function() {
  // showメソッドを用いて、「#title」要素を表示してください
  $('#title').show();
  
  // fadeInメソッドを用いて、「#image」要素を表示してください
  $('#image').fadeIn();
  
});

$(function() {
  // 「#hide-text」要素に対するclickイベントを作成してください
  $('#hide-text').click(function() {
    $('#text').slideUp();
  });
  
});