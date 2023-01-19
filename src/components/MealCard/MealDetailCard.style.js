import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    detailCardContainer:{
        padding: 16,
    },
    mealImage:{
        height: 200,
        resizeMode: 'contain',
    },
    mealName:{
        color: 'red',
        fontSize: 24,
        marginTop:8,
    },
    mealCountry:{
        color: 'red',
        fontSize: 18,
    },
    seperator:{
        width: '100%',
        borderWidth:0.4,
        marginVertical: 8,
        borderColor: 'gray',
    },
    watchButton:{
        backgroundColor:'red',
        padding: 8,
        marginVertical: 12,
        borderRadius: 4,
    },
    watchButtonText:{
        color:'white',
        textAlign:'center',
        fontWeight:'500',
    },
});
