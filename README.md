<p align="center">
  <img src="https://files.catbox.moe/fyp5m3.jpg" width="100%" alt="Silentbyte Header">
</p>

# 🤖 Silentbyte AI
> **Developed by Iconic Tech**  
> *The ultimate stealth WhatsApp automation bot.*

<p align="center">
  <img src="https://files.catbox.moe/atjvc0.jpg" width="200" style="border-radius: 50%;" alt="Silentbyte Logo">
</p>

---

## 📝 Description
**Silentbyte AI** is a powerful, lightweight WhatsApp automation tool built with the Baileys library. Designed for users who want to stay active and responsive without ever sending a manual text, it operates in complete **Stealth Mode**. Whether it's showing presence, reacting to messages, or managing statuses, Silentbyte AI handles it all silently.

**Repo Link:** [https://github.com/iconictech-dev/silentbyte-ai](https://github.com/iconictech-dev/silentbyte-ai)

---

## 🚀 Main Functions

### 🟢 Presence & Interaction
- **⌨️ Auto Typing:** Automatically triggers the "typing..." status when a message is received.
- **🎤 Auto Recording:** Automatically triggers the "recording..." status.
- **❤️ Auto React:** Instantly reacts to incoming messages with your preferred emoji.
- **🔇 Silent Operation:** Guaranteed zero text messages sent in groups or private chats.

### 📸 Status Features (New Update)
- **👀 Status Auto-View:** Automatically views your contacts' status updates instantly.
- **💾 Status Save:** Automatically saves status media to your device.
- **👍 Status Like:** Automatically likes/reacts to statuses to maintain social presence.

---

## 📂 File Structure

- `index.js`: The entry point that starts the bot.
- `main.js`: Contains the core logic for connection and automation.
- `settings.js`: Global configuration file with True/False toggles.
- `package.json`: Project dependencies and scripts.
- `session/`: Folder where your `creds.json` is safely stored.

---

## ⚙️ Configuration (settings.js)

Control your bot easily using these switches:

| Feature | Description |
| :--- | :--- |
| **autoTyping** | Enable/Disable the "typing..." status. |
| **autoRecording** | Enable/Disable the "recording..." status. |
| **autoReact** | Enable/Disable automatic emoji reactions. |
| **statusView** | Enable/Disable automatic status viewing. |
| **statusLike** | Enable/Disable automatic status reactions. |

---

## 🛠️ Setup & Installation

1. **Upload Files:** Ensure all files (`index.js`, `main.js`, `settings.js`, `package.json`) are in your project directory.
2. **Session Setup:** 
   - Create a folder named `session`. 
   - If you have an existing `creds.json`, place it inside.
   - If not, the bot will generate a QR code in the terminal for you to scan.
3. **Install Dependencies:**
   ```bash
   npm install