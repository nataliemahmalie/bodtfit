
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

export default class BMI extends React.Component {
  state = {
    height: 0,
    mass: 0,
    resultNumber: 0,
    resultText: ""
  };

  handleCalculate = () => {
    let imc = (this.state.mass) / this.state.height ** 2;
    this.setState({
      resultNumber: imc.toFixed(2)
    });

    if (imc < 18.5) {
      this.setState({ resultText: "Underweight" });
    } else if (imc > 18.5 && imc < 25) {
      this.setState({ resultText: "Normal Weight" });
    } else if (imc >= 25 && imc < 30) {
      this.setState({ resultText: "Overweight" });
    } else {
      this.setState({ resultText: "Obesity" });
    }
  };

  render() {
    const {navigate}=this.props.navigation;
    return (
      
        <View style={styles.container}>
          <Text
            style={{
              color: "#0000ff",
              justifyContent: "center",
              alignSelf: "center",
              marginTop: 30,
              fontSize: 20
            }}
          >
            BODYFIT
          </Text>
          <Text 
          style={{
            color:"#0000ff",
            justifyContent: "center",
            alignSelf: "center",
            marginTop: 30,
            fontSize: 15
          }}
          >
          Calculate your BMI and than choose a workout just for you!
    
          </Text>
          <View style={styles.intro}>
            <TextInput
              placeholder="Height"
              keyboardType="default"
              style={styles.input}
              onChangeText={height => {
                this.setState({ height });
              }}
            />
            <TextInput
              placeholder="Mass"
              keyboardType="default"
              style={styles.input}
              onChangeText={mass => {
                this.setState({ mass });
              }}
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={this.handleCalculate}
          >
            <Text style={styles.buttonText}>Calculate </Text>
          </TouchableOpacity>
          <Text style={styles.result}>{this.state.resultNumber}</Text>
          <Text style={[styles.result, { fontSize: 35 }]}>
            {this.state.resultText}
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate('Main')}
          >
            <Text style={styles.buttonText}> Start your workout!</Text>
          </TouchableOpacity>
        </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff7f50"
  },
  intro: {
    flexDirection: "row"
  },
  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 50,
    marginTop: 24,
    color: "#000080"
  },
  button: {
    backgroundColor: "#000080"
  },
  buttonText: {
    alignSelf: "center",
    padding: 30,
    fontSize: 25,
    color: "#F4F2EF",
    fontWeight: "bold"
  },
  result: {
    alignSelf: "center",
    color: "#F4F2EF",
    fontSize: 65,
    padding: 15
  }
});

