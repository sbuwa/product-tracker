import React from 'react'
import { Form, Input, Button } from 'antd'
import './LoginPage.scss'

const layout = {
	labelCol: { span: 0 },
	wrapperCol: { span: 32 },
}
const tailLayout = {
	wrapperCol: { offset: 6, span: 32 },
}

export default function LoginPage() {
	const [form] = Form.useForm()

	const onFinish = (values) => {
		// console.log(values)
		// console.log(searchData)
	}

	const onReset = () => {
		form.resetFields()
	}

	return (
		<div className='login'>
			<div className='login-container'>
				<h1>Login Form</h1>
				<Form
					{...layout}
					form={form}
					name='control-hooks'
					onFinish={onFinish}
					// style={{ width: '400px' }}
				>
					<Form.Item name='Username' rules={[{ required: true }]}>
						<Input placeholder='Username' />
					</Form.Item>
					<Form.Item name='Password' rules={[{ required: true }]}>
						<Input placeholder='Password' />
					</Form.Item>
					<Form.Item {...tailLayout}>
						<Button type='primary' htmlType='submit'>
							Submit
						</Button>
						<Button
							htmlType='button'
							onClick={onReset}
							style={{ marginLeft: '1em' }}
						>
							Reset
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	)
}
