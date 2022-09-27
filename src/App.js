import Dashboard from './components/Dashboard/Dashboard'
import NotesSidebar from './components/NotesSidebar/NotesSidebar'
import './App.scss'
import { Layout } from 'antd'

const { Sider, Content } = Layout

function App() {
	return (
		<div className='App'>
			<Layout>
				<Content>
					<Dashboard />
				</Content>
				<Sider width={300}>
					<NotesSidebar />
				</Sider>
			</Layout>
		</div>
	)
}

export default App
