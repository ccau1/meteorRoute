Template.BottomFab.events({
    'click .modal-trigger': function(e) {

        e.preventDefault();
        $($(e.currentTarget).attr('href')).openModal();
    }

});

Template.BottomFab.onRendered(function() {
});