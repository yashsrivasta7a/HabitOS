import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const settings = () => {
    const [username, setUsername] = useState('');
    const [randomRepo, setRandomRepo] = useState('');

    const fetchRepo =()=>{
console.log(username);

    }

    return (
        <View style={styles.container}>
            <Text>Settings</Text>
            <TextInput style={styles.input} placeholder='Enter your username' value={username} onChangeText={setUsername} />
            <Button title='Fetch Repo' onPress={() => fetchRepo()}>
                <Text>Random Repo:</Text>
            </Button>
        </View>
    )
}

export default settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderBlockColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 25,
        width: '50%',
        textAlign: 'center'
    }
})