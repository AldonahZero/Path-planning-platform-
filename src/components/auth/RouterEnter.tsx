import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';
import { AuthWidget } from '../widget';

class RouterEnter extends Component {
    componentDidMount() {
        console.log('RouterEnter');
    }
    render() {
        return (
            <div>
                <BreadcrumbCustom breads={['权限管理', '路由拦截']} />
                <AuthWidget
                    children={(auth: any) => (
                        <Row>
                            <Col span={24}>
                                <Card bordered={false} bodyStyle={{ minHeight: 600 }}>
                                    <h2 style={{ height: 500 }} className="center">
                                        只有管理员登录才能看到该页面，否则跳转到404页面
                                    </h2>
                                </Card>
                            </Col>
                        </Row>
                    )}
                />
            </div>
        );
    }
}

export default RouterEnter;
