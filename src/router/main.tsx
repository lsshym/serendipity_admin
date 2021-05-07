import { Layout } from "antd";
import * as React from "react";
import RouterConfig from './config'
export interface MainRouterProps {}

export interface MainRouterState {}
const { Header, Footer, Sider, Content } = Layout;

class MainRouter extends React.Component<MainRouterProps, MainRouterState> {
    constructor(props: MainRouterProps) {
        super(props);
        this.state = { test: 123 };
    }
    render() {
        return (
            <Layout style={{ height: "100vh" }}>
                <Sider>
                    {
                        RouterConfig.menu.map((item)=>{
                            return (
                                // 
                            )
                        })
                    }
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default MainRouter;
