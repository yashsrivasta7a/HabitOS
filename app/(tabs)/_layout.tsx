import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'tomato' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="home" size={24} color="tomato" />
            ) : (
              <Ionicons name="home-outline" size={24} color="tomato" />
            ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="settings" size={24} color="tomato" />
            ) : (
              <Ionicons name="settings-outline" size={24} color="tomato" />
            ),
        }}
      />
    </Tabs>
  );
}
