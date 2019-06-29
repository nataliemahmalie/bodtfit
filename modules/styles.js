import {StyleSheet} from 'react-native';
import {theme} from "./index"

export const {padding, color, fontSize, fontFamily} = theme;

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        padding: padding * 6,
        backgroundColor: "#ff7f50"
    },

    options: {
        paddingVertical: padding * 2,
        flex: 1, paddingTop: padding * 2,
        alignItems:"center",
        padding:20,
        justifyContent:'space-between',
        marginBottom: 10
    },
    
    wrapper: {
        borderRadius: padding,
        alignItems: "center",
        justifyContent: "center", width: "100%",
        shadowColor: '#232138',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 1,
        borderColor: '#ddd',
        paddingVertical: padding * 3.5, backgroundColor: "#F4F2EF",
    },
    

    col: {
        paddingHorizontal: 5,
    },

 

    headline: {
        //marginVertical: padding * 3
    },

    headlineText: {
        fontSize: fontSize.large + 8,
        fontFamily: fontFamily.bold,
        color: color.white,
        textAlign: "center"
    },

    empyText: {
        fontSize: fontSize.large + 8,
        fontFamily: fontFamily.bold,
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        shadowRadius: 2,
        elevation: 1,
    },

    instructions: {
        fontSize: fontSize.regular + 2,
        fontFamily: fontFamily.medium,
        color: color.white,
        textAlign: "center",
        marginTop: padding
    },

    col: {
        paddingHorizontal: 25,
    },


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

    pic:{
        height: 150,
        width: 150,
        backgroundColor: color.light_grey,
        marginRight: padding ,
        resizeMode:"contain",
        justifyContent: "center",
        alignItems: "center",
        marginBottom:10,
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
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'stretch',
        flex:1

    },

    muscle: {
        justifyContent: 'center',
        alignItems: 'stretch',
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




export default styles;