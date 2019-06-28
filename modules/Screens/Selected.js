import React from 'react';
import {FlatList, View, RefreshControl, ActivityIndicator,Text,item} from 'react-native';
import {Button} from 'react-native-elements'
import {connect} from 'react-redux';
import ExerciseItem from "../components/ExerciseItem"
import {actions} from "../index"
const {getSelectedExercises, removeExercise} = actions;
import styles from './styles'
import {Loading, Error, Empty} from "../components/SharedComponents"

class SelectedExercises extends React.Component {

    state = {
        refreshing: false,
        isFetching: true,
        hasError: false,
        errorMsg: ""
    };

    componentDidMount() {
        this.getSelectedExercises(false);
        this.props.title = this.props.muscle
    }

    getSelectedExercises = (refreshing = true) => {
        this.setState({refreshing});

        this.props.getSelectedExercises()
            .then(() => this.setState({isFetching: false, hasError: false}))
            .catch((error) => this.setState({isFetching: false, hasError: true, errorMsg: error.message}))
            .finally(() => this.setState({refreshing: false}));
    };

    removeExercise = (exercise) => {
        this.props.removeExercise(exercise.id)
            .then(() => alert("Exercise Removed"))
    };

    renderItem = ({item, index}) => {
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

        return <ExerciseItem exercise={item} removeExercise={this.removeExercise}/>
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
        const {isFetching, hasError} = this.state;
        const {exercises} = this.props;

        return (
            <View>
                <FlatList
                    style={{backgroundColor: '#eaeaea'}}
                    contentContainerStyle={{}}
                    ref='listRef'
                    data={(isFetching || hasError) ? [{id: 0}] : exercises}
                    extraData={this.state}
                    renderItem={this.renderItem}
                    ListEmptyComponent={this.renderEmpty}
                    initialNumToRender={5}
                    keyExtractor={(item, index) => index.toString() + "_selected"}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.getSelectedExercises}
                        />
                    }/>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        exercises: state.exerciseReducer.exercises
    }
}



export default connect(mapStateToProps, {getSelectedExercises, removeExercise})(SelectedExercises);