/*
 * File: Sub1.tsx
 * Desc: 新文件上传
 */
import React from 'react';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';

import {
    Form,
    Select,
    InputNumber,
    Switch,
    Radio,
    Slider,
    Button,
    Upload,
    Rate,
    Checkbox,
    Row,
    Col,
    Card,
  } from 'antd';
  import MyRater from '../ui/MyRate'
  import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
  

const SmenuSub1 = () => {

    const { Option } = Select;

    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
      };

      const normFile = (e: any) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
      };

    const onFinish = (values: any) => {
          console.log('Received values of form: ', values);
    };
    return (
        <div>
            <BreadcrumbCustom breads={['上传图片']} />
            <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
      }}
    >
      <Form.Item label="上传图片">
        <span className="ant-form-text">上传图片</span>
      </Form.Item>
      <Form.Item
        name="dataType"
        label="选择上载数据类型"
        hasFeedback
        rules={[{ required: true, message: '请选择一种上载数据类型' }]}
      >
        <Select placeholder="请选择一种上载数据类型">
          <Option value="RPGpictuer">RPG图片文件</Option>
          <Option value="other">其他文件类型</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="pictureLabels"
        label="图片标签"
        rules={[{ required: true, message: '图片标签', type: 'array' }]}
      >
        <Select mode="multiple" placeholder="图片标签">
          <Option value="SAR">SAR</Option>
          <Option value="green">遥感图像</Option>
          <Option value="blue">青岛XX区</Option>
        </Select>
      </Form.Item>

      {/* <Form.Item label="InputNumber">
        <Form.Item name="input-number" noStyle>
          <InputNumber min={1} max={10} />
        </Form.Item>
        <span className="ant-form-text"> machines</span>
      </Form.Item> */}

      <Form.Item name="switch" label="是否为共享文件" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Form.Item name="slider" label="是否采用压缩算法">
        <Slider
          marks={{
            0: '压缩',
            25: '速率优先',
            50: '压缩率优先',
            75: '无损压缩',
            100: '不压缩',
          }}
        />
      </Form.Item>

      {/* <Form.Item name="radio-group" label="Radio.Group">
        <Radio.Group>
          <Radio value="a">item 1</Radio>
          <Radio value="b">item 2</Radio>
          <Radio value="c">item 3</Radio>
        </Radio.Group>
      </Form.Item> */}

      {/* <Form.Item
        name="radio-button"
        label="Radio.Button"
        rules={[{ required: true, message: 'Please pick an item!' }]}
      >
        <Radio.Group>
          <Radio.Button value="a">item 1</Radio.Button>
          <Radio.Button value="b">item 2</Radio.Button>
          <Radio.Button value="c">item 3</Radio.Button>
        </Radio.Group>
      </Form.Item> */}

      <Form.Item name="checkbox-group" label="文件分组">
        <Checkbox.Group>
          <Row>
            <Col span={8}>
              <Checkbox value="A" style={{ lineHeight: '32px' }}>
                A
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="B" style={{ lineHeight: '32px' }} disabled>
                B
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="C" style={{ lineHeight: '32px' }}>
                C
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="D" style={{ lineHeight: '32px' }}>
                D
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="E" style={{ lineHeight: '32px' }}>
                E
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="F" style={{ lineHeight: '32px' }}>
                F
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item name="rate" label="文件标记">
        <MyRater />
      </Form.Item>

      {/* <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="longgggggggggggggggggggggggggggggggggg"
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item> */}

      <Form.Item label="Dragger">
        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        </div>
    );
};

export default SmenuSub1;
