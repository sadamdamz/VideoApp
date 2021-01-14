import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image
} from "react-native";
import { Button } from "../components/index";
import { Block } from "galio-framework";
import { Images, Theme } from "../constants";
import { Input } from "../components"

class Signin extends Component {

  handleChange = (value,name) => {
    console.log(value,name);
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <Button
              size="small"
              style={styles.joinBtn}
            >
              <Text style={styles.txtColor}>Join A Meeting</Text>
            </Button>
          </View>
          <View style={styles.btnContainer}>
            <Text>Email</Text>
            <Input placeholder="Email" onChangeText={(e)=>handleChange(e,'name')}/>
            <Text>Password</Text>
            <Input placeholder="Password" onChangeText={(e)=>handleChange(e,'password')}/>
            <Text style={styles.signTxt}>Sign Up</Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default Signin;

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    backgroundColor: Theme.COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    height:"100%",
    width:'100%'
  },
  safeArea: {
    width: "100%",
    height: '100%',
  },
  container: {
    flex:2,
    backgroundColor: Theme.COLORS.BLUE,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems:'center'
  },
  btnContainer: {
    flex:1,
    backgroundColor:Theme.COLORS.WHITE,
    paddingTop:60,
    height:'100%',
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto',
  },
  joinBtn: {
    backgroundColor:Theme.COLORS.WHITE,
    color: Theme.COLORS.BLUE,
    borderRadius: Theme.SIZES.BTNRADIUS,
    width:200,
  },
  txtColor: {
    color: Theme.COLORS.BLUE,
    textTransform:'uppercase',
    fontWeight: '700'
  },
  signTxt: {
    color: Theme.COLORS.BLUE,
    fontWeight: '700',
    borderBottomColor: Theme.COLORS.BLUE,
    textAlign: 'center',
    paddingTop:20
  }
});
