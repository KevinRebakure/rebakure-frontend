import Icon from "@ant-design/icons";
import { GetProps } from "antd";

type CustomIconComponentProps = GetProps<typeof Icon>;

const UserSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width="512"
    height="512"
  >
    <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-5,21.797v-3.297c0-.827.673-1.5,1.5-1.5h7c.827,0,1.5.673,1.5,1.5v3.297c-1.501.769-3.201,1.203-5,1.203s-3.499-.434-5-1.203Zm11-.582v-2.715c0-1.379-1.122-2.5-2.5-2.5h-7c-1.378,0-2.5,1.121-2.5,2.5v2.715c-3.008-1.965-5-5.362-5-9.215C1,5.935,5.935,1,12,1s11,4.935,11,11c0,3.853-1.992,7.25-5,9.215Zm-6-15.215c-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4-1.794-4-4-4Zm0,7c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Z" />
  </svg>
);

const UserIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={UserSvg} {...props} />
);

export default UserIcon;
