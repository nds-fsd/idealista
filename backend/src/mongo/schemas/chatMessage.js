const { Schema, model } = require('mongoose');

const chatMessageSchema = new Schema(
    {
        userSender: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },

        userReceiver: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },

        content: {
            type: String,
            trim: true,
        },

        isRead: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)


const Chat = model('chat', chatMessageSchema);

module.exports = Chat;