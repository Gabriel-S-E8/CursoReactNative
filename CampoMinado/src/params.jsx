import { Dimensions } from 'react-native';

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, // Proporção do painel superior
    difficultLevel: 0.1,
};

// Agora calcule as colunas e linhas após a inicialização de `params`
params.cols = Math.floor(Dimensions.get('window').width / params.blockSize);
params.rows = Math.floor((Dimensions.get('window').height * (1 - params.headerRatio)) / params.blockSize);

export default params;
