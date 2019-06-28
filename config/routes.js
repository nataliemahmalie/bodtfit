

import React from 'react';
import {Scene, Router, Stack, Tabs} from 'react-native-router-flux';
import TabIcon from '../modules/components/TabIcon'
import BMI from '../modules/Screens/BMI'
import Main from '../modules/Screens/Main'
import Exercises from '../modules/Screens/Exercises'
import Exercise from '../modules/Screens/Exercise'
import Selected from '../modules/Screens/Selected'

import {color, navTitleStyle, tabIconStyle, navigationBarStyle, fontFamily} from "../config/theme";
import {StatusBar} from "react-native";

const HomeIcon = {...tabIconStyle, type: "font-awesome", name: "home", size: 30, iconSize: 30};
const SelectedIcon = {...tabIconStyle, type: "ionicon", name: "md-basket", size: 30, iconSize: 30, showBadge: true};

export default class extends React.Component {
    componentDidMount() {
        StatusBar.setBarStyle('light-content', true)
    }

    render() {
        let tabProps = {
            showLabel: false,
            swipeEnabled: false,
            animationEnabled: false,
            tabBarPosition: 'bottom',
            titleStyle: navTitleStyle,
            navBarButtonColor: color.white,
            tabBarStyle: {backgroundColor: color.main, borderTopWidth: 0},
            navigationBarStyle
        };

        let logoStyle = {color: color.secondary, fontSize:19};

        return (
            <Router>
                <Stack key="root" hideNavBar={true} titleStyle={navTitleStyle} >
                <Scene key="BMI" component={BMI}/>
                    <Tabs key="Main" tabs lazy {...tabProps}>
                        <Stack key="ExerciseTab" icon={TabIcon} iconInfo={HomeIcon}>
                            <Scene key="Main" component={Main} title="bodyFit" initial titleStyle={[navTitleStyle, logoStyle]}/>
                            <Scene key="Exercises" component={Exercises}  back/>
                            <Scene key="Exercise" component={Exercise} back />
                        </Stack>
                        <Stack key="SelectedTab" icon={TabIcon} iconInfo={SelectedIcon}>
                            <Scene key="Selected" component={Selected} title="Exercise List"/>
                        </Stack>
                    </Tabs>
                </Stack>
            </Router>
        )
    }
}