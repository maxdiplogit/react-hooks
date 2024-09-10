// Custom Hooks
import useKeyPress from './hooks/useKeyPress';
import useLocalStorage from './hooks/useLocalStorage';

// Styles
import './App.css'
import useWindowResize from './hooks/useWindowResize';


const App = () => {
	const key = useKeyPress();
	const windowSize = useWindowResize();
	const [ name, setName ] = useLocalStorage('name', 'Harsh');
	console.log(windowSize);
	return (
		<>
			<div onClick={ () => setName('Crow') }>
				React Hooks
			</div>
		</>
	);
};


export default App;