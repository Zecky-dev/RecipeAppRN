import Lottie from 'lottie-react-native';
import React from 'react';

const Error = () => {
    return (
        <Lottie source={require('./error.json')} autoPlay loop/>
    )
};

export default Error;