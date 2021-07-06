import React from "react";
import { TextInputProps } from "react-native";
import { StyledTextInput } from "./styles";

const CustomTextInput:React.FC<TextInputProps> = ({ ...rest }) => {
    return (
        <StyledTextInput {...rest} />
    );
}

export default CustomTextInput;