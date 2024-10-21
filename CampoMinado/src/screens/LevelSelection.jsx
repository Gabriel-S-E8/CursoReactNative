import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import params from '../params';

export default (props) => {
    return (
        <Modal
            onRequestClose={props.onCancel}
            visible={props.isVisible}
            animationType="slide"
            transparent={true}
        >
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecione o nível</Text>
                    <TouchableOpacity style={[styles.button, styles.bgEasy]} onPress={()=> props.onLevelSelected(0.1)}>
                        <Text style={styles.buttonLabel}>Fácil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.bgNormal]} onPress={()=> props.onLevelSelected(0.2)}>
                        <Text style={styles.buttonLabel}>Mèdio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.bgHard]} onPress={()=> props.onLevelSelected(0.3)}>
                        <Text style={styles.buttonLabel}>Difícil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.bgExpert]} onPress={()=> props.onLevelSelected(0.4)}>
                        <Text style={styles.buttonLabel}>Expert</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container: {
        backgroundColor: '#EEE',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 10,
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    },
    bgEasy: {
        backgroundColor: '#49b65d',
    },
    bgNormal: {
        backgroundColor: '#2765f7',
    },
    bgHard: {
        backgroundColor: '#f26337',
    },
    bgExpert: {
        backgroundColor: '#db4437',
    },
});
