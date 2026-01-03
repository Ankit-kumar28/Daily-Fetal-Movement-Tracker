import React, { useEffect, useLayoutEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';

import { SessionRepository } from '../storage/sessionRepository';
import Info from '../components/Info';

const CounterScreen = () => {
  const navigation = useNavigation();

  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [running]);


  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Record DFM',
      headerTitleAlign: 'center',
      headerRight: () => (
        <TouchableOpacity
          onPress={() => setInfoVisible(true)}
          style={{ paddingRight: 12 }}
        >
          <Ionicons
            name="information-circle-outline"
            size={26}
            color="#000"
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  
  const toggleTimer = useCallback(() => {
    setRunning(prev => !prev);
  }, []);

  const saveSession = useCallback(async () => {
  const now = new Date();

  const formattedDate = now.toLocaleDateString('en-US', {
    weekday: 'long',  
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  await SessionRepository.save({
    id: uuid.v4().toString(),
    date: formattedDate,
    durationSeconds: seconds,
    createdAt: Date.now(),
  });

  navigation.goBack();
}, [seconds, navigation]);


  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <Info visible={infoVisible} onClose={() => setInfoVisible(false)} />

       
        <View style={styles.centerSection}>

          <View style={styles.messageWrapper}>
            <View style={styles.messageBubble}>
              <Text style={styles.messageText}>
                Stop recording after{'\n'}10 kicks
              </Text>
            </View>
            <View style={styles.messageTriangle} />
          </View>

          {/* Timer */}
          <View style={styles.timerOuter}>
            <View style={styles.timerLayer1}>
              <View style={styles.timerLayer2}>
                <View style={styles.timerLayer3}>
                  <Text style={styles.timerText}>
                    {minutes}:{secs}
                  </Text>
                </View>
              </View>
            </View>
          </View>

        </View>

   
        <TouchableOpacity
          style={styles.controlBtn}
          onPress={toggleTimer}
          activeOpacity={0.8}
        >
          {running ? (
            <View style={styles.stopRect} />
          ) : (
            <Ionicons name="play" size={42} color="#333" />
          )}
        </TouchableOpacity>

        <View style={styles.bottomSection}>
          <TouchableOpacity style={styles.saveBtn} onPress={saveSession}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>

          <Text style={styles.helpText}>
            What if I am not getting{'\n'}enough kicks?
          </Text>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default CounterScreen;



const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7EAF4',
  },

  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  /* -------- Center -------- */
  centerSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* Message */
  messageWrapper: {
    alignItems: 'center',
    marginBottom: 12, 
  },

  messageBubble: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 16,
  },

  messageText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000',
  },

  messageTriangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#fff',
    marginTop: -2,
  },

  
  timerOuter: {
    alignItems: 'center',
  },

  timerLayer1: {
    width: 260,
    height: 130,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  timerLayer2: {
    width: 220,
    height: 110,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  timerLayer3: {
    width: 180,
    height: 90,
    borderRadius: 45,
    backgroundColor: 'rgba(255,255,255,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  timerText: {
    fontSize: 40,
    fontWeight: '700',
    color: '#FF4D4F',
  },

  controlBtn: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
  },

  stopRect: {
    width: 36,
    height: 36,
    borderRadius: 6,
    backgroundColor: '#333',
  },


  bottomSection: {
    paddingBottom: 24,
  },

  saveBtn: {
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
  },

  saveText: {
    fontSize: 16,
    fontWeight: '600',
  },

  helpText: {
    marginTop: 24,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 18,
    fontWeight: '600',
  },
});
