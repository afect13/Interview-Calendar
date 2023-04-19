import { LayoutProps } from "./Layout.props";
import { Div } from "./Layout.styled";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return <Div>{children}</Div>;
};

export default Layout;
