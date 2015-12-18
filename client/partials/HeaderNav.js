Template.HeaderNav.events({
    'click .modal-trigger': function(e) {

        e.preventDefault();
        $($(e.currentTarget).attr('href')).openModal();
    },
    'click .triggerViewDate': function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.viewDate').trigger('click');
    },
    'click .search-field-clear': function(e) {
        $('#search-field').val('');
        Session.setTemp('smartSearch', '');
    },
    'keyup #search-field': function(e) {
        console.log('hit');
        clearTimeout(this.searchFieldTimeout);
        if (event.which == 13 || event.keyCode == 13) {
            console.log('hit 1');
            Session.setTemp('smartSearch', $(e.currentTarget).val());
            return false;
        }
        this.searchFieldTimeout = setTimeout(function () {
            console.log('hit 2');
            Session.setTemp('smartSearch', $(e.currentTarget).val());
        }, 2000);
    }
});

Template.HeaderNav.onRendered(function() {
    $(".button-collapse").sideNav();
    $('.tooltipped').tooltip({delay: 50});
    // TODO: whenever date is clicked, throws error: RangeError: Maximum call stack size exceeded
    $('.viewDate').pickadate({
        selectMonths: true,
        selectYears: 15,
        buttonClear: '',
        onStart: function ()
        {
            if (Session.get('viewDate')) {
                this.set('select', Session.get('viewDate'));
            } else {
                var date = new Date();
                this.set('select', [date.getFullYear(), date.getMonth() + 1, date.getDate()]);
            }
        },
        onSet: function(context) {

            Session.set('viewDate', new Date(this.get('value', 'yyyy/mm/dd')));
        }
    });
});