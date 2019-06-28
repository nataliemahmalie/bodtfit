import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {Button} from 'react-native-elements'
import {theme} from "../index"

export const {color, fontFamily, fontSize, padding, windowHeight, navbarHeight} = theme;

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

                <Button
                    raised
                    title={"Refresh"}
                    borderRadius={0}
                    containerViewStyle={styles.containerView}
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonText}
                    onPress={onPress}/>
            </View>
        </View>
    )
};


Empty.defaultProps = {
    onPress: null
}

const styles = {
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        height: windowHeight - navbarHeight,
        backgroundColor: color.white,
    },

    message: {
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

export {Loading, Error, Empty};