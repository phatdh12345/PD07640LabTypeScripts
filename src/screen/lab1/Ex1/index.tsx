import React from "react";
import { View } from "react-native";
import Header from "../../../components/Header";


const Lab1 = () => {
    
    return(
        <View style={{ paddingTop:30 }}>
            <Header title="Xin chào"
            iconLeft={require("../../../assests/back.png")}
            iconRight={require('../../../assests/user.png')}
            onPressLeft={() => console.log('Left Icon Pressed')}
            onPressRight={() => console.log('Right Icon Pressed')}
            leftIconSize={15}
            rightIconSize={20}
            numberOfLines={1}></Header>
            <View style={{paddingTop:10}}>
            <Header title="Xin chào"
            iconLeft={require("../../../assests/back.png")}
            onPressLeft={() => console.log('Left Icon Pressed')}
            leftIconSize={15}
            numberOfLines={1}></Header>
            </View>
            <View style={{paddingTop:10}}>
            <Header 
            iconLeft={require("../../../assests/back.png")}
            onPressLeft={() => console.log('Left Icon Pressed')}
            leftIconSize={15}
            numberOfLines={1}></Header>
            </View>
        </View>
    )
}

export default Lab1;