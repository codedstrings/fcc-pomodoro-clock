# 25 + 5 Clock (Pomodoro Timer)

A modern, minimalistic Pomodoro timer built with React. This project follows the Pomodoro Technique with customizable work sessions and break periods. Built as part of the FreeCodeCamp Frontend Development Libraries certification.

## 🚀 Live Demo

The application is automatically deployed to GitHub Pages on every push to the main branch.

**[View Live Demo →](https://codedstrings.github.io/fcc-pomodoro-clock/)**

## ✨About

### Pomodoro
The Pomodoro Technique is a time management method that uses a timer to break work into intervals:
1. **Work Session**: Focus on a task for 25 minutes
2. **Short Break**: Take a 5-minute break
3. **Repeat**: Continue this cycle
4. **Long Break**: After 4 sessions, take a longer break

### App Features
This app makes it easy to follow this proven productivity method!
- **Customizable Timer**: Set session and break lengths from 1-60 minutes
- **Session Counter**: Track how many work sessions you've completed
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Pause/Resume/Reset**: Start, pause, and resume your timer at any time and instantly reset to default settings
- **Audio Notifications**: Sound alert when timer reaches zero
- **Modern UI and Theme support**: Beautiful dark theme with gradient accents and smooth animations. Automatically adapts to system light/dark mode preferences (built for dark mode first)

### App Usage

1. **Set Your Times**: Use the + and - buttons to adjust session and break lengths
2. **Start Timer**: Click "Start" to begin your first work session
3. **Stay Focused**: Work until you hear the notification sound
4. **Take a Break**: The timer automatically switches to break mode
5. **Repeat**: Continue the cycle to boost your productivity!
6. **Reset**: Click "Reset" anytime to return to default settings

## 🛠️ Built With

- **[React](https://reactjs.org/)** - Frontend framework with hooks
- **[Vite](https://vitejs.dev/)** - Build tool and development server


## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/codedstrings/fcc-pomodoro-clock.git
cd fcc-pomodoro-clock
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
├── src/
│   ├── App.jsx          # Main timer component with all logic
│   ├── App.css          # Modern styling and animations
│   └── main.jsx         # React entry point
├── public/              # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions deployment workflow
├── package.json         # Project dependencies and scripts
└── README.md           # This file
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🧪 FreeCodeCamp Tests

This project passes all 28 FreeCodeCamp test requirements:

✅ All required HTML elements with correct IDs  
✅ Default values (25 min session, 5 min break)  
✅ Increment/decrement functionality with 1-60 minute limits  
✅ Start/pause/reset functionality  
✅ Timer countdown with mm:ss format  
✅ Automatic session/break switching  
✅ Audio notification on timer completion  
✅ Audio reset functionality  


## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ If you found this project helpful or learned something from the code, please give it a star!
