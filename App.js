/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    Text
} from 'react-native';

import Auth from './src/routers/route';

class App extends React.Component {
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <StatusBar barStyle="dark-content"/>
                    <Auth/>
            </SafeAreaView>
        );
    }
}

export default App;
