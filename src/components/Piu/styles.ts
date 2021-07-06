import styled from "styled-components";
import { Image, View, Text } from "react-native";
import { colors } from "../../assets/styles";

const font = "Lato_400Regular";
const boldFont = "Lato_700Bold";

export const PiuView = styled(View)`
    border: 1px solid ${colors.frameStroke};
    border-right-width: 0;
    border-left-width: 0;
    background: ${colors.plainWhite};
    margin-top: -1px;
    padding: 10px;
`

export const Info = styled(View)`
    display: flex;
    flex-direction: row;
`

const profilePictureSize = 48;

export const ProfilePicture = styled(Image)`
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    width: ${profilePictureSize}px;
    height: ${profilePictureSize}px;
    border-radius: ${profilePictureSize}px;
    overflow: hidden;
    margin-right: 8px;
`

export const Name = styled(Text)`
    font-family: ${boldFont};
    font-weight: 700;
    font-size: 18px;
    color: ${colors.textColor};
`

export const Username = styled(Text)`
    font-family: ${font};
    font-weight: 400;
    color: ${colors.gray};

`

export const DateOfPublication = styled(Text)`
    font-family: ${font};
    font-weight: 400;
    font-size: 14px;
    color: ${colors.textColor};
    margin-top: 2px;
`

export const PiuContent = styled(Text)`
    font-family: ${font};
    font-weight: 400;
    font-size: 16px;
    text-align: justify;
    color: ${colors.textColor};
    margin-top: 4px;
    margin-bottom: 4px;
`

export const Interactions = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

export const Like = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const NumberOfLikes = styled(Text)`
    margin-left: 4px;
    font-size: 16px;
`