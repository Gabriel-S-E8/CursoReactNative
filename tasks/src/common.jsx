import { Alert, Platform } from 'react-native';
const server =
    Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';
function showError(err) {
    if (err.response && err.response.data) {
        Alert.alert('Ops! Ocorreu um Problema!1', `Mensagem: ${err.response.data}`)
    } else {
        Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err.response.status}`);
    }
    
}

function showSuccess(msg) {
    Alert.alert('Sucesso!', msg);
}
export { server, showError, showSuccess };
