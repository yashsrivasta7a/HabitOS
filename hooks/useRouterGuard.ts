import { useAuth } from '@clerk/clerk-expo';
import { useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';

export function useRouterGuard() {
    const { isLoaded, isSignedIn } = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        if (!isLoaded) return;

        const inAuthGroup = segments[0] === '(auth)';

        if (isSignedIn && inAuthGroup) {
            router.replace('/(tabs)');
        } else if (!isSignedIn && !inAuthGroup) {
            router.replace('/(auth)/login');
        }
    }, [isSignedIn, segments, isLoaded]);
}
