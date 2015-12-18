Template.SearchResult.onCreated(function() {
    this.results = new ReactiveVar([]);
});

Template.SearchResult.onRendered(function() {
    $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

});

Template.SearchResult.helpers({
    hasSearchValue: function() {
        // TODO: being called twice
        var searchVal = Session.get('smartSearch');
        // get result from diff collections & gmap results
        // change name to results and pass array of results
        var resultsInstance = Template.instance().results;
        console.log('resultsInstance', resultsInstance.get(), searchVal);
        var newResults = [];
        if (GoogleMaps.loaded()) {
            (new google.maps.Geocoder).geocode({'address': searchVal}, function (results, status) {
                console.log('gResult', results);
                var addresses = [];
                if (status == google.maps.GeocoderStatus.OK) {
                    $.each(results, function (i, val) {
                        newResults.push({type: 'location', header: val.formatted_address, content: '', obj: val });
                        console.log('newResults', newResults, val);
                        resultsInstance.set(newResults);
                    });
                }
            });
        }
        return searchVal;
    },
    results: function() {
        return Template.instance().results.get();
    },
    mapOptions: function() {
        console.log('mapOptions', this);

        //GoogleMaps.ready('searchResultDetailsMap', function(map) {
        //    // Add a marker to the map once it's ready
        //    var marker = new google.maps.Marker({
        //        position: this.obj.geometry.location,
        //        map: map.instance
        //    });
        //});

        if (GoogleMaps.loaded()) {
            // Map initialization options
            return {
                center: new google.maps.LatLng(43.670644, -79.753112),
                zoom: 12,


                zoomControl: true,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.LEFT_BOTTOM
                },
                mapTypeControl: true,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                    position: google.maps.ControlPosition.BOTTOM_LEFT
                },
                streetViewControl: true,
                streetViewControlOptions: {
                    position: google.maps.ControlPosition.LEFT_BOTTOM
                }

            };
        }
    }
});