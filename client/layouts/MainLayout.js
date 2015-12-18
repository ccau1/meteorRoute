Template.MainLayout.onCreated(function() {


});

Template.MainLayout.onRendered(function() {
    window.scrollTo(0,1); // fullscreen for browser
    //document.body.requestFullscreen(); // fullscreen for browser

    function onResize() {
        if ($('.main-layout').length) {
            $('.main-layout').css('min-height', ($(window).height() - $('.main-layout').offset().top) + 'px');
        }
    }
    $(window).resize(onResize);
    setTimeout(onResize, 2000);
    onResize();
});