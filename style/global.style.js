import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
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
})

export default globalStyles