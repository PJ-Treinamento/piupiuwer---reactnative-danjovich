import styled from "styled-components";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { colors } from "../../assets/styles";

export const PageView = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`

export const PageTitle = styled(Text)`
    font-family: 'Lato_700Bold';
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 16px;
`

export const InfoText = styled(Text)`
    font-family: 'Lato_400Regular';
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
`

export const Bold = styled(Text)`
    font-family: 'Lato_700Bold';
    font-weight: 700;
    font-size: 20px;
`

export const ExitButton = styled(RectButton)`
    padding: 3% 0;
    min-width: 100px;
    margin-top: 7.5% !important;
    margin-bottom: 16px;
    font-weight: 700;
    letter-spacing: 2px;
    border: none;
    border-radius: 8px;
    background: ${colors.blue};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const ButtonText = styled(Text)`
    font-size: 16px;
    color: ${colors.plainWhite};
    font-family: 'Lato_400Regular';
`