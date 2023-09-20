import { Button } from "primereact/button";
import styled from "styled-components";

export const NavButton = styled(Button)<{$color?: string}>`
    background-color: ${props => props.color ? props.color : "white"};
`;