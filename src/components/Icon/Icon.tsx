import {FC, memo} from 'react';
import styled from 'styled-components';

export interface IconProps extends React.HTMLAttributes<SVGSVGElement> {
  svgRef?: React.Ref<SVGSVGElement>;
  transform?: string;
}

const SvgWrapper = styled.svg`
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  &:hover {
    color: orange;
  }
`;

const Icon: FC<IconProps> = memo(({children, className, svgRef, transform, ...props}) => (
  <SvgWrapper
    className={className}
    fill="white"
    ref={svgRef}
    transform={transform}
    viewBox="0 0 128 128"
    width="30"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    {children}
  </SvgWrapper>
));

export default Icon;