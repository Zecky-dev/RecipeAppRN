import React from 'react';
import {View,FlatList} from 'react-native';
import MealDetailCard from '../../components/MealCard/MealDetailCard';
import styles from '../../components/MealCard/MealDetailCard.style';
import useFetch from '../../hooks/useFetch';

import Loading from '../../components/Animations/Loading/Loading';
import Error from '../../components/Animations/Error/Error';

const MealDetail = ({route}) => {

    const {loading, data, error} = useFetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + route.params.mealName);
    const renderMealDetails = ({item}) => {
        return <MealDetailCard item={item}/>;
    };

    if(loading){
        return <Loading/>;
    }
    else if (error === true){
        return <Error/>;
    }
    else{
        return <FlatList data={data.meals} renderItem={renderMealDetails}/>;
    }   
}

export default MealDetail;