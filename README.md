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

## 📚 Libraries & Technologies Used
# Core Framework

react-native – Core framework for building native Android apps using JavaScript and React

 # Navigation

- @react-navigation/native – Navigation container and routing

- @react-navigation/native-stack – Native stack-based navigation

- react-native-screens – Improves performance by using native navigation primitives

- react-native-safe-area-context – Handles safe area insets for different devices

#  UI & UX

- react-native-vector-icons – Icon library (Ionicons, MaterialIcons)

- @react-native-community/blur – Blur effects for modals and overlays

- react-native-linear-gradient – Gradient backgrounds and overlays


- react-native-gesture-handler – Gesture handling for navigation and interactions

#  Storage & Data Handling

- @react-native-async-storage/async-storage – Local persistent storage

- react-native-uuid – Unique ID generation for sessions



## ▶️ How to Run the Project (Android Only)

### Prerequisites
- Node.js 
- npm 
- Android Studio (Android SDK + Emulator) or a physical Android device
- Properly configured React Native CLI environment

### Steps

1. Clone the repository:
   ```bash
   git clone <https://github.com/Ankit-kumar28/Daily-Fetal-Movement-Tracker.git>
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
```
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

