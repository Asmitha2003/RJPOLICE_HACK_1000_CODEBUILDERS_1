import logo from './logo.svg';
import './App.css';

function App() {
return (
  <div className="App">

<BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/privacy" element={<Privacy/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/feedback" element={<Feedback/>}/>
        </Routes>
             
</BrowserRouter> 

  </div>
);
}

export default App;
