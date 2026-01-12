<div align="center">
  <img src="https://files.catbox.moe/fyp5m3.jpg" alt="Autobyte Logo" width="100">
  <h1>🤖 Autobyte Bot</h1>
  <p><b>Developed by Iconic Tech</b></p>

  <!-- Deployment Badges -->
  <p>
    <a href="https://dashboard.katabump.com/auth/login#d611b1">
      <img src="https://img.shields.io/badge/Deploy%20to-KataBump-blue?style=for-the-badge&logo=rocket" alt="Deploy to KataBump">
    </a>
    <a href="https://render.com/deploy">
      <img src="https://img.shields.io/badge/Deploy%20to-Render-blue?style=for-the-badge&logo=render" alt="Deploy to Render">
    </a>
    <a href="https://bot-hosting.net/?aff=1430906124802195496">
      <img src="https://img.shields.io/badge/Deploy%20to-BotHosting-green?style=for-the-badge&logo=server" alt="Deploy to Bot Hosting">
    </a>
  </p>
</div>

---

**Autobyte** is a silent WhatsApp automation bot built with **Baileys**. It is designed to handle presence updates and reactions without ever sending a text message, keeping your account active and responsive in stealth mode.

---

## 🚀 Main Functions

- **⌨️ Auto Typing:** Shows the "typing..." status automatically when a message is received.
- **🎤 Auto Recording:** Shows the "recording..." status automatically.
- **❤️ Auto React:** Instantly reacts to incoming messages with a specific emoji.
- **🔇 Silent Operation:** This bot **does not** send any text messages in groups or private chats.

---

## ⚙️ Configuration (`settings.js`)

Control your bot using simple True/False switches:

| Feature | Description |
| :--- | :--- |
| **`autoTyping`** | Enable/Disable the "typing..." status. |
| **`autoRecording`** | Enable/Disable the "recording..." status. |
| **`autoReact`** | Enable/Disable automatic emoji reactions. |

---

## 🛠️ Setup & Installation

1. **Upload Files:** Ensure all files (`index.js`, `main.js`, `settings.js`, `package.json`) are in your directory.
2. **Session Setup:** Create a folder named `session`. 
   - If you have a `creds.json`, place it inside the folder.
   - If not, the bot will display a QR code in the terminal to scan.
3. **Run Locally:**
   ```bash
   npm install
   npm start