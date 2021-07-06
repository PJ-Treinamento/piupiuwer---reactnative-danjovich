import React from "react";

import logoImage from "../../assets/images/piupiuwer.png";

import { StyledImage, StyledText, StyledView } from "./styles";

const Logo = () => {
    return (
        <StyledView>
            <StyledImage source={logoImage} />
            <StyledText>PiuPiuwer</StyledText>
        </StyledView>
    )
}

export default Logo;