import styled from "styled-components";
import { ActivityIndicator, SafeAreaView, ScrollView, View } from "react-native";
import Logo from "../../components/Logo";

export const FeedView = styled(View)`
    display: flex;
    align-items: center;
    padding-top: 32px;
    margin-bottom: 64px;
`

export const FeedScrollView = styled(ScrollView)`
    margin-top: 16px;
`

export const ActivityIndicatorView = styled(View)`
    position: absolute;
    margin-top: 8px;
    align-items: center;
    justify-content: center;
`

export const CustomActivityIndicator = styled(ActivityIndicator)`
    

`