import React from 'react';
import {TouchableOpacity, Text,ImageBackground} from 'react-native';
import styles from './MealCard.style';


const MealCard = ({item, onPress}) => {
    return (
        <ImageBackground source={{uri: item.strMealThumb}} style={styles.imageCardContainer} on>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.mealTitle}>{item.strMeal}</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

export default MealCard;
