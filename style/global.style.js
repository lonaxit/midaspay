import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    // container: {
    //     padding: 20,
    //     flex: 1,
    //     backgroundColor:'#fff'
    // },
    rootContainer: {
        flex: 1,
        paddingTop:5,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor:'#fff'
    },
    welcomeHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:20
    },
    welcomeText: {
        fontSize: 16,
        fontFamily:'nunito-bold'
    },

    // loan header item
    historyContainer: {
        marginVertical: 15,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    historyText: {
        fontSize:14,
        color: '#9B9B9B',
        fontFamily: 'nunito-medium',
        fontWeight:'bold'
    },

    // loan item styles

    loanItemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius:8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.41,
        elevation: 0.6,
        backgroundColor: '#fff',
        marginBottom:15
        // borderBottomWidth:0.5
    },
})

export default globalStyles