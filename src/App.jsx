import About from "./components/about/About";
import { Education } from "./components/education/Education";
import Intro from "./components/intro/Intro";
import { List } from "./components/list/List";


const App = () => {
    return (
        <div>
            <Intro/>
            <Education/>
            <List/>
            <About/>
        </div>
    );
};

export default App;