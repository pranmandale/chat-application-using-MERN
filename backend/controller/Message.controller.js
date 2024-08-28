// Import necessary models
import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';

export const sendMessage = async (req, res) => {
    try {
        // Extract message from request body
        const { message } = req.body;
        // Extract receiver's ID from request parameters
        const { id: receiverId } = req.params;
        // Extract sender's ID from the authenticated user
        const senderId = req.user_id;

        // Validate if all required fields are present
        if (!senderId || !receiverId || !message) {
            return res.status(400).json({ error: "Sender ID, Receiver ID, and message are required." });
        }

        // Log for debugging
        console.log(`Sender ID: ${senderId}, Receiver ID: ${receiverId}, Message: ${message}`);

        // Check if conversation already exists
        let conversation = await Conversation.findOne({
            members: { $all: [senderId, receiverId] }
        });

        // If conversation does not exist, create a new one
        if (!conversation) {
            conversation = await Conversation.create({
                members: [senderId, receiverId]
            });
        }

        // Create a new message
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        // Save the new message
        await newMessage.save();

        // Add the new message to the conversation
        conversation.messages.push(newMessage._id);

        // Save the updated conversation
        await conversation.save();

        // Respond with success message
        res.status(201).json({
            message: "Message sent successfully",
            newMessage
        });

    } catch (error) {
        console.error("Error in sendMessage: ", error);
        res.status(500).json({ error: "Internal server error" });
    }
};




export const getMessage = async (req, res) => {
    try {
        // Extract receiver's ID from request parameters
        const { id: chatUser } = req.params;
        // Extract sender's ID from the authenticated user
        const senderId = req.user_id;

        // Check if conversation already exists; if so, previous messages should be displayed
        let conversation = await Conversation.findOne({
            members: { $all: [senderId, chatUser] }
        }).populate("messages");
        
        if (!conversation) {
            return res.status(200).json([]); // Changed status to 200 for 'No Content'
        }

        // If conversation exists, return the messages
        const messages = conversation.messages;
        res.status(200).json(messages); // Changed status to 200 for successful fetch
    } catch (error) {
        console.error("Error in getMessage: ", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
