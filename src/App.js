import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import LoginPage from './components/LoginPage/LoginPage'
import Dashboard from './components/Dashboard/Dashboard'
import './App.scss'

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<LoginPage />} />
					<Route path='/dashboard' element={<Dashboard />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
