// Username , pswd for login details

//import libraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, TextInput, TouchableOpacity } from 'react-native';

// creatng component
const Login = ({navigation, route}) => {

    const {signupdetails} = route.params;

    const [value, setvalue] = useState({
        UserName:'',
        Password:''
    });

    const [error, seterror] = useState({
        UserName:'',
        Password:''
    })

    const handlelogin = () => {
        if(value.UserName === signupdetails.UserName && value.Password === signupdetails.Password ){
            navigation.navigate('Home', { signupdetails });
        }
        else {
            seterror({
                ...error,
                UserName: error.UserName == '' ? "Invalid Username or Password" : null,
                Password: error.Password == '' ? "Invalid Username or Password" : null
            });
                
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logintext}>Login</Text>
            <StatusBar barStyle='light-content' />
            <View style={styles.container2}>
                <View style={styles.inputcontainer}>
                    <Text style={styles.text}>UserName</Text>
                    <TextInput
                        style={styles.textinput}
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={value.UserName}
                        onChangeText={(text) => {
                            setvalue({
                                ...value,
                                UserName: text
                            })
                        }}  
                        onBlur={() => {
                            seterror({
                                ...error,
                                UserName: value.UserName == ''
                            })
                        }}
                    />

                    {/* {error.UserName && <Text style={{color:'red'}}>{error.UserName}</Text>} */}

                    <Text style={styles.text}>Password</Text>
                    <TextInput
                        style={styles.textinput}
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={value.Password}
                        secureTextEntry
                        onChangeText={(text) => {
                            setvalue({
                                ...value,
                                Password:text
                            })
                        }}
                        onBlur={() => {
                            seterror({
                                ...error,
                                Password: value.Password == ''
                            })
                        }}
                    />

                    {/* {error.Password && <Text style={{color:'red'}}>{error.Password}</Text>} */}
                    {error.UserName && error.Password ? <Text style={{color:'red'}}>{error.UserName}</Text> : null }
                </View>
                <View style={styles.btncontainer}>
                <TouchableOpacity onPress={handlelogin} style={styles.touchcontainer} >
                    <Text style={styles.btntext}>Login</Text>
                </TouchableOpacity>
                </View>
           </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#6F8FAF"
    },

    logintext: {
        marginVertical: 45,
        fontSize: 30,
        fontWeight: "350",
        color: "#fff"
    },
    container2: {
        backgroundColor: "#fff",
        alignItems: "center",
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        borderTopRightRadius: 70,
        borderTopLeftRadius: 70,
        marginTop: -30,
    },

    inputcontainer: {
        marginTop: 60,
        width: '80%',
    },

    text: {
        marginTop: 5,
        fontSize: 15,
    },
    textinput: {
        marginBottom: 10,
        padding: 7,
        fontSize: 15,
        borderColor: "#000",
        width: '100%',
        borderBottomWidth: 1,
    },
    btncontainer:{
        alignItems:"center",
        justifyContent:"center",
    },

    btntext:{
        color:"#fff",
        fontSize:17
    },

    touchcontainer:{
        padding:17,
        backgroundColor:"#6F8FAF",
        borderRadius:30,
        margin:25,
        paddingHorizontal:'20%'

    }
});

export default Login;
