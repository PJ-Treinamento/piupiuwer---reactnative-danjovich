import styled from "styled-components";
import { View, Text, ScrollView } from "react-native";

export const PageView = styled(View)`
    margin-top: 30px;
    justify-content: center;
    align-items: center;
`

export const PageTitle = styled(Text)`
    font-family: 'Lato_700Bold';
    font-weight: 700;
    font-size: 32px;
`

export const ScrollUsers = styled(ScrollView)`
    margin-bottom: 24px;
    margin-top: 24px;
    max-width: 90%;
`