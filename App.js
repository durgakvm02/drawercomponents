import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Assuming you're using Expo
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

// Home screen component
const HomeScreen = () => {
  return (
     <View>
      <Text>This is the home screen</Text>
    </View>
  );
};

const DrawerContent = ({ userName, ...props }) => {
  const navigation = useNavigation(); // Initialize navigation

  const handleLogout = () => {
    // Implement logout functionality here
    console.log('Logout');
  };

  const handlePrivacyPolicy = () => {
    // Navigate to Privacy Policy screen or implement the logic
    console.log('Navigate to Privacy Policy');
  };

  const handleTermsOfUse = () => {
    // Navigate to Terms of Use screen or implement the logic
    console.log('Navigate to Terms of Use');
  };

  const handleSupport = () => {
    // Navigate to Support screen or implement the logic
    console.log('Navigate to Support');
  };

  const handleReportBug = () => {
    // Navigate to Report Bug screen or implement the logic
    console.log('Navigate to Report Bug');
  };

  const renderArrowComponent = () => {
    return (
      <FontAwesome name="angle-right" size={20} color="black" />
    );
  };

  return (
    <View style={styles.drawerContainer}>
      {/* User's name */}
      <View style={styles.userInfoContainer}>
        <FontAwesome name="user-circle" size={50} color="black" style={styles.profileIcon} />
        <View style={styles.userNameContainer}>
          <Text style={styles.userName}>{userName}</Text>
          <TouchableWithoutFeedback onPress={() => console.log('Edit profile')}>
            <FontAwesome name="edit" size={20} color="black" style={styles.editIcon} />
          </TouchableWithoutFeedback>
        </View>
      </View>

      {/* Drawer items */}
      <DrawerItemList
        {...props}
        renderIcon={({ focused, color, size }) => (
          <FontAwesome name="angle-right" size={size} color={color} />
        )}
        renderLabel={({ focused, color, label }) => (
          <Text style={[styles.drawerItemText, { color: focused ? color : 'black' }]}>{label}</Text>
        )}
      />

      {/* Custom drawer items */}
      <View>
        <Text style={styles.subtitle}>About</Text>
        <TouchableWithoutFeedback onPress={handlePrivacyPolicy}>
          <View style={styles.drawerItem}>
            <FontAwesome name="lock" size={20} color="black" style={styles.drawerItemIcon} />
            <Text style={styles.drawerItemText}>Privacy Policy</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleTermsOfUse}>
          <View style={styles.drawerItem}>
            <FontAwesome name="book" size={20} color="black" style={styles.drawerItemIcon} />
            <Text style={styles.drawerItemText}>Terms of Use</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View>
        <Text style={styles.subtitle}>App</Text>
        <TouchableWithoutFeedback onPress={handleSupport}>
          <View style={styles.drawerItem}>
            <FontAwesome name="question-circle" size={20} color="black" style={styles.drawerItemIcon} />
            <Text style={styles.drawerItemText}>Support</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleReportBug}>
          <View style={styles.drawerItem}>
            <FontAwesome name="bug" size={20} color="black" style={styles.drawerItemIcon} />
            <Text style={styles.drawerItemText}>Report a Bug</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.drawerItem}>
          <FontAwesome name="info-circle" size={20} color="black" style={styles.drawerItemIcon} />
          <Text style={styles.drawerItemText}>App Version: 1.0.0</Text>
        </View>
      </View>

      <View>
        <TouchableWithoutFeedback onPress={handleLogout}>
          <View style={[styles.drawerItem, styles.logoutButton]}>
            <FontAwesome name="sign-out" size={20} color="red" style={styles.drawerItemIcon} />
            <Text style={[styles.drawerItemText, { color: 'red' }]}>Logout</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: 'light gray',
    paddingTop: 40,
    paddingHorizontal: 20,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden', // Ensure contents are clipped if drawer is rounded
    
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileIcon: {
    marginRight: 10,
  },
  userNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  editIcon: {
    marginLeft: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Adjusted justifyContent to align items to the left
    paddingVertical: 10,
  },
  drawerItemIcon: {
    marginRight: 10,
  },
  drawerItemText: {
    fontSize: 16,
  },
});

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} userName="Dora" />} initialRouteName="HomeScreen">
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
