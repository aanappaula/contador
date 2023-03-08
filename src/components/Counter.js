import { Component } from "react";
import { Button, StyleSheet, View, Text, TextInput } from "react-native";


export default class Counter extends Component {
    state  = {
        count: 0,
        step: 2,
    };
    incrementar() {
        this.setState({ count: this.state.count + this.state.step });
    }
    decrementar() {
        this.setState({ count: this.state.count - this.state.step});
    }
    alterarStep(e){
        console.log(e);
        this.setState({step:parseInt(e.nativeEvent.text)});
    }
    alterarStep2(text){
        this.setState({step:parseInt(text)});
    }
    render() {
        return (
        <View style={styles.contador}>
            <TextInput 
            value={this.state.step.toString()}
            onChange={(e)=>this.alterarStep(e)}
            inputMode="numeric"
            keyboardType="numeric"
            />
            <TextInput 
            value={this.state.step.toString()}
            onChange={(text)=>this.alterarStep2(text)}
            inputMode="numeric"
            keyboardType="numeric"
            />

            <Text>Contador: {this.state.count}</Text>
            <Button onPress={() => this.incrementar()}title="+" />
            <Button onPress={() => this.decrementar()}title="-" />

        </View>
        );
    }
}
const styles = StyleSheet.create({
    contador: {
        flexDirection: 'row',
        alignItems:'center',
    },
 });