import React from 'react';
import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';
import Swiper from "react-native-web-swiper";
import {theme} from "../index"
export const {padding, color, fontSize, fontFamily} = theme;


class Exercise extends React.Component {

    componentDidMount() {
        const {exercise} = this.props;
        this.props.title = exercise.name;
    }

    render() {
        const {exercise} = this.props;
        const {images, muscle_diagram} = exercise;


        let items = JSON.parse(JSON.stringify(images));
        items.unshift(muscle_diagram); 

        return (
            <ScrollView style={styles.scrollViewContainer}>
                <ExerciseInfo exercise={exercise}/>
                <View style={[{height: 250}]}>
                    <Swiper key={items.length}>
                        {
                            items.map((item, idx) => (
                                    <View style={[styles.slideContainer]} key={idx + "_swiper"}>
                                        <Image source={{uri: item}} style={styles.img}/>
                                    </View>
                                )
                            )
                        }
                    </Swiper>
                </View>
                <View>
                    <MusclesWorked exercise={exercise}/>
                    <Instructions exercise={exercise}/>
                </View>
            </ScrollView>
        );
    }
}


const ExerciseInfo = ({exercise}) => {
    let {name, equipment} = exercise;
    return (
        <View style={styles.section}>
            <Text style={[styles.name]}>
                {name}
            </Text>
            <Text style={[styles.equipment]}>
                Equipment:
                <Text style={[styles.equipment_l]}>
                    {" " + equipment}
                </Text>
            </Text>
        </View>
    )
};

const MusclesWorked = ({exercise}) => {
    let {muscles} = exercise;
    return (
        <View style={[styles.section, styles.topBorder]}>
            <Text style={[styles.sectionText]}>MUSCLES WORKED</Text>
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
    )
};

const Instructions = ({exercise}) => {
    let {instructions} = exercise;
    return(
        <View style={[styles.section, styles.topBorder]}>
            <Text style={[styles.sectionText]}>INSTRUCTIONS</Text>
            <View style={[{}]}>
                {
                    instructions.map((instruction, idx) => (
                        <View style={[{flex: 1}]} key={idx}>
                            <View style={{flexDirection: "row", flex: 1}}>
                                <Text style={[styles.instruction, {marginRight: padding}]}>{'\u2022'}</Text>
                                <Text style={[styles.instruction, {flex: 1}]}>{instruction + "\n"}</Text>
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
   
    scrollViewContainer: {
        flex: 1,
        backgroundColor: "#fff"
    },


    section:{
        padding: padding* 2
    },

    topBorder:{
        borderTopWidth:1,
        borderTopColor:color.grey

    },

    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    img:{
        height: 250,
        width: 250,
        backgroundColor: color.light_grey,
        marginRight: padding ,
        resizeMode:"contain"
    },

    name: {
        fontSize: fontSize.large,
        lineHeight: fontSize.large + 10,
        fontFamily: fontFamily.bold,
        color: color.black,
    },

    equipment: {
        fontSize: fontSize.regular,
        fontFamily: fontFamily.medium,
        color: color.black,
        marginTop:padding/2
    },

    equipment_l: {
        color: color.secondary,
    },

    sectionText: {
        fontSize: fontSize.regular,
        fontFamily: fontFamily.bold,
        color: color.grey,
        marginBottom:padding*1.5
    },

    muscles: {
        flexDirection: "row"
    },

    muscle: {
        fontSize: fontSize.small,
        fontFamily: fontFamily.bold,
        color: color.white,
        lineHeight: fontSize.small + 5,
        paddingVertical: 2.5,
        paddingHorizontal: padding,
        marginRight: padding - 2,
        backgroundColor: color.secondary
    },


    instruction: {
        color: color.black,
        fontSize: fontSize.regular + 1,
        lineHeight: fontSize.regular + 8,
        fontFamily: fontFamily.regular
    },

});

export default Exercise;