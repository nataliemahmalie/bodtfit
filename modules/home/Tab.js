import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {fontFamily, fontSize, color} from "../../config/theme"
import {connect} from "react-redux";

class Tab extends React.Component {
    render() {
        const {iconInfo, focused, exercises} = this.props;
        const {type, name, title, size, color, selected, style, iconSize, showBadge} = iconInfo;

        return (
            <View style={[styles.container, style]}>
                <View style={[styles.wrapper, {width: size, height: size}]}>
                    <Icon name={name}
                          type={type}
                          size={iconSize}
                          color={focused ? selected : color}/>
                    {
                        (title) &&
                        <Text style={[styles.title, {color: focused ? selected : color}]}>
                            {title}
                        </Text>
                    }

                    {
                        (showBadge && exercises.length > 0) &&
                        <View style={styles.badgeContainer}>
                            <Text style={styles.badge}>{this.props.exercises.length}</Text>
                        </View>
                    }
                </View>
            </View>
        )
    }
}

Tab.defaultProps = {
    showBadge: false
}

function mapStateToProps(state, props) {
    return {
        exercises: state.exerciseReducer.exercises
    }
}

export default connect(mapStateToProps, {})(Tab);

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },

    wrapper: {
        justifyContent: "center",
        alignItems: "center"
    },

    title: {
        fontSize: 11,
        fontFamily: fontFamily.regular
    },

    badgeContainer: {
        position: "absolute",
        right: -6,
        top: -6,
        height: 19,
        width: 19,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },

    badge: {
        fontSize: fontSize.small - 1,
        fontFamily: fontFamily.bold,
        color: color.white,
    }
});