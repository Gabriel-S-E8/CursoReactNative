import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import TextoCentral from "./components/TextoCentral";
import TelaA from "./views/TelaA";
import TelaB from "./views/TelaB";
import TelaC from "./views/TelaC";


export default props => (
    <SafeAreaView style={{ flex: 1 }}>
       <TelaA/>
       <TelaB/>
       <TelaC/>
    </SafeAreaView>
)