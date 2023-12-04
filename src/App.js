import './App.css';
import Header from './Components/Header';
import CategoryNav from './Components/CategoryNav'
import MainComponent from './Components/MainComponent'
function App() {
  return (
    <div className="App">
      <Header />
      <CategoryNav />
      <MainComponent />
    </div>
  );
}

export default App;
