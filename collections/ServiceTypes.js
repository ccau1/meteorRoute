ServiceTypes = new Mongo.Collection('serviceTypes');


ServiceTypes.allow({
    insert: function(userId, doc) {
        // true if userId exists
        //return !!userId;
        return true;
    },
    update: function(userId, doc) {
        return !!userId;
    }
});

Schemas.SpecificField = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    desc: {
        type: String,
        label: "Description"
    },
    type: {
        type: String,
        label: "Type",
        //allowedValues: [0,1],//["Text", "Range", "Date", "DateRange", "Number", "Location"],
        autoform: {
            options: [
                {
                    label: "Text",
                    value: "Text"
                },
                {
                    label: "Range",
                    value: "Range"
                },
                {
                    label: "Date",
                    value: "Date"
                },
                {
                    label: "DateRange",
                    value: "DateRange"
                },
                {
                    label: "Number",
                    value: "Number"
                },
                {
                    label: "Location",
                    value: "Location"
                }
            ]
        }
    }
    // TODO: add: type settings (ex. Date: minDate, maxDate)
});

Schemas.ServiceType = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    desc: {
        type: String,
        label: "Description"
    },
    // TODO: add: icon
    specificFields: {
        type: [Schemas.SpecificField],
        optional: true
    }
});

ServiceTypes.attachSchema(Schemas.ServiceType);