import { Menu } from "antd";

export interface SideMenuProps {}

const SideMenu: React.SFC<SideMenuProps> = () => {
    return (
        <Menu
            style={{ width: 256 }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
        >
            <Menu.ItemGroup key="g1" title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
            </Menu.ItemGroup>
        </Menu>
    );
};

export default SideMenu;
