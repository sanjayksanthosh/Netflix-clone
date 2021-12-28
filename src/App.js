import NavBar from "./Components/NavBar/NavBar";
import { action , Originals , Comedy ,Romance ,Documentaries ,Horror} from "./Components/urls";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/Banner/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={Originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={Comedy} title='Comedy' isSmall />
      <RowPost url={Romance} title='Romance' isSmall />
      <RowPost url={Horror} title='Horror' isSmall />
      <RowPost url={Documentaries} title='Documentaries' isSmall />
    </div>
  );
}

export default App;
