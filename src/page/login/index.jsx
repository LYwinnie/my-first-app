import React from 'react'
import {Component} from 'react';
import {observer, inject} from 'mobx-react'
import {observable} from 'mobx'
import {withRouter} from 'react-router'
import { Form, Input, Button, Checkbox } from 'antd';
import style from './index.scss'

// @inject('eventStore', 'mainStore', 'userStore')
@observer
class LoginForm extends Component {

    componentWillMount() {

    }

    componentDidMount() {
        
    }

    render() {
        const {history} = this.props;
        const layout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 20 },
        };
        const tailLayout = {
            wrapperCol: { offset: 4, span: 20 },
        };

        const onFinish = values => {
            console.log('Success:', values);
            history.push('/main')
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };
        return (
            <div className="content">
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    className="login-from"
                    >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default LoginForm;
