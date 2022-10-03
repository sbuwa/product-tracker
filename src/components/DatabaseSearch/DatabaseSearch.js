import { Form, Input, Select, Button, Table } from 'antd'
import React from 'react'
import './DatabaseSearch.scss'
import dummyData from '../../data/data-source.json'

const columnData = [
	{
		title: 'Part Number',
		dataIndex: 'PART_NUMBER',
		key: 'PART_NUMBER',
	},
	{
		title: 'Part Description',
		dataIndex: 'DESCRIPTION',
		key: 'DESCRIPTION',
	},
	{
		title: 'Supplier',
		dataIndex: 'SUPPLIER',
		key: 'SUPPLIER',
	},
]
const { Option } = Select
const layout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 16 },
}
const tailLayout = {
	wrapperCol: { offset: 4, span: 16 },
}

export default function DatabaseSearch() {
	const [form] = Form.useForm()

	const onSelectChange = (value) => {
		// switch (value) {
		// 	case 'male':
		// 		form.setFieldsValue({ note: 'Hi, man!' })
		// 		return
		// 	case 'female':
		// 		form.setFieldsValue({ note: 'Hi, lady!' })
		// 		return
		// 	case 'other':
		// 		form.setFieldsValue({ note: 'Hi there!' })
		// }
	}

	const onFinish = (values) => {
		// console.log(values)
		let searchData = []
		if (values.selectType === 'pNo') {
			for (let i = 0; i < dummyData.length; i++) {
				if (dummyData[i].PART_NUMBER === values.inputSearch) {
					searchData.push(...searchData, dummyData[i])
				}
			}
		} else if (values.selectType === 'pDesc') {
			for (let i = 0; i < dummyData.length; i++) {
				if (
					dummyData[i].DESCRIPTION.includes(
						values.inputSearch.toLowerCase
					)
				) {
					console.log('desc if', searchData)
					searchData.push(...searchData, dummyData[i])
				}
			}
		} else {
			for (let i = 0; i < dummyData.length; i++) {
				if (dummyData[i].SUPPLIER === values.inputSearch) {
					console.log('supp if', searchData)
					searchData.push(...searchData, dummyData[i])
				}
			}
		}
		// console.log(searchData)
	}

	const onReset = () => {
		form.resetFields()
	}
	return (
		<div className='db-layout'>
			<div className='form-container'>
				<Form
					{...layout}
					form={form}
					name='control-hooks'
					onFinish={onFinish}
					// style={{ width: '400px' }}
				>
					<Form.Item
						name='inputSearch'
						label='Search'
						rules={[{ required: true }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name='selectType'
						label='Type'
						rules={[{ required: true }]}
					>
						<Select
							placeholder='Select an option'
							onChange={onSelectChange}
							allowClear
						>
							<Option value='pNo'>Part Number</Option>
							<Option value='pDesc'>Part Desc.</Option>
							<Option value='supplier'>Supplier</Option>
						</Select>
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
			<br />
			<div className='table-container'>
				<Table dataSource={dummyData} columns={columnData} />
			</div>
		</div>
	)
}
