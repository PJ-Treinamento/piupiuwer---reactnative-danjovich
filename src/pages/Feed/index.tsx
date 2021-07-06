import React from 'react';
import { RefreshControl, SafeAreaView, ScrollView, View } from 'react-native';
import Logo from '../../components/Logo';
import { Piu, PiuTagProps } from '../../components/Piu';
import Pius from '../../components/Pius';
import { User } from '../../components/User';
import * as Styled from './styles';

const wait = (timeout: Number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const Feed = () => {
    const exampleDate = new Date();
    let exampleUser: User;
    let examplePiu: Piu;

    exampleUser = {
        id: '00000',
        username: 'username',
        first_name: 'Nome',
        last_name: 'Sobrenome',
        email: '123@example.com',
        about: 'eu!',
        photo: 'https://dcom-prod.imgix.net/files/2020-05/Guy%27s%20Big%20Bite%20v2%20-%20POSTER_0.jpg?w=520&h=520&crop=focalpoint&fp-x=0.5&fp-y=0.1&fit=crop&auto=compress&q=75',
        pius: [],
        likes: [],
        following: [],
        followers: [],
        favorites: []
    };

    examplePiu = {
        id: '12345',
        user: exampleUser,
        likes: [],
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, laboriosam temporibus. Tempore, placeat vero amet ducimus neque blanditiis illum eaque cupiditate nulla mollitia asperiores. Consequatur ratione assumenda a nobis praesentium?',
        created_at: exampleDate,
        updated_at: exampleDate
    };

    let pius: PiuTagProps[];
    pius = [];

    for (let i = 0; i < 10; i++) {
        let piu: PiuTagProps;
        examplePiu.id = String(i);
        piu = {
            piu: examplePiu,
            favorite: false,
            liked: false
        }
        pius.push(piu);
    }

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <Styled.FeedView>
            <Logo />
            <SafeAreaView>
                <Styled.FeedScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    <Pius pius={pius} />
                </Styled.FeedScrollView>
            </SafeAreaView>
        </Styled.FeedView>
    );
}

export default Feed;
