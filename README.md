📱 Daily Fetal Movement Tracker (DFM – Kick Counter)

A React Native **Android** mobile application to help pregnant women track daily fetal movements (kick count), record sessions, and view past records.

---

## 🚀 Features

- Home screen with informational article banner  
- Record fetal movement session using a **timer-based counter**
- Save session duration after completion  
- View **past records** with date and duration  
- Clean and consistent UI based on assignment screenshots  
- Built using **React Native CLI** (Android only)

---

## 🛠 Tech Stack

- **React Native (CLI)** – Core framework  
- **TypeScript** – Type safety and better code quality  
- **React Navigation** – Screen navigation  
- **AsyncStorage** – Local data persistence  
- **UUID** – Unique session ID generation  
- **react-native-vector-icons** – Icons  

---

## ▶️ How to Run the Project (Android Only)

### Prerequisites
- Node.js 
- npm or yarn
- Android Studio (Android SDK + Emulator) or a physical Android device
- Properly configured React Native CLI environment

### Steps

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
2.Install dependencies
   ```bash
   npm install
```
3 Start Metro bundler
 ```bash
npx react-native start
```
4.Run the app on Android
```bash
npx react-native run-android
```
📂 Project Structure
```bash
src/
 ├── assets/
 |    ├── LeapArticle.jpg
 │    └── Leap.png
 ├── components/
 |    ├── Info.tsx
 │    └── PastRecord.tsx
 ├── screens/
 │    ├── HomeScreen.tsx
 │    └── CounterScreen.tsx
 ├── storage/
 │    └── sessionRepository.ts
 ├── types/
 │    └── session.ts
 └── navigation/
      └── StackNavigator.tsx

📦 Data Structure (Session Record)
- Each fetal movement session is stored locally with the following structure:
  ```bash
  {
  id: string,                // UUID
  date: string,              // e.g. "Monday, 06 Jan 2026"
  durationSeconds: number,   // Session duration in seconds
  createdAt: number          // Timestamp
}

📌 Assumptions
- App is designed only for Android

- All data is stored locally (no backend)

- One session = one fetal movement recording

- User manually controls start/stop

- App is intended for MVP / assignment evaluation

- UI behavior remains consistent across all Android devices

