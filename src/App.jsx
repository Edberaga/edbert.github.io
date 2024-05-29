
import Intro from "./components/intro/Intro";
import { List } from "./components/list/List";

const App = () => {
    return (
        <main>
            <section>
                <Intro/>
            </section>

            <section>
                <List/>
            </section>
        </main>
    );
};

export default App;