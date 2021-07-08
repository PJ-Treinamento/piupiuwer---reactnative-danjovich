import React, { useState, useCallback, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Yup from 'yup';
import AuthContext from "../../contexts/auth";
import api from "../../services/api";
import Logo from "../../components/Logo";

import * as Styled from "./styles";

const Login = () => {
    const { logIn } = useContext(AuthContext);
    
    const [loginError, setLoginError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = async () => {
        try {
            await scheme.validate({email, password}, {abortEarly: false});
            logIn(email, password).catch((error) => {
                console.log(error);
                setLoginError(true);
            });
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                setLoginError(true);
            }
        }
    }

    // TODO: implementar verificação dos inputs com Yup
    const scheme = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('E-mail inválido'),
        password: Yup.string().required('Senha obrigatória')
    });

    return (
        <Styled.PageView>
            <Logo />
            <Styled.InfoText>Entre no PiuPiuwer e veja o que seus amigos estão pensando.</Styled.InfoText>
            {loginError && <Styled.ErrorMessage>Email ou senha incorretos. Tente novamente.</Styled.ErrorMessage>}
            <Styled.Form>
                <Styled.LoginTextInput
                    placeholder="Email"
                    onChange={(e) => {setEmail(e.nativeEvent.text)}}
                />
                <Styled.LoginTextInput
                    secureTextEntry={true}
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.nativeEvent.text)}
                />
                <Styled.SubmitButton onPress={handleLogIn}><Styled.ButtonText>Entrar</Styled.ButtonText></Styled.SubmitButton>
            </Styled.Form>
            <Styled.SignInText>Ainda não tem um cadastro? <Styled.Link>Crie uma nova conta.</Styled.Link></Styled.SignInText>
        </Styled.PageView>
    );
}

export default Login;