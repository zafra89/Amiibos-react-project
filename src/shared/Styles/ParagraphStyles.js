import styled from "styled-components";

export const ParagraphStyles = styled.p`
    color: ${({ theme }) => theme.color};
    font-size: 35px;
    padding: 10px;
    border: 7px solid ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.background};
    font-weight: 600;
    `
