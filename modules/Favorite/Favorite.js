import React from 'react';
import {FlatList, View, ActivityIndicator,Text} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles'
import ExerciseItem from "../excercise/ExerciseItem"
import {actions} from "../index"

const {getFavoriteExercises, removeExercise} = actions;
const Loading = (props) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator animating={true} color={"grey"}/>
            {props.message.length > 0 && <Text style={styles.message}>{props.message}</Text>}
        </View>
    )
};


Loading.defaultProps = {
    message: ""
}

const Error = (props) => {
    const {message, onPress} = props.data;
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Ooops!</Text>
                <Text style={styles.message}>{message}</Text>

                <Button
                    raised
                    title={"TRY AGAIN"}
                    borderRadius={0}
                    containerViewStyle={styles.containerView}
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonText}
                    onPress={onPress}/>
            </View>
        </View>
    )
};


const Empty = (props) => {
    const {message, onPress} = props.data;
    return (
        <View style={[styles.container]}>
            <View style={styles.wrapper}>
                <Text style={styles.message}>{message}</Text>

            </View>
        </View>
    )
};


Empty.defaultProps = {
    onPress: null
}

class Favorite extends React.Component {
    state = {
        isFetching: true,
        hasError: false,
        errorMsg: ""
    };

    componentDidMount() {
        this.getFavoriteExercises(false);
        this.props.title = this.props.muscle
    }

    getFavoriteExercises = () => {

        this.props.getFavoriteExercises()
            .then(() => this.setState({isFetching: false, hasError: false}))
            .catch((error) => this.setState({isFetching: false, hasError: true, errorMsg: error.message}))
            
    };

    removeExercise = (exercise) => {
        this.props.removeExercise(exercise.id)
            .then(() => alert("Exercise Removed"))
    };

    renderItem = ({item, index}) => {
        const {isFetching, hasError, errorMsg} = this.state;

        if (isFetching) return <Loading/>

        if (hasError) return <Error data={{message: errorMsg, onPress: () => this.getFavoriteExercises(false)}}/>

        return <ExerciseItem exercise={item} removeExercise={this.removeExercise}/>
    };

    renderEmpty = () => (
        <Empty data={{message: "There are no exercises to show..."}}/>
    );

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
                       />
            </View>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        exercises: state.exerciseReducer.exercises
    }
}

export default connect(mapStateToProps, {getFavoriteExercises, removeExercise ,Loading, Error, Empty})(Favorite);
