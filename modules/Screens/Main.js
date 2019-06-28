import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
const { getExercises } = actions;
import { theme, actions } from "../index"
export const { padding, color, fontSize, fontFamily } = theme;
import { Actions } from 'react-native-router-flux'
import styles from './styles'

class Main extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={{marginVertical: padding * 3}}>
                    <View style={{marginHorizontal: 50}}>
                        <Text style={[styles.instructions]}>Choose a category below to see a list of exercises available.chest,arms,abs and legs.</Text>
                    </View>
                </View>
                <View style={[styles.options]}>
                    <View style={{flexDirection: "row"}}>
                        <TouchableHighlight 
                            onPress={() => navigate('Exercises', Actions.Exercises({muscle: 'Chest', title:'Chest'}))}
                        >    
                            <Image
                                style={styles.pic}
                                source={require('../../images/chest.jpg')}
                            />
                        </TouchableHighlight>
                        <TouchableHighlight 
                            onPress={() => navigate('Exercises', Actions.Exercises({muscle: 'Arms', title:'Arms'}))}
                            >
                            <Image
                                style={styles.pic}
                                source={require('../../images/Arms.jpg')}
                            />
                        </TouchableHighlight>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <TouchableHighlight 
                            onPress={() => navigate('Exercises', Actions.Exercises({muscle: 'Abs', title:'Abs'}))}
                            >
                            <Image
                                style={styles.pic}
                                source={require('../../images/abs.jpg')}
                            />
                        </TouchableHighlight>
                        <TouchableHighlight 
                            onPress={() => navigate('Exercises', Actions.Exercises({muscle: 'Legs', title:'Legs'}))}
                            >
                            <Image
                                style={styles.pic}
                                source={require('../../images/legs.jpg')}
                            />
                        </TouchableHighlight>
                    </View>
                </View>
                </View>
        );
    }
}



export default connect(null, {getExercises})(Main);