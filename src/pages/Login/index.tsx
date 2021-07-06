import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import Logo from "../../components/Logo";

import * as Styled from "./styles";

const Login = () => {
    const { navigate } = useNavigation();
    const [loginError, setLoginError] = useState(false);

    const handleLoggingIn = () => {
        navigate('Tabs');
    }

    return (
        <Styled.PageView>
            <Logo />
            <Styled.InfoText>Entre no PiuPiuwer e veja o que seus amigos estão pensando.</Styled.InfoText>
            {loginError && <Styled.ErrorMessage>Email ou senha incorretos. Tente novamente.</Styled.ErrorMessage>}
            <Styled.Form>
                <Styled.LoginTextInput
                    placeholder="Email"
                />
                <Styled.LoginTextInput
                    placeholder="Senha"
                />
                <Styled.SubmitButton onPress={handleLoggingIn}><Styled.ButtonText>Entrar</Styled.ButtonText></Styled.SubmitButton>
            </Styled.Form>
            <Styled.SignInText>Ainda não tem um cadastro? <Styled.Link>Crie uma nova conta.</Styled.Link></Styled.SignInText>
        </Styled.PageView>
    );
}

export default Login;