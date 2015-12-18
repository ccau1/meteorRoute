Template.SettingsLayout.onCreated(function() {
   this.currentTab = new ReactiveVar("SRTypes");
});

Template.SettingsLayout.helpers({
    tab: function() {
        return Template.instance().currentTab.get();
    },
    tabData: function() {
        var tab = Template.instance().currentTab.get();

        // send some data to the template according to the currentTab
    }
})

Template.SettingsLayout.events({
    'click .saNav a': function( event, template ) {
        var currentTab = $( event.currentTarget);

        currentTab.addClass( "active" );
        $( ".saNav a" ).not( currentTab ).removeClass( "active" );

        template.currentTab.set( currentTab.data( "template" ) );
    }
});