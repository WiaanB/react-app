import { styled } from 'styled-components';

export const HeroBannerContainer = styled.div<{$height?: string}>`
    height: ${props => props.$height || "80vh"};
`;