Template.Panel.events({
    'click .panel-container-toggler': function(e) {
        var container = $(e.currentTarget).closest('.panel-container');
        if (container.hasClass('hidden')) {
            container.removeClass('hidden');
        } else {
            container.addClass('hidden');
        }
    }
});

Template.Panel.helpers({
});