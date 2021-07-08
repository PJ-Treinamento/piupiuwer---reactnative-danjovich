import styled from "styled-components";
import { View, Image, Text  } from "react-native";
import { colors } from "../../assets/styles";

const font = "Lato_400Regular";
const boldFont = "Lato_700Bold";

export const Info = styled(View)`
    display: flex;
    flex-direction: row;
    padding-bottom: 5%;
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

export const About = styled(Text)`
    font-family: ${font};
    font-size: 16px;
    flex-wrap: wrap;
    max-width: 90%;
    text-align: justify;
`