import styled from "styled-components";
export const StyledInput = styled.input`
width: 100%
outline:none;
padding: 8px 16px;
border : 1px solid 
border-radius:4px;
margin-bottom: 30px; 
color:#091833
font-size: 1rem;
transition:box-sahdow 0.2s;
&::placeholder {
    color:#dedd;}
    &:focus{
        box-shadpw : 0 0 0 2px rgb(170, 168, 250, 0.6);
    }
}

`;
