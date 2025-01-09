import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MenuItem from '../components/MenuItem';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Account</Text>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={require('../assets/default-avatar.jpeg')}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.nameText}>Levin Sanchez</Text>
          <View style={styles.creditsContainer}>
            <Icon name="card-outline" size={20} color="white" />
            <Text style={styles.creditsText}>153 credits</Text>
          </View>
        </View>
      </View>

      {/* Menu Items */}
      <MenuItem
        icon="card-outline"
        title="Credits"
        subtitle="Manually add credits"
      />
      <MenuItem
        icon="logo-google"
        title="Google Account"
        subtitle="annicad304@gmail.com"
      />
      <MenuItem
        icon="document-text-outline"
        title="Plan"
        subtitle="Basic, Free"
      />
      <MenuItem
        icon="card-outline"
        title="Stripe ID"
        subtitle="dg278ewfb17d7h"
      />
      <MenuItem
        icon="color-palette-outline"
        title="Appearance"
        subtitle="Default"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1BE8',
    padding: 16,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 24,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  creditsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  creditsText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default ProfileScreen;
