// Custom Hooks
import useKeyPress from './hooks/useKeyPress';
import useWindowResize from './hooks/useWindowResize';
import useWindowScroll from './hooks/useWindowScroll';
import useLocalStorage from './hooks/useLocalStorage';

// Styles
import './App.css'


const App = () => {
	const key = useKeyPress();
	const windowSize = useWindowResize();
	const scrollPosition = useWindowScroll();
	const [ name, setName ] = useLocalStorage('name', 'Harsh');
	console.log(scrollPosition);
	return (
		<>
			<div onClick={ () => setName('Crow') }>
				React Hooks
			</div>
		</>
	);
};


export default App;