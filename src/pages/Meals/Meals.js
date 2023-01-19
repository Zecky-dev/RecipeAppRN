import React from 'react';
import {View, Text, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Animations/Loading/Loading';
import Error from '../../components/Animations/Error/Error';
import MealCard from '../../components/MealCard/MealCard';



const Meals = ({navigation,route}) => {
    const {data, loading, error} = useFetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + route.params.categoryName);
    
    const getMealDetails = (mealName) => {
        navigation.navigate('MealDetail',{mealName: mealName});
    };

    const renderMeal = ({item}) => {
        console.log(item);
        return <MealCard item={item} onPress={() => getMealDetails(item.strMeal)}/>;
    };

    if(loading){
        return <Loading/>
    }

    else if(data.meals === null){
        return <Error/>
    }

    else{
        return <FlatList data={data.meals} renderItem={renderMeal}/> 
    }
};

export default Meals;