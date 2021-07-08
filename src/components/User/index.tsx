import React from 'react';
import { View } from 'react-native';
import { Piu, PiuLike } from '../Piu';
import * as Styled from './styles';

export interface User {
    id: string,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    about: string,
    photo: string,
    pius: Piu[],
    likes: PiuLike[],
    following: User[],
    followers: User[],
    favorites: Piu[]
}

interface UserTagProps {
    user: User
}

const UserTag:React.FC<UserTagProps> = ({ user }) => {
    return (
        <Styled.Info>
            <Styled.ProfilePicture source={{ uri: user.photo ? user.photo : 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg' }} />
            <View>
                <Styled.Name>{user.first_name} {user.last_name} <Styled.Username>@{user.username}</Styled.Username></Styled.Name>
                <Styled.About>{user.about}</Styled.About>
            </View>
        </Styled.Info>
    );
}

export default UserTag;