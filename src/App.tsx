// Custom Hooks
import useKeyPress from './hooks/useKeyPress';

// Styles
import './App.css'


const App = () => {
	const key = useKeyPress();
	console.log('Key: ', key);
	return (
		<>
			<div>
				React Hooks
			</div>
		</>
	);
};


export default App;