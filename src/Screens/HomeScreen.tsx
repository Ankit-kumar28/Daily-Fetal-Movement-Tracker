import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/Ionicons";

import Header from '../components/Header';
import PastRecords from '../components/PastRecord';
import { SessionRepository } from '../storage/sessionRepository';
import { FetalSession } from '../types/session';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [sessions, setSessions] = useState<FetalSession[]>([]);

  useFocusEffect(
    useCallback(() => {
      SessionRepository.getAll().then(setSessions);
    }, [])
  );

  return (
    <View style={styles.container}>
      
      <Header title="DFM (Kick counter)" />

      <ImageBackground
        source={require('../assets/LeapArticle.jpg')}
        style={styles.imageCard}
        imageStyle={styles.imageRadius}
      >
        <LinearGradient
        colors={[ 'rgba(238, 233, 233, 0.95)',
           'rgba(108, 105, 105, 0.26)',
           'rgba(52, 49, 49, 1)', 
            ]}
          locations={[0, 0.5, 1]}
          style={styles.gradient}
        />

        <View style={styles.topRow}>
          <View style={styles.leapRow}>
            <Image
              source={require('../assets/leap.png')}
              style={styles.leapImage}
              resizeMode="contain"
            />
            <Text style={styles.leapText}>Articles</Text>
          </View>

          <TouchableOpacity style={styles.saveBtn} activeOpacity={0.7}>
            <Icon name="bookmark-outline" size={16} color="#000" />
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomText}>
          <Text style={styles.cardTitle}>DFM (fetal movement)</Text>
        </View>
      </ImageBackground>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Counter' as never)}
      >
      <Text style={styles.buttonText}>Record fetal movement</Text>
      </TouchableOpacity>

      <Text style={styles.section}>Past records</Text>
      <PastRecords records={sessions} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  imageCard: {
    height: 180,
    marginVertical: 18,
    justifyContent: 'space-between',
    borderRadius: 18,
    elevation: 8,
    backgroundColor: "#000",
  },
  imageRadius: {
    borderRadius: 18,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 18,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    alignItems: 'center',
  },
  leapRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  leapImage: {
    width: 60,
    height: 60,
  },
  leapText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000ff', 
  },
  saveBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  saveText: {
    marginLeft: 6,
    fontSize: 13,
    fontWeight: '600',
    color: '#000',
  },
  bottomText: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  button: {
    borderWidth: 1,
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: 'center',
    marginHorizontal: 12,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
  },

  section: {
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 10,
  },
});
