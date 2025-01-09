import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Account</Text>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={require('../assets/default-avatar.jpeg')} // You'll need to add a default avatar image
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
      <TouchableOpacity style={styles.menuItem}>
        <Icon name="card-outline" size={24} color="white" />
        <View style={styles.menuItemContent}>
          <Text style={styles.menuItemTitle}>Credits</Text>
          <Text style={styles.menuItemSubtitle}>Manually add credits</Text>
        </View>
        <Icon name="chevron-forward" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Icon name="logo-google" size={24} color="white" />
        <View style={styles.menuItemContent}>
          <Text style={styles.menuItemTitle}>Google Account</Text>
          <Text style={styles.menuItemSubtitle}>annicad304@gmail.com</Text>
        </View>
        <Icon name="chevron-forward" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Icon name="document-text-outline" size={24} color="white" />
        <View style={styles.menuItemContent}>
          <Text style={styles.menuItemTitle}>Plan</Text>
          <Text style={styles.menuItemSubtitle}>Basic, Free</Text>
        </View>
        <Icon name="chevron-forward" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Icon name="card-outline" size={24} color="white" />
        <View style={styles.menuItemContent}>
          <Text style={styles.menuItemTitle}>Stripe ID</Text>
          <Text style={styles.menuItemSubtitle}>dg278ewfb17d7h</Text>
        </View>
        <Icon name="chevron-forward" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Icon name="color-palette-outline" size={24} color="white" />
        <View style={styles.menuItemContent}>
          <Text style={styles.menuItemTitle}>Appearance</Text>
          <Text style={styles.menuItemSubtitle}>Default</Text>
        </View>
        <Icon name="chevron-forward" size={24} color="white" />
      </TouchableOpacity>
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
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  menuItemContent: {
    flex: 1,
    marginLeft: 12,
  },
  menuItemTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  menuItemSubtitle: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
  },
});

export default ProfileScreen;
