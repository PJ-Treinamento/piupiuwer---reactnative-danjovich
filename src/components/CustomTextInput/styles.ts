import styled from "styled-components";
import { TextInput } from "react-native";
import { colors } from "../../assets/styles";

export const StyledTextInput = styled(TextInput)`
    min-width: 80%;
    font-size: 16px;
    background: ${colors.transparentGray};
    padding: 3% 2%;
    border: 1px solid ${colors.frameStroke};
    border-radius: 16px;
`