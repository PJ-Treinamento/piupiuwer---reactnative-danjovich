import React, { useContext, useCallback, useState, useEffect } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, View } from 'react-native';
import Logo from '../../components/Logo';
import NewPiu from '../../components/NewPiu';
import { Piu, PiuTagProps } from '../../components/Piu';
import Pius from '../../components/Pius';
import { User } from '../../components/User';
import AuthContext from '../../contexts/auth';
import * as Styled from './styles';

const wait = (timeout: Number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const Feed = () => {
    const { piuTags, getPius, loadingInPage } = useContext(AuthContext);

 
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        // wait(2000).then(() => setRefreshing(false));
        getPius();
        setRefreshing(false);
    }, []);

    return (
        <Styled.FeedView>
            <Logo />
            {loadingInPage &&
                <Styled.ActivityIndicatorView>
                    <Styled.CustomActivityIndicator color={"#123456"} size="large" />
                </Styled.ActivityIndicatorView>
            }
            <SafeAreaView>
                <Styled.FeedScrollView 
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    <NewPiu />
                    <Pius pius={piuTags} />
                </Styled.FeedScrollView>
            </SafeAreaView>
        </Styled.FeedView>
    );
}

export default Feed;
