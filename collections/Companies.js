Companies = new Mongo.Collection('companies');


Companies.allow({
    insert: function(userId, doc) {
        // true if userId exists
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    }
});

Schemas.CompanySettings = new SimpleSchema({
    userLimit: {
        type: Number,
        label: "User Limit",
        defaultValue: 10
    },
    isMetric: {
        type: Boolean,
        label: "Is Metric",
        defaultValue: true
    },
    allowDriverCancellation: {
        type: Boolean,
        label: "Allow Driver Cancellation",
        defaultValue: true
    },
    uploadSizeLimit: {
        type: Number,
        label: "Upload Size Limit (mb)",
        defaultValue: 5
    }
});

Schemas.CompanyDivision = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    address: {
        type: Schemas.Address
    }
});


Schemas.Company = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        unique: true
    },
    website: {
        type: String,
        label: "Website"
    },
    phoneNumber: {
        type: String,
        label: "Phone Number"
    },
    fax: {
        type: String,
        label: "Fax Number"
    },
    //address: {
    //    type: Schemas.Address,
    //    label: "Address"
    //},
    address: {
        type: String,
        autoform: {
            type: 'map',
            afFieldInput: {
                defaultLat: '43.670644',
                defaultLng: '-79.753112',
                mapType: 'roadmap',
                geolocation: true,
                zoom: 10,
                searchBox: true,
                autolocate: true
            }
        }
    },
    //divisions: {
    //    type: [Schemas.CompanyDivision],
    //    label: "Divisions"
    //},
    settings: {
        type: Schemas.CompanySettings,
        label: "Settings"
    }
    // sector, preferred external services, service types
});

Companies.attachSchema(Schemas.Company);