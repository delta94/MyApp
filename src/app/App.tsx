import React, { Fragment, FunctionComponent, useState } from 'react';
import {
    View,
    Text,
} from 'react-native';
//
import {StatusBarComponent} from '../components/StatusBarComponent'
//
import { AppNavigator } from '../navigation/AppNavigator';
//
export default function App() {
    return (
        <Fragment>
            <StatusBarComponent />
            <AppNavigator />
        </Fragment>
    )
}