// Username,email,password,mobilenumber, Country, State signup details


//import libraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { addUser } from '../../Redux/features/userslice';

const SignUp = ({ navigation }) => {
    const dispatch = useDispatch();
    const [value, setvalue] = useState({
        UserName: '',
        Email: '',
        Password: '',
        ConfirmPassword: '',
        MobileNumber: '',

    })

    const [error, seterror] = useState({
        UserName: '',
        Email: '',
        Password: '',
        ConfirmPassword: '',
        MobileNumber:''
    })

    const SignIn = () => {

        //Basic validation
        if (value.UserName === '' || value.Password === '' || value.Email === '' || value.ConfirmPassword === '') {
            seterror({
                ...error,
                UserName: value.UserName === '' ? 'Please enter username' : '',
                Email: value.Email === '' ? 'Please enter email' : '',
                Password: value.Password === '' ? 'Please enter Password' : '',
                ConfirmPassword: value.ConfirmPassword === '' ? 'Please enter confirm password' : '',
                MobileNumber: value.MobileNumber === '' ? 'Please enter mobile number' : ''
            })
            return;
        }

        //Pswd match code
        if (value.Password != value.ConfirmPassword) {
            seterror({
                ...error,
                Password: "Password do not match"
            });
            return;
        }

        //mobilenumber length
        if (value.MobileNumber.length !== 10) {
            seterror({
                ...error,
                MobileNumber: 'Mobile number should be 10 digits'
            });
            return;
        }

        dispatch(addUser(value));
        navigation.navigate('Login', { signupdetails: value });
    };
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.signuptext}>Sign-Up</Text>
                    <View style={styles.container2}>
                        <View style={styles.inputcontainer}>
                            <Text style={styles.text}>UserName</Text>
                            <TextInput
                                // placeholder='Username'
                                style={styles.textinput}
                                value={value.UserName}
                                autoCapitalize='none'
                                autoCorrect={false}
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

                            {error.UserName !== '' && <Text style={{ color: 'red' }}>{error.UserName}</Text>}

                            <Text style={styles.text}>Email</Text>
                            <TextInput
                                // placeholder='Username'
                                style={styles.textinput}
                                value={value.Email}
                                autoCapitalize='none'
                                autoCorrect={false}
                                onChangeText={(text) => {
                                    setvalue({
                                        ...value,
                                        Email: text
                                    })
                                }}
                                onBlur={() => {
                                    seterror({
                                        ...error,
                                        Email: value.Email == ''
                                    })
                                }}
                            />

                            {error.Email !== '' && <Text style={{ color: 'red' }}>{error.Email}</Text>}

                            <Text style={styles.text}>Password</Text>
                            <TextInput
                                // placeholder='Username'
                                style={styles.textinput}
                                value={value.Password}
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry
                                onChangeText={(text) => {
                                    setvalue({
                                        ...value,
                                        Password: text
                                    })
                                }}
                                onBlur={() => {
                                    seterror({
                                        ...error,
                                        Password: value.Password == ''
                                    })
                                }}
                            />
                            {error.Password !== '' && <Text style={{ color: 'red' }}>{error.Password}</Text>}

                            <Text style={styles.text}>Confirm Password</Text>
                            <TextInput
                                // placeholder='Username'
                                style={styles.textinput}
                                value={value.ConfirmPassword}
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry
                                onChangeText={(text) => {
                                    setvalue({
                                        ...value,
                                        ConfirmPassword: text
                                    })
                                }}
                                onBlur={() => {
                                    seterror({
                                        ...error,
                                        ConfirmPassword: value.ConfirmPassword == ''
                                    })
                                }}
                            />

                            {error.ConfirmPassword !== '' && <Text style={{ color: 'red' }}>{error.ConfirmPassword}</Text>}

                            <Text style={styles.text}>Mobile Number</Text>
                            <TextInput
                                // placeholder='Username'
                                style={styles.textinput}
                                value={value.MobileNumber}
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='numeric'
                                onChangeText={(text) => {
                                    setvalue({
                                        ...value,
                                        MobileNumber: text
                                    })
                                }}
                                onBlur={() => {
                                seterror({
                                    ...error,
                                    MobileNumber: value.MobileNumber == ''
                                })
                            }}
                            />
                            {error.MobileNumber !== '' && <Text style={{color:'red'}}>{error.MobileNumber}</Text>}
                        </View>
                        <View style={styles.btncontainer}>
                            <TouchableOpacity
                                style={styles.touchcontainer}
                                onPress={SignIn}
                            >
                                <Text style={styles.btntext}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#6F8FAF",
    },

    signuptext: {
        marginVertical: 45,
        fontSize: 30,
        fontWeight: "350",
        color: "#fff",
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
    btncontainer: {
        alignItems: "center",
        justifyContent: "center",
    },

    btntext: {
        color: "#fff",
        fontSize: 17
    },

    touchcontainer: {
        padding: 17,
        backgroundColor: "#6F8FAF",
        borderRadius: 30,
        margin: 25,
        paddingHorizontal: '20%'

    }
});

export default SignUp;
