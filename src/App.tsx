// Custom Hooks
import useKeyPress from './hooks/useKeyPress';
import useWindowResize from './hooks/useWindowResize';
import useWindowScroll from './hooks/useWindowScroll';
import useLocalStorage from './hooks/useLocalStorage';
import useCookies from './hooks/useCookies';

// Styles
import './App.css'


const App = () => {
	const key = useKeyPress();
	const windowSize = useWindowResize();
	const scrollPosition = useWindowScroll();
	const [ name, setName ] = useLocalStorage('name', 'Harsh');
	const { getCookie, setCookie, removeCookie } = useCookies();

	 // Set a cookie on button click
	const handleSetCookie = () => {
		setCookie("user", "JohnDoe", { expires: 7 }); // Set cookie for 7 days
	};
	
	  // Retrieve the cookie value
	const handleGetCookie = () => {
		const cookieValue = getCookie("user");
		alert(`Cookie value: ${cookieValue}`);
	};
	
	  // Remove the cookie
	const handleRemoveCookie = () => {
		removeCookie("user");
		alert("Cookie removed");
	};

	return (
		<>
			<div onClick={ () => setName('Crow') }>
				React Hooks
				<button onClick={handleSetCookie}>Set Cookie</button>
				<button onClick={handleGetCookie}>Get Cookie</button>
				<button onClick={handleRemoveCookie}>Remove Cookie</button>
			</div>
		</>
	);
};


export default App;