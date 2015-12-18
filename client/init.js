Meteor.startup(function() {
    GoogleMaps.load({
        libraries: 'places'
    });
    AutoForm.setDefaultTemplate('materialize');
    window.scrollTo(0,1); // fullscreen for browser
    //document.body.requestFullscreen(); // fullscreen for browser

    Session.setDefault('viewDate', new Date());
    Session.setDefault('detailsPanelHidden', true);

    var globalHotkeys = new Hotkeys();
    globalHotkeys.add({
        combo : "alt+s",
        callback : function(){
            $('.fixed-action-btn a[href="#SettingsLayoutModal"]').trigger('click');
        }
    });
    globalHotkeys.add({
        combo : "alt+d",
        callback : function(){
            $('input.viewDate').trigger('click');
        }
    });
    globalHotkeys.add({
        combo : "alt+t",
        callback : function(){
            $('#DashboardModal').openModal();
        }
    });
    globalHotkeys.add({
        combo : "alt+m",
        callback : function(){
            $('#MessengerModal').openModal();
        }
    });
});