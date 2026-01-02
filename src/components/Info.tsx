import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';
import Icon from 'react-native-vector-icons/Ionicons';

const StepsModal = ({ visible, onClose }: any) => {

  const steps = [
    <>
      Choose a <Text style={styles.bold}>time </Text> when you are <Text style={styles.bold}>least distracted </Text>or when you typically <Text style={styles.bold}>feel the fetus move.</Text>
    </>,
    <>
      Get <Text style={styles.bold}>comfortable</Text>. Lie on your <Text style={styles.bold}>left side</Text> or sit with your feet propped up.
    </>,
    <>
      Place your <Text style={styles.bold}>hands on your belly</Text>.
    </>,
    <>
      <Text style={styles.bold}>Start a timer</Text> or watch the clock.
    </>,
    <>
      <Text style={styles.bold}>Count </Text>each kick. Keep counting until you get to{' '}
      <Text style={styles.bold}>10 kicks / flutters / swishes / rolls</Text>.
    </>,
    <>
      Once you reach <Text style={styles.bold}>10 kicks</Text>, jot down how many{' '}
      <Text style={styles.bold}>minutes</Text> it took.
    </>,
  ];

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.container}>

        <BlurView
          style={StyleSheet.absoluteFill}
          blurType="dark"
          blurAmount={2}
          reducedTransparencyFallbackColor="rgba(99,95,95,0.3)"
        />

        <View style={styles.bigBox}>

          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Icon name="close" size={28} color="#111" />
          </TouchableOpacity>

          <View style={styles.wrapper}>
          
            <View style={styles.headerCard}>
              <Icon name="footsteps-outline" size={20} />
              <Text style={styles.headerText}>
                Steps to count fetal kicks
              </Text>
            </View>

            <View style={styles.contentCard}>
              <ScrollView showsVerticalScrollIndicator={false}>
                {steps.map((step, index) => (
                  <View
                    key={index}
                    style={[
                      styles.stepRow,
                      index % 2 === 1 && styles.altRow,
                    ]}
                  >
                    <Text style={styles.stepText}>
                      <Text style={styles.stepNo}>{index + 1}. </Text>
                      {step}
                    </Text>
                  </View>
                ))}
              </ScrollView>
            </View>

          </View>
        </View>
      </View>
    </Modal>
  );
};

export default StepsModal;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bigBox: {
    width: '90%',
    maxHeight: '85%',
    paddingTop: 65, 
  },

  closeBtn: {
    position: 'absolute',
    top: 5,
    right: 10,
    width: 56,
    height: 56,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.55)',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.9)',
  },

  wrapper: {
    borderRadius: 18,
    borderColor: '#ffffffc6',
    borderWidth: 2,
    backgroundColor:"#978d8d97",
    padding:2,
  },

  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#dcdcdc',
    marginBottom: 8,
  },

  headerText: {
    fontSize: 18,
    fontWeight: '700',
  },

  contentCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#dcdcdc',
    overflow: 'hidden',
  },

  stepRow: {
    padding: 14,
  },

  altRow: {
    backgroundColor: '#f5f5f5',
  },

  stepText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },

  stepNo: {
    fontWeight: '700',
  },

  bold: {
    fontWeight: '700',
  },
});
