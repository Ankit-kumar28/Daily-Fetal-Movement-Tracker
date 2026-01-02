import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


const PastRecords = ({ records }: any) => {
  if (!records.length) {
    return <Text style={styles.empty}>No records yet</Text>;
  }
  const formatTime = (totalSeconds: number) => {
  if (totalSeconds < 60) {
    return `${totalSeconds} sec`;
  }

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return seconds === 0
    ? `${minutes} min`
    : `${minutes} min ${seconds} sec`;
};


  return (
    <FlatList
      data={records}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item.date}</Text>
          <Text>{formatTime(item.durationSeconds)}</Text>
        </View>
      )}
    />
  );
};


export default PastRecords;


const styles = StyleSheet.create({
  item: {
    backgroundColor: 'rgba(239, 239, 239, 1)',
    padding: 14,
    borderRadius: 10,
    borderWidth:1,
    borderColor:"#d3cdcdff",
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  empty: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  },
});
