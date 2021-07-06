import React from 'react';
import { View } from 'react-native';
import { Piu, PiuLike } from '../Piu';

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

const UserTag = () => {
    return (
        <View>

        </View>
    );
}

export default UserTag;