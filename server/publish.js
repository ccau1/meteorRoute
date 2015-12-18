Meteor.publish('serviceTypes', function() {
    return ServiceTypes.find({  });
});

Meteor.publish('companies', function() {
    return Companies.find({  });
});