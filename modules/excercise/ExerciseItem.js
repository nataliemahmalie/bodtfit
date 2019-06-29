import React from 'react'
import {Text, View, TouchableHighlight, TouchableOpacity, Image, StyleSheet} from 'react-native'
import {Actions} from 'react-native-router-flux'
import {Icon} from 'react-native-elements'
import {actions, theme} from "../index"
const { addExercise, removeExercise } = actions;
import {connect} from "react-redux";
export const {padding, color, fontSize, fontFamily } = theme;


class ExerciseItem extends React.Component {
    
    addExercise = () => {
        const {exercise} = this.props;
        this.props.addExercise(exercise)
            .then(() => alert("Exercise Added"))
            .catch((error) => alert(error.message));
    };

    removeExercise = () => {
        const {exercise} = this.props;
        this.props.removeExercise(exercise.id)
            .then(() => alert("Exercise Removed"))
            .catch((error) => alert(error.message));
    };

    render(){
        const {exercises, exercise} = this.props;
        const {id, name, images, muscles} = exercise;
        const index = exercises.findIndex((obj) => obj.id === id);
        return (
            <TouchableHighlight
                style={styles.container}
                underlayColor={"transparent"}
                onPress={() => Actions.Exercise({exercise, title:name})}>
                <View style={[styles.wrapper]}>
                    <Image source={{uri: images[0]}} style={styles.pic}/>

                    <View style={[styles.info]}>
                        <Text style={[styles.name]}> {name} </Text>

                        <View style={[styles.muscles]}>
                            {
                                muscles.map((muscle, idx) => (
                                    <Text style={[styles.muscle]} key={idx}>
                                        {muscle}
                                    </Text>
                                ))
                            }
                        </View>
                    </View>

                    <View style={[styles.accessoryView]}>
                        <TouchableOpacity
                            style={[styles.accessoryWrapper]} onPress={ (index !== -1) ? this.removeExercise : this.addExercise }
                            underlayColor={"transparent"}>
                            <Icon name={ (index !== -1) ? "md-remove" : "md-add" }
                                  type={"ionicon"}
                                  size={16}
                                  containerStyle={{ borderWidth: 1, borderColor: color.secondary, height: 17, width: 17, justifyContent: "center", alignItems: "center"  }}
                                  iconStyle={{height: 14}}
                                  color={color.secondary}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

function mapStateToProps(state) {
    return {
        exercises: state.exerciseReducer.exercises
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },

    wrapper:{
        padding: padding,
        paddingVertical: padding * 2,
        flexDirection: "row",
        backgroundColor:"white",
        borderBottomWidth:1,
        borderBottomColor:"#E9E9E9"
    },

    pic:{
        height: 100,
        width: 100,
        backgroundColor: color.light_grey,
        marginRight: padding ,
    },

    info:{
        flex:1
    },

    name:{
        fontSize: fontSize.large - 5,
        fontFamily: fontFamily.bold,
        color: color.black,
    },

    muscles:{
        flexDirection: "row",
        marginTop:padding * 2,
    },

    muscle:{
        fontSize: fontSize.small,
        fontFamily: fontFamily.bold,
        color: color.white,
        lineHeight: fontSize.small+5,
        paddingVertical: 2.5,
        paddingHorizontal: padding,
        marginRight:padding - 2,
        backgroundColor: color.secondary
    }

    
});

export default connect(mapStateToProps, {addExercise, removeExercise})(ExerciseItem);