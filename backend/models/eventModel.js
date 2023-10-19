import mongoose from 'mongoose'

const eventSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },

    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
    attending: {
        type: Number,
        required: true,
        default: 0
    },
    date: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
})

const Event = mongoose.model('events', eventSchema)
export default Event