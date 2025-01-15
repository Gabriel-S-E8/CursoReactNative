import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert,
    PermissionsAndroid,
} from 'react-native';
import RNFS from 'react-native-fs';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import useFeed from '../data/hooks/useFeed';
import useUser from '../data/hooks/useUser';
import useEvent from '../data/hooks/useEvent';

const AddPhoto = (props) => {
    const [image, setImage] = useState(null);
    const [comment, setComment] = useState('');

    const { addPost } = useFeed();
    const { name: nickname, email } = useUser();
    const { uploading } = useEvent();

    const canEdit = () => email != null && email.trim() != '' && !uploading;

    const options = {
        saveToPhotos: true,
        mediaType: 'photo',
        maxWidth: 800,
        maxHeight: 600,
    };

    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Permissão para usar a câmera',
                        message:
                            'Este aplicativo precisa acessar sua câmera para tirar fotos.',
                        buttonNeutral: 'Perguntar depois',
                        buttonNegative: 'Cancelar',
                        buttonPositive: 'OK',
                    },
                );
                console.log('Permissão da Câmera:', granted);
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        } else {
            return true; // iOS concede permissões automaticamente no runtime
        }
    };

    const requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Permissão para salvar imagens',
                        message:
                            'Este aplicativo precisa salvar imagens no armazenamento do dispositivo.',
                        buttonNeutral: 'Perguntar depois',
                        buttonNegative: 'Cancelar',
                        buttonPositive: 'OK',
                    },
                );
                console.log('Permissão de Armazenamento:', granted);
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        } else {
            return true;
        }
    };

    const pickImage = () => {
        launchImageLibrary(options, (response) => {
            if (!response.didCancel) {
                setImage({
                    uri: response.assets[0].uri,
                    base64: response.assets[0].base64,
                });
            }
        });
    };

    const captureImage = async () => {
        const isCameraPermitted = await requestCameraPermission();
        const isStoragePermitted = await requestExternalWritePermission();

        if (isCameraPermitted) {
            launchCamera(
                {
                    mediaType: 'photo',
                    includeBase64: true,
                    saveToPhotos: true,
                    maxHeight: 600,
                    maxWidth: 800,
                },
                (res) => {
                    if (res.didCancel) {
                        Alert.alert(
                            'Ação cancelada',
                            'Você não tirou uma foto.',
                        );
                    } else if (res.errorCode) {
                        Alert.alert(
                            'Erro',
                            res.errorMessage || 'Erro desconhecido',
                        );
                    } else if (res.assets && res.assets.length > 0) {
                        setImage({
                            uri: res.assets[0].uri,
                            base64: res.assets[0].base64,
                        });
                    }
                },
            );
        } else {
            Alert.alert(
                'Permissão negada',
                'As permissões necessárias não foram concedidas.',
            );
        }
    };

    const save = () => {
        Alert.alert('Imagem Adicionada', comment);
        setImage(null);
        setComment('');
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Compartilhe uma imagem</Text>
                <View style={styles.imageContainer}>
                    {image ? (
                        <Image
                            source={{ uri: image.uri }}
                            style={styles.image}
                        />
                    ) : (
                        <Text style={styles.placeholder}>
                            Nenhuma imagem selecionada
                        </Text>
                    )}
                </View>
                <View style={styles.buttomRow}>
                    <TouchableOpacity
                        onPress={captureImage}
                        disabled={!canEdit()} 
                        style={[
                            styles.buttom,
                            canEdit() ? {} : styles.buttomDisabled,
                        ]}
                    >
                        <Text style={styles.buttomText}>Tirar uma foto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={pickImage}
                        disabled={!canEdit()}
                        style={[
                            styles.buttom,
                            canEdit() ? {} : styles.buttomDisabled,
                        ]}
                    >
                        <Text style={styles.buttomText}>Escolha a foto</Text>
                    </TouchableOpacity>
                </View>
                <TextInput
                    placeholder="Algum comentário para a foto?"
                    style={styles.input}
                    value={comment}
                    onChangeText={setComment}
                    editable={canEdit()}
                />
                <TouchableOpacity
                    onPress={save}
                    disabled={!canEdit()}
                    style={[
                        styles.buttom,
                        canEdit() ? {} : styles.buttomDisabled,
                    ]}
                >
                    <Text style={styles.buttomText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold',
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#EEE',
        marginTop: 10,
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center',
    },
    buttomRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF',
    },
    input: {
        marginTop: 20,
        width: '90%',
    },
});

export default AddPhoto;
