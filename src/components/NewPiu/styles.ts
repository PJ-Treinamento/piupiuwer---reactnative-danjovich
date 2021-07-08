import styled from "styled-components";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import CustomTextInput from "../CustomTextInput";
import { colors } from "../../assets/styles";

export const NewPiuView = styled(View)`
    display: flex;
    align-items: center;
    border: 1px solid ${colors.frameStroke};
    border-right-width: 0;
    border-left-width: 0;
    background: ${colors.plainWhite};
    padding-top: 16px;
`

export const NewPiuTextInput = styled(CustomTextInput)`
    /* min-height: 64px; */
    /* text-align-vertical: top; */
    justify-content: flex-start;
    padding-top: 16px;
    text-align: auto;
    max-width: 80%;
`

export const PublishButton = styled(RectButton)`
    padding: 3% 0;
    min-width: 40%;
    height: 16px;
    border-radius: 16px;
    margin-top: 16px;
    margin-bottom: 16px;
    border: none;
    background: ${colors.blue};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonText = styled(Text)`
    font-family: 'Lato_700Bold';
    font-weight: 700;
    font-size: 16px;
    color: ${colors.plainWhite};
`