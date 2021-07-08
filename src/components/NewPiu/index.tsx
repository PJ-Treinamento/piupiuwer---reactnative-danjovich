import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { colors } from '../../assets/styles';
import AuthContext from '../../contexts/auth';
import * as Styled from './styles';

const NewPiu = () => {
    const [text, setText] = useState('');
    const [length, setLength] = useState(0);
    const [enabled, setEnabled] = useState(false);

    const { publishPiu } = useContext(AuthContext);

    const handlePublishPiu = () => {
        publishPiu(text);
    }

    return (
        <Styled.NewPiuView>
            <View
                style={{
                    marginBottom: enabled ?
                        0 : 32
                }}
            >
                <Text
                    style={{
                        color: (enabled) ?
                            colors.textColor : ((length === 0) ?
                            colors.gray : colors.error)
                    }}
                >
                    Caracteres: {String(length)}/140
                </Text>
                <Styled.NewPiuTextInput 
                    placeholder="Novo piu..." 
                    multiline={true}
                    numberOfLines={2}
                    style={{ textAlignVertical: 'top' }}
                    onChangeText={(text) => {
                        setText(text);
                        setLength(text.length);
                        setEnabled((text.trim().length === 0 
                                    || text.length >= 140) ?
                                    false : true)
                    }}
                    value={text} 
                />
            </View>
            {enabled && <Styled.PublishButton
                onPress={handlePublishPiu}
                // enabled={enabled}
                // style={{
                //     backgroundColor: (enabled) ?
                //         colors.blue : colors.lightBlue
                // }}
            >
                <Styled.ButtonText>
                    Publicar
                </Styled.ButtonText>
            </Styled.PublishButton>}
        </Styled.NewPiuView>
    );
}

export default NewPiu;