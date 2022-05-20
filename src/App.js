import { useState , useCallback} from 'react';
import Button from './components/UI/Button'
import './App.css';
import DemoOutput from './components/DemoOutput/DemoOutput';

function App() {
  console.log("App Running");
  const [showParagraph, setShowParagraph] = useState(false);
  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((previousShowParagrpah)=> !previousShowParagrpah);
  },[]);
  
  return (
    <div className="app">
      <h1>Hi there!</h1>
       <DemoOutput show={showParagraph}/>
      <Button onClick={toggleParagraphHandler}>Show Paragraph !</Button>
    </div>
  );
}

export default App;
