
Schemas.Address = new SimpleSchema({
    userLimit: {
        type: Number,
        label: "User Limit"
    },
    isMetric: {
        type: String,
        label: "Is Metric"
    },
    allowDriverCancellation: {
        type: Boolean,
        label: "Allow Driver Cancellation"
    },
    uploadSizeLimit: {
        type: Number,
        label: "Upload Size Limit (mb)"
    }
});