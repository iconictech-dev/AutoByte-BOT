module.exports = {
    botName: "AutoByte Bot",
    sessionPath: "./session",
    
    // Auto Features
    autoTyping: true,
    autoRecording: true,
    autoReact: false,
    autoRead: true, // NEW: Auto read messages feature
    
    reactionEmoji: "❤️", // Default reaction emoji
    
    // Optional: Auto read delay in milliseconds
    autoReadDelay: 1000, // Read after 1 second
    
    // Optional: Disable auto read for specific chats
    ignoreReadFor: [
        "status@broadcast", // Don't auto read status updates
        // Add more JIDs to ignore
    ]
};