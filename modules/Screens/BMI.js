

import React, { Component } from 'react';
import { View, StyleSheet,Button,TextInput} from 'react-native';
import {ResultText}from  "./styles";
import { Field } from 'redux-form';


export default class BMI extends Component {
  constructor(props){
    super(props)
    this.state={
      userName:null,
      gender:true,
      Weight: 0,
      height: 0,
    resultText:false
      };
    
    this.handleCalculate = this.handleCalculate.bind(this);

  }

  
  handleCalculate = () => {
    let bmi = this.state.Weight / (this.state.height * this.state.height);
    let state = this.state;
    state.resultText = bmi.toFixed(2);
    this.setState(state);  
  
  };
  
  render() {
    const {navigate}=this.props.navigation;
    const resultText=this.state.resultText;
    return (

      <View style={styles.container}>
        <Field
      name="firstName"
      component={RFTextView}
    />
    <Field
      name="lastName"
      component={RFTextView}
    />
    
        <Button on onPress={this.handleCalculate.bind(this)} title="calacute your BMI"/>
        <ResultText >{this.state.resultText}</ResultText>
        <Button
          title="Start your workout!"
          onPress={() => navigate('Main')}
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});