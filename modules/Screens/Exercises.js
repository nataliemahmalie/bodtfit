import React from 'react';
import {FlatList, RefreshControl, Text, View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import ExerciseItem from "../components/ExerciseItem"
//import { Error, Empty } from "../components/SharedComponents"
import { actions, theme } from "../index"
import {Button} from 'react-native-elements'
const { getExercises } = actions;
export const {color, fontFamily, fontSize, padding, windowHeight, navbarHeight} = theme;


class Exercises extends React.Component {
    state = {
        refreshing: false,
        isFetching: true,
        exercises: [],
        hasError: false,
        errorMsg: ""
    };

    componentDidMount() {
        this.getExercises(false);
    }

    getExercises = (refreshing = true) => {
        this.setState({refreshing});

        let muscle = this.props.muscle;

        this.props.getExercises(muscle)
            .then((exercises) => this.setState({isFetching:false, exercises, hasError:false}))
            .catch((error) => this.setState({isFetching:false, hasError:true, errorMsg:error.message}))
            .finally(() => this.setState({refreshing: false}));
    };

    renderItem = ({item, index}, props) => {
        const {isFetching, hasError, errorMsg} = this.state;

        if (isFetching) return (
            <View style={styles.container}>
                <ActivityIndicator animating={true} color={"grey"}/>
                {item.length > 0 && <Text style={styles.item}>{ item }</Text>}
            </View>
        )


        if (hasError) return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Ooops!</Text>
                    <Text style={styles.item}>{ item }</Text>
    
                    <Button
                        raised
                        title={"TRY AGAIN"}
                        borderRadius={0}
                        containerViewStyle={styles.containerView}
                        buttonStyle={styles.button}
                        titleStyle={styles.buttonText}
                        onPress={props.onPress}
                    />
                </View>
            </View>
        )


        return <ExerciseItem exercise={item} idx={index.toString() + "_exerciseItem"}/>
    };

    renderEmpty = () => {
        return (
            <View style={[styles.container]}>
                <View style={styles.wrapper}>
                    <Text style={styles.item}>{item}</Text>
    
                    <Button
                        raised
                        title={"Refresh"}
                        borderRadius={0}
                        containerViewStyle={styles.containerView}
                        buttonStyle={styles.button}
                        titleStyle={styles.buttonText}
                        onPress={props.onPress}/>
                </View>
            </View>
        )
    }

    render() {
        const {exercises, isFetching, hasError} = this.state;
        return (
            <FlatList
                style={{backgroundColor: '#eaeaea'}}
                contentContainerStyle={{}}
                ref='listRef'
                data={(isFetching || hasError) ? [{id: 0}] : exercises}
                extraData={this.state}
                renderItem={this.renderItem}
                ListEmptyComponent={this.renderEmpty}
                initialNumToRender={5}
                keyExtractor={(item, index) => index.toString() + "_exercise"}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.getExercises}
                    />
                }/>
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

    containerView:{
        marginVertical: padding * 2,
        width: 140
    },

    button:{
        backgroundColor: color.main,
        height: 35,
    },

    buttonText:{
        fontSize: fontSize.small,
        fontFamily: fontFamily.medium,
        color: color.white,
    }
};

export default connect(null, { getExercises })(Exercises);

