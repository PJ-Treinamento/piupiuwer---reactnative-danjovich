import React from 'react';
import { View } from 'react-native';
import PiuTag, { Piu, PiuTagProps } from '../Piu';
import { PiusView } from './styles';

interface PiusProps {
    pius: PiuTagProps[]
}

const Pius:React.FC<PiusProps> = ({ pius }) => {
    return (
        <PiusView>
            {pius.map((piu: PiuTagProps) =>{
                return <PiuTag key={piu.key} piu={piu.piu} />
            })}
        </PiusView>
    );
}

export default Pius;