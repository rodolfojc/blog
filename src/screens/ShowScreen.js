import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    
    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));
    
    return (
        <View>
            <Text>{blogPost.title} - {navigation.getParam('id')}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')} )}>
            <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
    };
};

const styles = StyleSheet.create({});

export default ShowScreen;

