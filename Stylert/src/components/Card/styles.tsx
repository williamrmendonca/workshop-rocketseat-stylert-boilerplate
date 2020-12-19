import styled, { ThemeConsumer } from 'styled-components/native';

export const Container = styled.View`
    height: 72px;
    padding: 14px;
    margin: 24px;
    border-radius: 4px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme}) => theme.colors['neutral-200']};
    
`;