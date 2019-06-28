import React from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
const {getWorkouts} = actions;
import {theme, actions} from "../index"
export const {padding, color, fontSize, fontFamily} = theme;
import styles from './styles'
import {Actions} from 'react-native-router-flux'

class Main extends React.Component {

    render() {
        const {navigate}=this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.headline}>
                    <View style={styles.row}>
                        <Text style={[styles.col, styles.headlineText]}>{"Choose a Workout"}</Text>
                        <Text style={[styles.instructions]}>Choose a category below to see a list of exercises available.chest,arms,abs and legs.</Text>
                    </View>
                </View>
                <View style={[styles.musclesContainer]}>
                <View style={[styles.col]}>
                    <View style={[styles.row, {flexDirection: "row"}]}>
                        <TouchableHighlight onPress={() => navigate('Exercises', Actions.Exercises({muscle: 'Chest', title:'Chest'}))}>
                            <Image
                                style={styles.img}
                                source={require('../../images/chest.jpg')}
                            />
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => navigate('Exercises', Actions.Exercises({muscle: 'Arms', title:'Arms'}))}>
                            <Image
                                style={styles.img}
                                source={require('../../images/arms.jpg')}
                            />
                        </TouchableHighlight>
                    </View>
                    <View style={[styles.row, {flexDirection: "row",justifyContent:'space-between'}]}>
           <TouchableHighlight onPress={() => navigate('Exercises', Actions.Exercises({muscle: 'Abs', title:'Abs'}))}>
                            <Image
                                style={styles.img}
                                source={require('../../images/abs.jpg')}
                            />
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => navigate('Exercises', Actions.Exercises({muscle: 'Legs', title:'Legs'}))}>
                            <Image
                                style={styles.img}
                                source={require('../../images/legs.jpg')}
                            />
                        </TouchableHighlight>
                    </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default connect(null, {getWorkouts})(Main);