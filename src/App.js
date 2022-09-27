import Dashboard from './components/Dashboard'
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
				<Sider>Sider</Sider>
			</Layout>
		</div>
	)
}

export default App
