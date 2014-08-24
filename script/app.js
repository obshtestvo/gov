$(function() {
    var $win = $(window)
    var $banner = $('.banner')
    var $header = $banner.find('header')
    var $nav = $('nav')
    var $navPattern = $nav.find('.pattern')
    var menubg = new Trianglify({
        cellsize: 400,
        noiseIntensity: 0,
        x_gradient: ['#42c178', '#108eba', '#162e37']
    });
    var menupattern = menubg.generate($navPattern.width(), $navPattern.height());
    $navPattern.css('background-image', menupattern.dataUrl)

    var t = new Trianglify({
        noiseIntensity: 0,
        x_gradient: ['#42c178', '#108eba', '#162e37']
    });

    function redrawBanner() {
        var minHeight = Math.max($win.height(), $header.height()*1.8)
        $banner.css('min-height', minHeight+'px')
        var pattern = t.generate($banner.width(), $banner.height());
        $banner.css('background-image', pattern.dataUrl)
    };


    $('viewportHeight').waypoint(function(dir) {
        if (dir == 'down') {
            app.nav.switchTheme('light')
        } else {
            app.nav.switchTheme('dark')
        }
        $(this).remove()
    }, {
        offset: function() {
            return -$(this).height();
        }
    })

    $win.on('resize', function() {
        redrawBanner();
    });
    redrawBanner()

    $nav.waypoint('sticky');
})
