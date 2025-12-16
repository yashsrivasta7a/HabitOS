import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'tomato' }}>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ focused }) => (focused ? <Ionicons name="home" size={24} color="tomato" /> : <Ionicons name="home-outline" size={24} color="tomato" />) }} />
      <Tabs.Screen name="login" options={{ title: 'Login', tabBarIcon: ({ focused }) => (focused ? <Ionicons name='log-in' size={24} color='tomato' /> : <Ionicons name='log-in-outline' size={24} color='tomato' />) }} />
      <Tabs.Screen name="settings" options={{ title: 'settings', tabBarIcon: ({ focused }) => (focused ? <Ionicons name='settings' size={24} color='tomato' /> : <Ionicons name='settings-outline' size={24} color='tomato' />) }} />
    </Tabs>
  );
}
