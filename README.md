# 🤖 Autobyte Bot
> **Developed by Iconic Tech**

Autobyte is a silent WhatsApp automation bot built with Baileys. It is designed to handle presence updates and reactions without ever sending a text message, keeping your account active and responsive in stealth mode.

---

## 🚀 Main Functions

- **⌨️ Auto Typing:** Shows the "typing..." status automatically when a message is received.
- **🎤 Auto Recording:** Shows the "recording..." status automatically.
- **❤️ Auto React:** Instantly reacts to incoming messages with a specific emoji.
- **🔇 Silent Operation:** This bot **does not** send any text messages in groups or private chats.

---

## 📂 File Structure

- `index.js`: The entry point that starts the bot.
- `main.js`: Contains the core logic for connection and automation.
- `settings.js`: Global configuration file with True/False toggles.
- `package.json`: Project dependencies and scripts.
- `session/`: Folder where your `creds.json` is stored.

---

## ⚙️ Configuration (settings.js)

The bot is controlled via simple True/False switches:

| Feature | Description |
| :--- | :--- |
| **autoTyping** | Enable/Disable the "typing..." status. |
| **autoRecording** | Enable/Disable the "recording..." status. |
| **autoReact** | Enable/Disable automatic emoji reactions. |

---

## 🛠️ Setup & Installation

1. **Upload Files:** Ensure all files (`index.js`, `main.js`, `settings.js`, `package.json`) are in your directory.
2. **Session:** Create a folder named `session`. 
   - If you have `creds.json`, put it inside the `session` folder.
   - If not, the bot will display a QR code to scan.
3. **Install:**
   ```bash
   npm install