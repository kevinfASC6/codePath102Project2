import './App.css';  
import Random from './components/Random';  
import Input from './components/Input'; 

const App = () => {

  return (
    <div className="App">
      <h1>"Hello" in 12 different languages!</h1>  
      <h3>In how many languages can you say "hello" in? Test your knowledge here!</h3>  
      <h4>Pink is Easy, Blue is Medium, and Green is hard!</h4>
      <h5>Number of cards: 12</h5>  
      <Random /> 
      {/* Placeholder for Card component */}

    </div>
  )
}

export default App
