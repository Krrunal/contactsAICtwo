import { Dimensions, Text, TextInput, View } from 'react-native';

import color from "../../containers/theme/Colors";
import styled from 'styled-components';

interface InputProps {
    focussed: boolean;
    isAndroid: boolean
}

export const InputContainer = styled.View`
    /* margin-bottom: ${(props: InputProps) => props.isAndroid ? 15 : 15}; */
    margin-top: 5;
    width: 100%;
    display: flex;
    border-bottom-width: 1;
    /* border-bottom-color: ${(props) => props.isProfile ? color.primary : props.borderColor ? props.borderColor : color.white};    */
`;
