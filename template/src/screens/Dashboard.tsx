import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const Dashboard = () => {
  useEffect(() => {
    //TODO: Do something
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text>DASHBOARD - HOME</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {flex: 1},
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default Dashboard;
