import React from 'react';
import {View, Text, FlatList} from 'react-native';

import Card from '../../components/CategoryCard/CategoryCard';
import Loading from '../../components/Animations/Loading/Loading';
import useFetch from '../../hooks/useFetch';

const Categories = ({navigation}) => {
    const {data, error, loading} = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    

    const renderCard = ({item}) => {
        return (
        <Card item={item} onPress={() => {
            const category = item.strCategory;
            navigation.navigate('Meals',{categoryName: category});
        }}/>
        );
    };

    return (  
        <View style={{backgroundColor:'#FFA500',flex:1,}}>
            {loading 
            ? <Loading/>
            : <FlatList data={data.categories} renderItem={renderCard}/>
            }
        </View>
    );
};

export default Categories;
