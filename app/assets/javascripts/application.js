// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery

$(document).ready(function () {
  const source = new EventSource('/sse');

  source.addEventListener('test', function(e) {
    const json = JSON.parse(e.data);
    newMessage(json);
  }, true);

});

  function newMessage({title, description}){
    let messageClone = $("#message").clone();
    messageClone.find("#title").html(title);
    messageClone.find("#description").html(description);
    messageClone.show();
    $("#message").after(messageClone);
  }

