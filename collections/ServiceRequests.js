ServiceRequests = new Mongo.Collection('serviceRequests');


ServiceRequests.allow({
    insert: function(userId, doc) {
        // true if userId exists
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    }
});

Schemas.ServiceRequest = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    desc: {
        type: String,
        label: "Description"
    }
});

ServiceRequests.attachSchema(Schemas.ServiceRequest);