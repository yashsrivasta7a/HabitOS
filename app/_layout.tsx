import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { Stack } from 'expo-router';
import { useRouterGuard } from '../hooks/useRouterGuard';

function RootNavigator() {
    const { isLoaded } = useAuth();
    useRouterGuard();

    if (!isLoaded) return null;

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="+not-found" />
        </Stack>
    );
}

export default function RootLayout() {
    return (
        <ClerkProvider>
            <RootNavigator />
        </ClerkProvider>
    );
}