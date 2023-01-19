import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    categoryImage: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
    },
    categoryName:{
        marginLeft: 16,
        color:'black',
        fontSize: 20,
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        padding: 12,
        backgroundColor:'white',
        margin: 12,
        borderTopLeftRadius: 48,
        borderBottomLeftRadius: 48,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
});
