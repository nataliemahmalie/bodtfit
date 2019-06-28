import React from 'react';
import {FlatList, Text, View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import ExerciseItem from "./ExerciseItem"
import { actions, theme } from "../index"
const { getExercises } = actions;
export const {color, fontFamily, fontSize, padding, windowHeight, navbarHeight} = theme;


class Exercises extends React.Component {
    state = {
        isFetching: true,
        exercises: [],
        errorMsg: ""
    };

    componentDidMount() {
        this.getExercises(false);
    }

    getExercises = () => {
        const muscle = this.props.muscle;

        this.props.getExercises(muscle)
            .then((exercises) => this.setState({isFetching:false, exercises}))
            .catch((error) => this.setState({isFetching:false, errorMsg:error.message}));
    };

    renderItem = ({item, index}) => {
        const {isFetching} = this.state;

        if (isFetching) return (
            <View style={styles.container}>
                <ActivityIndicator animating={true} color={"grey"}/>
                {item.length > 0 && <Text style={styles.item}>{ item }</Text>}
            </View>
        )




        return <ExerciseItem exercise={item} idx={index.toString() + "_exerciseItem"}/>
    };



    render() {
        const {exercises, isFetching} = this.state;
        return (
            <FlatList
                style={{backgroundColor: '#eaeaea'}}
                ref='listRef'
                data={(isFetching) ? [{id: 0}] : exercises}
                renderItem={this.renderItem}
                initialNumToRender={5}
                keyExtractor={(item, index) => index.toString() + "_exercise"}
                />
        );
    }
}

const styles = {
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        height: windowHeight - navbarHeight,
        backgroundColor: color.white,
    },

    item: {
        fontFamily: fontFamily.medium,
        fontSize: fontSize.regular,
        lineHeight: fontSize.regular + 4,
        color: color.black,
        marginVertical: padding
    },

    wrapper:{
        paddingHorizontal:15,
        paddingBottom: padding * 2,
        justifyContent:"center",
        alignItems:"center"
    },

    title: {
        fontFamily: fontFamily.bold,
        fontSize: fontSize.large,
        color: color.white,
    },
};

export default connect(null, { getExercises })(Exercises);

