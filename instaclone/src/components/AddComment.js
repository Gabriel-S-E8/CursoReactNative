import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback as TWF,
    Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddComment = () => {
    const [comment, setComment] = useState('');
    const [editMode, setEditMode] = useState(false);

    const handleAddComment = () => {
        Alert.alert('Adicionado!', comment);
    };

    return (
        <View style={{ flex: 1 }}>
            {editMode ? (
                <View style={styles.container}>
                    <TextInput
                        placeholder="Pode comentar..."
                        style={styles.input}
                        autoFocus={true}
                        value={comment}
                        onChangeText={setComment}
                        onSubmitEditing={handleAddComment}
                    />
                    <TWF onPress={() => setEditMode(false)}>
                        <Icon name="times" size={15} color="#555" />
                    </TWF>
                </View>
            ) : (
                <TWF onPress={() => setEditMode(true)}>
                    <View style={styles.container}>
                        <Icon name="comment-o" size={25} color="#555" />
                        <Text style={styles.caption}>Adicione um comentário...</Text>
                    </View>
                </TWF>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#CCC',
    },
    input: {
        width: '90%',
    },
});

export default AddComment;
