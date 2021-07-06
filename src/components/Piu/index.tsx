import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { User } from '../User';
import * as Styled from './styles';

export interface PiuLike {
    id: string,
    user: User,
    piu: Piu
}

export interface Piu {
    id: string,
    user: User,
    likes: PiuLike[],
    text: string,
    created_at: Date,
    updated_at: Date
}

export interface PiuTagProps {
    piu: Piu,
    favorite: boolean,
    liked: boolean
}

const PiuTag: React.FC<PiuTagProps> = ({ piu, favorite, liked }) => {
    const ioniconsSize = 32;
    const ioniconsColor = '#123456'
    
    return (
        <Styled.PiuView key={piu.id}>
            <Styled.Info>
                <Styled.ProfilePicture source={{uri: piu.user.photo}} />
                <View>
                    <Styled.Name>{piu.user.first_name} {piu.user.last_name} <Styled.Username>@{piu.user.username}</Styled.Username></Styled.Name>
                    <Styled.DateOfPublication>{piu.created_at.toISOString()}</Styled.DateOfPublication>
                </View>
            </Styled.Info>
            <Styled.PiuContent>{piu.text}</Styled.PiuContent>
            <Styled.Interactions>
                <Styled.Like>
                    <Ionicons name="heart-outline" size={ioniconsSize} color={ioniconsColor} />
                    <Styled.NumberOfLikes>{piu.likes.length}</Styled.NumberOfLikes>
                </Styled.Like>
                <Ionicons name="star-outline" size={ioniconsSize} color={ioniconsColor} />
                <Ionicons name="trash-outline" size={ioniconsSize} color={ioniconsColor} />
            </Styled.Interactions>
        </Styled.PiuView>
    );
}

export default PiuTag;