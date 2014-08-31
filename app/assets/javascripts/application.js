// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.spin
//= require jquery.waypoints
//= require jquery.waypoints.sticky
//= require bowser
//= require_tree .

$(function() {
  var $win    = $(window);
  var $banner = $('.banner');
  var $header = $banner.find('header');
  var $nav = $('nav')
  var $fixedNav = $nav.clone()


  function resizeBanner() {
    var minHeight = Math.max($win.height(), $header.height() * 1.8);
    $banner.css('min-height', minHeight + 'px');
  }

  $fixedNav.removeClass('main').addClass('fixed').insertAfter($nav);

  var menuOffset = 150;

  $fixedNav.find('a').each(function() {
    var $a       = $(this);
    var $item    = $a.parent();
    var selector = $a.attr('href');
    var $section = $(selector);

    $section.waypoint(function(dir) {
      $item.toggleClass('active', dir === 'up');
    }, {
      offset: function() {
        return -$(this).height() + menuOffset;
      }
    })

    $section.waypoint(function(dir) {
      $item.toggleClass('active', dir === 'down');
    }, {
      offset: menuOffset
    })
  })

  $win.resize(resizeBanner);
  resizeBanner();

  $nav.waypoint(function(dir) {
    if (dir=='up') {
      $fixedNav.removeClass('on')
    }
  }, {
    offset: function() {
      return -$(this).height();
    }
  }).waypoint(function(dir) {
    if (dir=='down') {
      $fixedNav.addClass('on')
    }
  }, {
    offset: function() {
      return -$(this).height();
    }
  });
  $fixedNav.find('.handle').click(function() {
    $fixedNav.toggleClass('active')
  })


  var $openSourceBrowserAlert = $('.open-browser');
  var $browserName = $openSourceBrowserAlert.find('.browser');
  if (bowser.firefox || bowser.chrome) {
    $openSourceBrowserAlert.removeClass('hidden');
    $browserName.text($browserName.data('firefox'));
    if (bowser.firefox) {
      $openSourceBrowserAlert.find('.firefox').removeClass('hidden');
    }
    if (bowser.chrome) {
      $openSourceBrowserAlert.find('.chrome').removeClass('hidden');
    }
  }
});
