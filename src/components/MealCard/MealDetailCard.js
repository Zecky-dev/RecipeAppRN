import React from 'react';
import {View,Image, Text, Pressable, Linking, Alert} from 'react-native';
import styles from '../../components/MealCard/MealDetailCard.style';

const MealDetail = ({item}) => {
    return (
        <View style={styles.detailCardContainer}>
            <Image source={{uri: item.strMealThumb}} style={styles.mealImage}/>
            <Text style={styles.mealName}>
                {item.strMeal}
            </Text>
            <Text style={styles.mealCountry}>
                {item.strArea}
            </Text>
            <View style={styles.seperator}/>
            <Text style={styles.mealInstructions}>
                {item.strInstructions}
            </Text>
            <Pressable onPress={
                () => {
                    Linking
                    .openURL(item.strYoutube)
                    .catch(
                        (err) => {
                            Alert.alert(err.message);
                        }
                    );
                }
            } style={styles.watchButton}
            >
                <Text style={styles.watchButtonText}>
                    Watch on Youtube
                </Text>
            </Pressable>
        </View>
    );
};

export default MealDetail;
