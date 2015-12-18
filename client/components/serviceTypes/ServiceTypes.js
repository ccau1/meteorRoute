Template.ServiceTypes.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('serviceTypes');
    });
});

//Meteor.subscribe('')

Template.ServiceTypes.helpers({
    serviceTypes: ()=> {
        return ServiceTypes.find({});
    }
});