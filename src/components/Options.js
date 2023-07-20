import React from "react";
import { Space, Table, Button, InputNumber } from 'antd';

const { Column } = Table;

const Options = (props) => (
    <Table dataSource={props.data} pagination={false}>
        <Column title="Code" dataIndex="code" key="code" />
        <Column
            title="Quantity"
            dataIndex="quantity"
            key="quantity"
            render={(text, record) => (
                <InputNumber
                    defaultValue={text}
                    type="number"
                    onChange={() => props.handleChangeQuantity(record.key, record.quantity)}

                />)}
        />
        <Column
            title="Action"
            key="action"
            render={(_, record) => (
                <Space size="middle">
                    <Button
                        danger
                        type="text"
                        htmlType="submit"
                        className="option__content"
                        onClick={() => props.handleDeleteOption(record.key)}
                    >
                        Delete</Button>
                </Space>
            )}
        />
    </Table>
);

export default Options;