Template.Companies.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('companies');
    });
});

//Meteor.subscribe('')

Template.Companies.helpers({
        serviceTypes: ()=> {
return Companies.find({});
}
});