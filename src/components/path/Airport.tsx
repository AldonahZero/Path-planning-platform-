import React from 'react';

import { Row, Col, Card } from 'antd';
import { Descriptions } from 'antd';
import { Tag, Divider } from 'antd';
import { Cascader } from 'antd';
import b1 from '../../style/imgs/b1.jpg';
import Index from '../ui/map/index';
import MyAirportDrawer from '../ui/MyAirportDrawer';

const options = [
    {
        value: '固定翼无人机',
        label: '固定翼无人机',
        children: [
            {
                value: '固定翼无人机 SC02',
                label: '固定翼无人机 SC02',
                children: [
                    {
                        value: '可见光',
                        label: '可见光',
                    },
                    {
                        value: '红外',
                        label: '红外',
                    },
                    {
                        value: '高光谱',
                        label: '高光谱',
                    },
                    {
                        value: 'SAR',
                        label: 'SAR',
                    },
                ],
            },
            {
                value: '固定翼无人机 SC01',
                label: '固定翼无人机 SC01',
                children: [
                    {
                        value: '可见光',
                        label: '可见光',
                    },
                    {
                        value: '红外',
                        label: '红外',
                    },
                    {
                        value: '高光谱',
                        label: '高光谱',
                    },
                    {
                        value: 'SAR',
                        label: 'SAR',
                    },
                ],
            },
        ],
    },
    {
        value: '多旋翼无人机',
        label: '多旋翼无人机',
        children: [
            {
                value: '多旋翼无人机 SC01',
                label: '多旋翼无人机 SC01',
                children: [
                    {
                        value: '可见光',
                        label: '可见光',
                    },
                    {
                        value: '红外',
                        label: '红外',
                    },
                    {
                        value: '高光谱',
                        label: '高光谱',
                    },
                    {
                        value: 'SAR',
                        label: 'SAR',
                    },
                ],
            },
        ],
    },
];

function onChange(value: any) {
    console.log(value);
}

const Airport = () => {
    return (
        <div className="gutter-example">
            <Row gutter={16}>
                <Col className="gutter-row" md={6}>
                    <div className="gutter-box">
                        <Card title="无人机面板" bordered={false}>
                            <img src={b1} className="img-responsive img-circle" alt="test" />
                            <Cascader options={options} onChange={onChange} changeOnSelect />
                        </Card>
                        <Card title="路径规划面板">
                        <Descriptions
                            title="飞行信息"
                            bordered
                            column={{ xxl: 1, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}
                        >
                            <Descriptions.Item label="旁向重叠度">30.</Descriptions.Item>
                            <Descriptions.Item label="飞行速度">200</Descriptions.Item>
                            <Descriptions.Item label="飞行高度">1800</Descriptions.Item>
                        </Descriptions>
                    </Card>
                    <Card title="路径规划">
                        <MyAirportDrawer />
                        <Divider orientation="left">Presets</Divider>
                        <div>
                            <Tag color="magenta">magenta</Tag>
                            <Tag color="red">red</Tag>
                            <Tag color="volcano">volcano</Tag>
                            <Tag color="orange">orange</Tag>
                            <Tag color="gold">gold</Tag>
                            <Tag color="lime">lime</Tag>
                            <Tag color="green">green</Tag>
                            <Tag color="cyan">cyan</Tag>
                            <Tag color="blue">blue</Tag>
                            <Tag color="geekblue">geekblue</Tag>
                            <Tag color="purple">purple</Tag>
                        </div>
                        <Divider orientation="left">Custom</Divider>
                        <div>
                            <Tag color="#f50">#f50</Tag>
                            <Tag color="#2db7f5">#2db7f5</Tag>
                            <Tag color="#87d068">#87d068</Tag>
                            <Tag color="#108ee9">#108ee9</Tag>
                        </div>
                    </Card>
                    </div>
                </Col>
                <Col className="gutter-row" md={18}>
                    <div className="gutter-box">
                        <Card title="地图面板" bordered={false}>
                            <Index />
                        </Card>
                    </div>
                </Col>
                
            </Row>
            <Row gutter={16}>
            <Col className="gutter-row" md={20}>
               </Col>
                <Col className="gutter-row" md={16}>
                    <div className="gutter-box"></div>
                    {/* <Card title="风场面板" bordered={false}>
                            
                    </Card> */}
                </Col>
            </Row>
        </div>
    );
};

export default Airport;
