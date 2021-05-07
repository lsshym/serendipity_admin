import { Button, Input } from "antd";
import React from "react";
import "./Login.scss";
export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
    return (
        <section className="login">
            <div className="login-input">
                账号：
                <span>
                    <Input></Input>
                </span>
            </div>
            <div className="login-input">
                密码：
                <span>
                    <Input></Input>
                </span>
            </div>
            <Button type="primary">Login</Button>
        </section>
    );
};

export default Login;
