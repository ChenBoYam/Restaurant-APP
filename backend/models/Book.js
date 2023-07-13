const mongoose = require( 'mongoose' )
const AutoIncrement = require( 'mongoose-sequence' )( mongoose )

const bookSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        partysize: {
            type: Number,
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        }
    },
    // Mongoose schemas support a timestamps option. If you set
    //  timestamps: true
    // Mongoose will add two properties of type Date to your schema:
    //  createdAt: a date representing when this document was created
    //  updatedAt: a date representing when this document was last updated
    {
        timestamps: true
    }
)
bookSchema.plugin( AutoIncrement, {
    inc_field: 'reservation',
    id: 'reserveNums',
    start_seq: 500
} )
module.exports = mongoose.model( 'Book', bookSchema )