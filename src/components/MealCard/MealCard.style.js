import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    imageCardContainer:{
        margin: 10,
        width: undefined,
        height: 150,
        resizeMode: 'contain',
        flex: 1,
        justifyContent:'flex-end',
    },
    mealTitle:{
        backgroundColor:'rgba(0,0,0,0.6)',
        color:'white',
        textAlign:'center',
        paddingVertical:4,
        fontSize: 18,
    }
})