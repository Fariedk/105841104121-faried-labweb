import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'

const signUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignUp = () => {
      // Implement sign up logic here
      console.log('Sign up clicked');
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
  
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
  
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
  
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
  
        <Button title="Sign Up" style={styles.button} onPress={handleSignUp} />
  
        <Text style={styles.loginText}>Already have an account? <Text style={styles.loginLink}>Log In</Text></Text>
  
        <View style={styles.socialButtons}>
          <Button title="Google" style={styles.socialButton} />
          <Button title="Facebook" style={styles.socialButton} />
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 10,
    },
    button: {
      width: '100%',
      padding: 10,
      backgroundColor: '#007bff',
      color: '#fff',
    },
    loginText: {
      marginTop: 20,
    },
    loginLink: {
      color: '#007bff',
    },
    socialButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    socialButton: {
      width: '48%',
      padding: 10,
      backgroundColor: '#ccc',
    },
  });
  
  export default signUp;