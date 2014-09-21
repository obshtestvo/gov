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
  var $nav = $('nav')
  var $fixedNav = $nav.clone()
  var $header = $('.banner header');

  var makeBannerHeaderFulHeight = function () {
    var height = $(window).height();
    var width  = $(window).width();
    if (width > height * 1.2) {
      $header.height(height);
    } else {
      $header.height('auto');
    }
  };
  // $(window).resize(makeBannerHeaderFulHeight);
  // makeBannerHeaderFulHeight();

  $fixedNav.removeClass('main').addClass('fixed').insertAfter($nav);

  var menuOffset = 150;

  $fixedNav.find('a').each(function() {
    var $a       = $(this);
    var $item    = $a.parent();
    var selector = $a.attr('href');
    var $section = $(selector);

    $a.on('click', function () {
      setTimeout(function () {
        $fixedNav.removeClass('active');
      }, 300);
    });

    $section.waypoint(function(dir) {
      $item.toggleClass('active', dir === 'up').next().toggleClass('active', false);
    }, {
      offset: function() {
        return -$(this).height() + menuOffset;
      }
    })

    $section.waypoint(function(dir) {
      $item.toggleClass('active', dir === 'down').prev().toggleClass('active', false);
    }, {
      offset: menuOffset
    })
  });

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

  // Show a loader overlay over ajaxified forms
  $(document).on('ajax:send', 'form', function () {
    $(this).find('.loading').show();
  });

  // Provide a close link on "success" overlay messages for ajaxified forms
  $(document).on('click', 'a[data-close]', function () {
    var $link = $(this);
    $link.closest($link.data('close')).fadeOut('slow');
    return false;
  });

  var hideScrollDownHint = function () {
    $(window).off('scroll', hideScrollDownHint);
    setTimeout(function () {
      var $hint = $('.scroll-down-hint');
      $hint.fadeOut('fast', function () { $hint.remove(); })
    }, 3000);
  };
  $(window).on('scroll', hideScrollDownHint);

  // Sign form
  var updateSignFormState = function (animate) {
    var $form           = $('#sign-form');
    var $organization   = $form.find('.supporter_organization');
    var $isOrganization = $form.find('#supporter_is_organization');

    if ($isOrganization.is(':checked')) {
      if (animate) {
        $organization.slideDown();
      } else {
        $organization.show();
      }
    } else {
      if (animate) {
        $organization.slideUp();
      } else {
        $organization.hide();
      }
    }
  };
  $(document).on('change', '#supporter_is_organization', function () { updateSignFormState('animate') });
  $(document).on('ajax:updated', '#sign-form', function () { updateSignFormState(); });
  updateSignFormState();

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
