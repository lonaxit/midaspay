import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        // borderWidth:1
      },
      balance: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
          marginBottom: 8,
        fontFamily:'nunito-bold'
      },
      label: {
        fontSize: 13,
        color: '#9B9B9B',
          textAlign: 'center',
        fontFamily:'nunito-medium'
    },
});

export default styles;
