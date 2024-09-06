// Custom Hooks
import useKeyPress from './hooks/useKeyPress';
import useLocalStorage from './hooks/useLocalStorage';

// Styles
import './App.css'


const App = () => {
	const key = useKeyPress();
	const [ name, setName ] = useLocalStorage('name', 'Harsh');
	console.log(name);
	return (
		<>
			<div onClick={ () => setName('Crow') }>
				React Hooks
			</div>
		</>
	);
};


export default App;