import React, { useContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { User } from '../User';
import AuthContext from '../../contexts/auth';
import { colors } from '../../assets/styles';
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
    key: string
}

const PiuTag: React.FC<PiuTagProps> = ({ piu }) => {
    const { user, deletePiu, likePiu, favoritePiu } = useContext(AuthContext);
    const [currentUserPiu, setCurrentUserPiu] = useState(false);
    const [likedByCurrentUser, setLikedByCurrentUser] = useState(false);
    const [numberOfLikes, setNumberOfLikes] = useState(piu.likes.length);
    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        if (user!.id === piu.user.id) setCurrentUserPiu(true);
        for (const piuLike of piu.likes) {
            if (piuLike.user.id === user?.id) {
                setLikedByCurrentUser(true);
            }
        }
        for (const favoritePiu of user?.favorites!) {
            if (favoritePiu.id === piu.id) setFavorite(true);
        }
    }, []);

    const handleLikePiu = () => {
        setLikedByCurrentUser(!likedByCurrentUser);
        likePiu(piu.id).then((response) => {
            if (response.data.operation === 'like') {
                setNumberOfLikes(numberOfLikes + 1);
            }
            else if (response.data.operation === 'unlike') {
                setNumberOfLikes(numberOfLikes - 1);
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    const handleFavoritePiu = () => {
        setFavorite(!favorite);
        favoritePiu(piu.id, favorite).catch((error) => {
            console.log(error);
        });
    }

    const handleDetletePiu = () => {
        deletePiu(piu.id);
    }

    const ioniconsSize = 32;
    const ioniconsColor = colors.textColor;
    
    return (
        <Styled.PiuView>
            <Styled.Info>
                <Styled.ProfilePicture source={{ uri: piu.user.photo ? piu.user.photo : 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'}} />
                <View>
                    <Styled.Name>{piu.user.first_name} {piu.user.last_name} <Styled.Username>@{piu.user.username}</Styled.Username></Styled.Name>
                    <Styled.DateOfPublication>{piu.created_at}</Styled.DateOfPublication>
                </View>
            </Styled.Info>
            <Styled.PiuContent>{piu.text}</Styled.PiuContent>
            <Styled.Interactions>
                <Styled.Like>
                    <Ionicons 
                        name={likedByCurrentUser ?
                            "heart" : 
                            "heart-outline"}
                        size={ioniconsSize} 
                        color={likedByCurrentUser ?
                            colors.error
                            : ioniconsColor}
                        onPress={handleLikePiu}
                    />
                    <Styled.NumberOfLikes>{numberOfLikes}</Styled.NumberOfLikes>
                </Styled.Like>
                <Ionicons 
                    name={favorite ?
                        "star" :
                        "star-outline"} 
                    size={ioniconsSize} 
                    color={favorite ?
                        colors.yellow
                        : ioniconsColor}
                    onPress={handleFavoritePiu}
                />
                {currentUserPiu &&
                    <Ionicons 
                        name="trash-outline" 
                        size={ioniconsSize} 
                        color={ioniconsColor}
                        onPress={handleDetletePiu}
                    />
                }
            </Styled.Interactions>
        </Styled.PiuView>
    );
}

export default PiuTag;