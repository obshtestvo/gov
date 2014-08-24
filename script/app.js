$(function() {
    var $win = $(window)
    var $banner = $('.banner')
    var $header = $banner.find('header')
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

    $win.on('resize', function() {
        redrawBanner();
    });
    redrawBanner()

})
