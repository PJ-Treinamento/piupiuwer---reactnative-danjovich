import styled from "styled-components";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import CustomTextInput from "../../components/CustomTextInput";
import { colors } from "../../assets/styles";

export const PageView = styled(View)`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${colors.background};
    border: 2px solid ${colors.frameStroke};
`

export const InfoText = styled(Text)`
    text-align: center;
    max-width: 75%;
    margin-bottom: 16px;
    margin-top: 16px;
    color: ${colors.gray};
`

export const ErrorMessage = styled(Text)`
    color: ${colors.error};
`

export const Form = styled(View)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const LoginTextInput = styled(CustomTextInput)`
    margin-top: 8px;
`

export const StoredDataButton = styled(RectButton)`
    background: transparent;
    border: none;
    margin-top: 2.5%;
    margin-bottom: -3%;
`

export const SubmitButton  = styled(RectButton)`
    padding: 3% 0;
    min-width: 56.5%;
    margin-top: 7.5% !important;
    margin-bottom: 16px;
    font-weight: 700;
    letter-spacing: 2px;
    border: none;
    border-radius: 8px;
    background: ${colors.blue};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonText = styled(Text)`
    font-size: 16px;
    color: ${colors.plainWhite};
`

export const SignInText = styled(Text)`
    color: ${colors.gray};
`

export const Link = styled(Text)`
    text-decoration-line: underline;
    color: ${colors.link};
`