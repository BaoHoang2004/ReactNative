import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AppNavigation from './src/app/AppNavigation';
import { AppProvider } from './src/app/AppContext';
import Payment from './src/app/main/stacks/Payment';
import { Provider } from 'react-redux';
import { store } from './src/app/store/store';


function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <AppProvider>
        <AppNavigation />
      </AppProvider>
    </Provider>
    // <View><Demo/></View>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
