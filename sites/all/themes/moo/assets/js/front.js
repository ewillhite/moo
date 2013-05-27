(function ($) {

$(function() {
  $('.media-vimeo-video').fitVids();

  // Vimeo General
  var f = $('iframe'),
      url = f.attr('src').split('?')[0],
      status = $('.status');

  // Listen for messages from the player
  if (window.addEventListener){
      window.addEventListener('message', onMessageReceived, false);
  }
  else {
      window.attachEvent('onmessage', onMessageReceived, false);
  }

  // Handle messages received from the player
  function onMessageReceived(e) {
      var data = JSON.parse(e.data);

      switch (data.event) {
          case 'ready':
              onReady();
              break;
          case 'pause':
              onPause();
              break;
          case 'finish':
              onFinish();
              break;
      }
  }

  // Call the API when a button is pressed
  $('.header-region .views-field-nothing a').click(function() {
      post($(this).text().toLowerCase());
      $(this).fadeOut();
      return false;
  });

  // Helper function for sending a message to the player
  function post(action, value) {
      var data = { method: action };

      if (value) {
          data.value = value;
      }

      f[0].contentWindow.postMessage(JSON.stringify(data), url);
  }

  function onReady() {
      post('addEventListener', 'pause');
      post('addEventListener', 'finish');
      post('addEventListener', 'playProgress');
  }

  function onFinish() {
      $('.header-region .views-field-nothing a').fadeIn();
  }
  function onPause() {
      $('.header-region .views-field-nothing a').fadeIn();
  }

});

})(jQuery);
