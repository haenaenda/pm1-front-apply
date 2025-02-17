import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {ImageStyle, Linking, StyleSheet} from 'react-native';
import {Button, Flex, Image, Text, View} from 'native-base';

const ApplyScreen = () => {
  const url =
    'https://haenaenda.notion.site/198ff2ad0f2d801fa2b5f4dc62018259';
  const encodeUrl = encodeURI(url);
  const handlePress = (_url: string) => async () => {
    Linking.openURL(_url);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={[]}>
        <LinearGradient
          colors={['#D8CBFF', 'white']}
          style={styles.linearGradient}>
          <Flex style={styles.contentContainer}>
            <Image
              alt="task"
              source={require('@assets/task.png')}
              style={styles.image as ImageStyle}
              marginBottom="20px"
            />
            <Button
              style={styles.button}
              backgroundColor={'primary.500'}
              onPress={handlePress(encodeUrl)}>
              <Text style={styles.buttonText}>{'확인하기'}</Text>
            </Button>
          </Flex>
          <View style={styles.logoContainer}>
            <Image
              alt="logo"
              source={require('@assets/logo.png')}
              style={styles.logo as ImageStyle}
            />
          </View>
        </LinearGradient>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export const styles = StyleSheet.create({
  image: {
    width: 204,
    height: 228,
  },
  button: {
    width: '100%',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
    color: 'white',
  },
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 37,
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 115,
    height: 25,
    marginBottom: 40,
    resizeMode: 'contain',
  },
});

export default ApplyScreen;
