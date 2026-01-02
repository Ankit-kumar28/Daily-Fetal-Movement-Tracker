import React, { useEffect, useState,useLayoutEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SessionRepository } from '../storage/sessionRepository';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';
import Info from '../components/Info';

const CounterScreen = () => {
  const navigation = useNavigation();
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
 const [infoVisible, setInfoVisible] = useState(false);

  useEffect(() => {
    let timer: any;
    if (running) {
      timer = setInterval(() => setSeconds(s => s + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  useLayoutEffect(() => {
  navigation.setOptions({
    title: 'Record DFM',
    headerTitleAlign: 'center',
    
    headerRight: () => (
      <TouchableOpacity onPress={() => setInfoVisible(true)}>
        <Ionicons name="information-circle-outline" size={28} color="#000" />
      </TouchableOpacity>
    ),
  });
}, [navigation]);

  const save = async () => {
  await SessionRepository.save({
    id: uuid.v4().toString(),
    date: new Date().toDateString(),
    durationSeconds: seconds, 
    createdAt: Date.now(),
  });
  navigation.goBack();
};

  return (
    <View style={styles.container}>

      <Info
  visible={infoVisible}
  onClose={() => setInfoVisible(false)}
/>

<View style={styles.messageWrapper}>
  <View style={styles.messageBubble}>
    <Text style={styles.messageText}>
      Stop recording after{'\n'}10 kicks
    </Text>
  </View>

  <View style={styles.messageTriangle} />
</View>

     <View style={styles.timerWrapper}>
<View style={styles.timerOuter}>
  <View style={styles.timerLayer1}>
    <View style={styles.timerLayer2}>
      <View style={styles.timerLayer3}>
        <Text style={styles.timerText}>
          {String(Math.floor(seconds / 60)).padStart(2, '0')}:
          {String(seconds % 60).padStart(2, '0')}
        </Text>
      </View>
    </View>
  </View>
</View>
</View>

<TouchableOpacity
  style={styles.controlBtn}
  onPress={() => setRunning(!running)}
  activeOpacity={0.8}
>
  {running ? (
    <View style={styles.startRect} />
    // <MaterialIcons name="rectangle" size={50} color="#333" />
  ) : (
     <Ionicons name="play" size={50} color="#333" />
  )}
</TouchableOpacity>


      <TouchableOpacity style={styles.saveBtn} onPress={save}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>

      <Text style={styles.helpText}>
        What if I am not getting{'\n'}enough kicks?
      </Text>

    
    </View>
  );
};

export default CounterScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7EAF4',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },

  messageWrapper: {
  alignItems: 'center',
  marginTop: 120,
},

messageTriangle: {
  width: 0,
  height: 0,
  borderLeftWidth: 15,
  borderRightWidth: 15,
  borderTopWidth: 12,
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
  borderTopColor: '#fff', 
  marginTop: -1,
},

  messageBubble: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    paddingHorizontal: 25,
    paddingVertical: 16,
    borderRadius: 16,
   
  },

  messageText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '700',
  },

timerWrapper: {
  marginTop:10,
  alignItems: 'center',
  justifyContent: 'center',
},

timerOuter: {
  width: 220,
  height: 120,
  borderRadius: 60,
  alignItems: 'center',
  justifyContent: 'center',
},

timerLayer1: {
  width: 260,
  height: 130,
  borderRadius: 65,
   borderWidth:3,
  borderColor:"#ffffffff",
  justifyContent: 'center',
  alignItems: 'center',
},


timerLayer2: {
  width: 220,
  height: 110,
   borderWidth:4,
  borderColor:"#ffffffff",
  borderRadius: 55,
  justifyContent: 'center',
  alignItems: 'center',
},

timerLayer3: {
  width: 180,
  height: 90,
  borderWidth:4,
  borderColor:"#ffffffff",
  borderRadius: 45,
  backgroundColor: 'rgba(255, 255, 255, 0.46)',
  justifyContent: 'center',
  alignItems: 'center',
},

timerText: {
  fontSize: 40,
  fontWeight: '700',
  color: '#FF4D4F',
},


controlBtn: {
  width: 75,
  height: 75,
  borderRadius: 36,
  backgroundColor: '#FFFFFF',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  marginTop: 100, 
  },

startRect: {
  width: 40,
  height: 40,
  borderRadius: 6, 
  backgroundColor: '#333',
},

  saveBtn: {
  marginTop: 'auto',   
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
  marginTop: 28,      
  marginBottom: 52,   
  textAlign: 'center',
  textDecorationLine: 'underline',
  fontWeight: '600',
  fontSize: 20,
},

});
