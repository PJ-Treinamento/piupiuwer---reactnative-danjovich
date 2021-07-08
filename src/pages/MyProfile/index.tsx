import React, { useContext } from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import AuthContext from "../../contexts/auth";
import { PageView } from "./styles";

const MyProfile = () => {
    const { logOut } = useContext(AuthContext);

    return (
        <PageView>
            <RectButton onPress={logOut}>
                <Text>Sair</Text>
            </RectButton>
        </PageView>
    );
}

export default MyProfile;