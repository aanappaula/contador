import { Component } from "react";
import { Button, StyleSheet, View, Text } from "react-native";

export default class Counter extends Component {
    state  = {
        count: 0,
    };
    incrementar() {
        this.setState({ count: this.state.count + 1});
    }
    decrementar() {
        this.setState({ count: this.state.count - 1});
    }
    render() {
        return (
        <View style={styles.contador}>
            <Text>Contador: {this.state.count}</Text>
            <Button nPress={() => this.incrementar()}title="+" />
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