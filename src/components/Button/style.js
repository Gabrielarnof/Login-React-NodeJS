import styled from "styled-components";
export const StyledButton = styled.button`
width: ${(props) => (props.full ? "100%" : null)};
min width:64px;
border:0;
border-radius:4px;
padding:8px 16px;
outline:none;
background-color:#ade6d8
color:#091833
font-size: 1rem;
font-weight:700;
letter-spacing:0.03 rem;
cursor:ponter;
transition: all 0,25s;
&:hover {background-color:#9bc2cf}
`;
