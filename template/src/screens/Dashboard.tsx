import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const optionsPerPage = [2, 3, 4];

const Dashboard = () => {

  useEffect(() => {
    //TODO: Do something
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>DASHBOARD - HOME</Text>
      </View>
    </SafeAreaView>
      
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default Dashboard;
