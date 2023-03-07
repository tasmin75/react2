
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Comp1 from './Components/Comp1';
import Comp2 from './Components/Comp2';
import Comp3 from './Components/Comp3';
import Heading1 from './Components/Heading1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <section>
        <Heading1 heading="Register here..." button="submit"/>
        <Comp1 heading="Register here.."/>
        <Comp2/>
        <Comp3 button="submit"/>
    </section>
);
