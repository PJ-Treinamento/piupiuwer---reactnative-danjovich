import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import AuthContext from "../../contexts/auth";
import { colors } from "../../assets/styles";
import UserTag from "../../components/User";
import * as Styled from "./styles";

const MyProfile = () => {
    const { logOut, user } = useContext(AuthContext);

    return (
        <Styled.PageView>
            <Styled.PageTitle>Meu Perfil</Styled.PageTitle>
            <UserTag user={user!} />
            <Styled.InfoText>
                <Text><Styled.Bold>Pius:</Styled.Bold> {user?.pius.length}{'\n'}</Text>
                <Text><Styled.Bold>Seguindo:</Styled.Bold> {user?.following.length}{'\n'}</Text>
                <Text><Styled.Bold>Seguidores:</Styled.Bold> {user?.followers.length}{'\n'}</Text>
                <Text><Styled.Bold>Email:</Styled.Bold> {user?.email}{'\n'}</Text>
            </Styled.InfoText>
            <Styled.ExitButton onPress={logOut}>
                <Ionicons name="exit-outline" color={colors.plainWhite} size={24} />
                <Styled.ButtonText>   Sair</Styled.ButtonText>
            </Styled.ExitButton>
        </Styled.PageView>
    );
}

export default MyProfile;