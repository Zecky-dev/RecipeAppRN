import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './CategoryCard.style';

const Card = ({item,onPress}) => {
    return (
        <TouchableOpacity style={styles.cardContainer} activeOpacity={0.8} onPress={onPress}>
            <Image source={{uri: item.strCategoryThumb}} style={styles.categoryImage}/>
            <Text style={styles.categoryName}>
                {item.strCategory}
            </Text>
        </TouchableOpacity>
    );
};

export default Card;