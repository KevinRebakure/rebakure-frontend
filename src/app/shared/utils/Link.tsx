import { Grid, Typography } from "antd";
import { ReactNode } from "react";
import styled from "styled-components";

const { Link: AntLink } = Typography;
const { useBreakpoint } = Grid;

type LinkProps = React.ComponentProps<typeof AntLink>;

type Props = LinkProps & {
  children: ReactNode;
};

const StyledAntLink = styled(AntLink)`
  transition: color 0.3s ease;
  &:hover {
    color: #1890ff !important;
  }

  span {
    color: inherit;
  }
`;

export default function Link({ children, ...restProps }: Props) {
  const screens = useBreakpoint();

  const breakpoint = screens.xxl
    ? "xxl"
    : screens.xl
    ? "xl"
    : screens.lg
    ? "lg"
    : screens.md
    ? "md"
    : screens.sm
    ? "sm"
    : "xs";

  const fontSizes: Record<string, string> = {
    xs: "1rem",
    sm: "1rem",
    md: "1rem",
    lg: "1rem",
    xl: "1rem",
    xxl: "1rem",
  };

  const { style, ...otherProps } = restProps;
  const baseFontSize: React.CSSProperties = { fontSize: fontSizes[breakpoint] };

  const styles = { ...baseFontSize, ...(style || {}) };

  return (
    <StyledAntLink {...otherProps} style={styles}>
      {children}
    </StyledAntLink>
  );
}
