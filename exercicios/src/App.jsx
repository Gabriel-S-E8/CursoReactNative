import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

//import FlexboxV2 from './components/layout/FlexboxV2';
//import FlexboxV3 from './components/layout/FlexboxV3';
//import FlexboxV4 from './components/layout/FlexboxV4';
import Mega from './components/mega/Mega';

//import Quadrado from './components/layout/Quadrado';
//import FlexboxV1 from './components/layout/FlexboxV1';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
// import UsuarioLogado from './components/UsuarioLogado';
// import Pai from './components/relacao/Pai';
// import Filho from './components/relacao/Filho';
// import Parimpar from './components/Parimpar';
// import Diferenciar from './components/Diferenciar';
// import ContadorV2 from './components/contador/ContadorV2';
// import Pai from './components/indireta/Pai';
// import Pai from './components/direta/Pai';
// import Primeiro from './components/Primeiro';
// import {Comp1, Comp2, Comp3} from './components/Multi';
// import MinMax from './components/MinMax';
// import Aleatorio from './components/aleatorio';
// import Titulo from './components/Titulo';
// import Botao from './components/Botao';
// import Contador from './components/Contador'

const App = () => {
    return (
        <SafeAreaView style={style.App}>
            
            <Mega qtdeNumeros={12} />
            {/* <FlexboxV4/>
            <FlexboxV3/>
            <FlexboxV2/>
            <FlexboxV1/>
            <DigiteSeuNome/>
            <ListaProdutosV2/> 
            <ListaProdutos/>
            <UsuarioLogado usuario={{nome: "Gabriel", email: "Gabriel@teste.com"}}/>
            <UsuarioLogado usuario={{ nome:"Gui", email:"gui@gui.com" }} />
            <UsuarioLogado usuario={{ nome:"Ana" }} />
            <UsuarioLogado usuario={{ email:"carlos@empresa.com" }} />
            <UsuarioLogado usuario={null} />
            <UsuarioLogado usuario={{}} /> 
            <Pai>
                <Filho nome="Bia" sobrenome="Silva"/>
                <Filho nome="Carlos" sobrenome="Silva"/>
            </Pai>
            <Pai>
                <Filho nome="João" sobrenome="Silva"/>
                <Filho nome="Pedro" sobrenome="Silva"/>
            </Pai>
            <Parimpar num={1}/>
            <Diferenciar/>
            <ContadorV2/>
            <Pai/>
            <Pai/>
            <Contador/>
            <Botao/>
            <Titulo principal='Cadastro'
                secundario='Tela de Cadastro do Produto'
            />
            <Aleatorio min={1} max={88}/>
            <MinMax min='3' max='20'/>
            <MinMax min='1' max='88'/>
            <Comp2/>
            <Comp1/>
            <Primeiro/>
            <Comp3/> */}
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});

export default App;
