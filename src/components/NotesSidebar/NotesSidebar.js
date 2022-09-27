import React from 'react'
import { Form, Input, Button } from 'antd'
import Note from '../Note/Note'
import './NotesSidebar.scss'

let notes = [
	{
		id: '1',
		name: 'Gary Goodspeed',
		message: 'This is an example of dnd editor',
	},
	{
		id: 'cato',
		name: 'Little Cato',
		message: 'This is an example of dnd editor',
	},
	{
		id: 'kvn',
		name: 'KVN',
		message: 'This is an example of dnd editor',
	},
	{
		id: 'mooncake',
		name: 'Mooncake',
		message: 'This is an example of dnd editor',
	},
	{
		id: 'quinn',
		name: 'Quinn Ergon',
		message: 'This is an example of dnd editor',
	},
	{
		id: 'kvn',
		name: 'KVN',
		message: 'This is an example of dnd editor',
	},
	{
		id: 'mooncake',
		name: 'Mooncake',
		message: 'This is an example of dnd editor',
	},
	{
		id: 'quinn',
		name: 'Quinn Ergon',
		message: 'This is an example of dnd editor',
	},
]

const layout = {
	labelCol: { span: 0 },
	wrapperCol: { span: 32 },
}
const tailLayout = {
	wrapperCol: { offset: 2, span: 32 },
}

export default function NotesSidebar() {
	const [form] = Form.useForm()

	const onFinish = (values) => {
		// console.log(values)
		// console.log(searchData)
	}

	const onReset = () => {
		form.resetFields()
	}

	return (
		<div className='notes-container'>
			<h1>Notes</h1>
			<ul className='notes-list'>
				{notes.map(({ name, message }) => {
					return <Note title={name} content={message} />
				})}
			</ul>
			<div className='add-note'>
				<div className='note-form-container'>
					<Form
						{...layout}
						form={form}
						name='control-hooks'
						onFinish={onFinish}
						// style={{ width: '400px' }}
					>
						<Form.Item name='Title' rules={[{ required: true }]}>
							<Input placeholder='Title' />
						</Form.Item>
						<Form.Item name='Content' rules={[{ required: true }]}>
							<Input placeholder='Content' />
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
		</div>
	)
}
