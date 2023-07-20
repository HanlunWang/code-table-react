import React from "react";
import { Form, Input, Button } from 'antd';

export default class AddOption extends React.Component {
    formRef = React.createRef();

    state = {
        error: undefined
    };

    handleAddOption = (option) => {
        const { code, quantity } = option;
        option.key = `${option.code}`;
        this.formRef.current.resetFields();
        this.props.handleAddOption(option);
    };

    render() {
        const codePattern = /^[A-Za-z]{3}\d$/;
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}

                <Form className="add-option" onFinish={this.handleAddOption} ref={this.formRef}>
                    <Form.Item className="add-option__input" label="Code" name="code" rules={[
                        { required: true, message: 'Please enter a code' },
                        {
                            pattern: codePattern,
                            message: 'Code should consist of 3 letters followed by 1 digit'
                        }
                    ]}>
                        <Input placeholder="Enter code" />
                    </Form.Item>

                    <Form.Item className="add-option__input" label="Quantity" name="quantity" rules={[{ required: true, message: 'Please enter a quantity' }]}>
                        <Input placeholder="Enter quantity" type="number" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">Add</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}