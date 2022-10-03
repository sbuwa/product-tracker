import React from 'react'
import DatabaseSearch from '../DatabaseSearch/DatabaseSearch'
import NotesSidebar from '../NotesSidebar/NotesSidebar'
import { Layout } from 'antd'

const { Sider, Content } = Layout

export default function Dashboard() {
	return (
		<div className=''>
			<Layout>
				<Content>
					<DatabaseSearch />
				</Content>
				<Sider width={300}>
					<NotesSidebar />
				</Sider>
			</Layout>
		</div>
	)
}
