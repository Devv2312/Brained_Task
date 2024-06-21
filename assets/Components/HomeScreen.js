//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';


const HomeScreen = () => {
    const users = useSelector((state) => state.users)
    // const { signupdetails } = route.params
    // const userdetail = [
    //     {key: 'UserName', value: signupdetails.UserName},
    //     {key: 'Email', value: signupdetails.Email},
    //     {key: 'MobileNumber' , value: signupdetails.MobileNumber}
    // ]

    return (
        <View style={styles.container}>
            <Text style={{fontSize:22,fontWeight:'500'}}>User Details</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => (
                        <View style={{ padding: 15 }}>
                            <Text style={{ fontSize: 17 }}>UserName: {item.UserName}</Text>
                            <Text style={{ fontSize: 17 }}>Email: {item.Email}</Text>
                            <Text style={{ fontSize: 17 }}>MobileNumber: {item.MobileNumber}</Text>
                            <TouchableOpacity style={styles.editButton}>
                                <Text style={{ color: '#0000FF', padding: 10, alignSelf: 'flex-end' }}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,
        padding:10,
        // backgroundColor:'#ffffff'
    },
});

export default HomeScreen;
