import styled from 'styled-components';
import { View, Text, Image } from "react-native";

export const StyledView = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const StyledImage = styled(Image)`
    width: 60px;
    height: 60px;
`
export const StyledText = styled(Text)`
    font-family: 'YesevaOne_400Regular';
    font-size: 40px;
    margin-left: 14px;
`