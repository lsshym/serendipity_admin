import * as React from "react";
import { Link } from "react-router-dom";

export interface AdminProps {}

const Admin: React.SFC<AdminProps> = () => {
    return (
        <div>
            管理页面
            <Link to="/login">登录页</Link>
        </div>
    );
};

export default Admin;
