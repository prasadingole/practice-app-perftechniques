import { useState , useCallback} from 'react';
import Button from './components/UI/Button'
import './App.css';
import DemoOutput from './components/DemoOutput/DemoOutput';

function App() {
  console.log("App Running");
  const [showParagraph, setShowParagraph] = useState(false);
  const [toggleParagraphButton, setToggleParagraphButton] = useState(false);
  const toggleParagraphHandler = useCallback(() => {
    if(toggleParagraphButton){
    setShowParagraph((previousShowParagrpah)=> !previousShowParagrpah);
    }
  },[toggleParagraphButton]);

  const toggleParagraphButtonHandler = () => {
    setToggleParagraphButton((toggleParagraphButton)=> {
      return !toggleParagraphButton;
    })
  }
  
  return (
    <div className="app">
      <h1>Hi there!</h1>
       <DemoOutput show={showParagraph}/>
       <Button onClick={toggleParagraphButtonHandler}>Toggle Show Paragraph Button Effect !</Button>
       <Button onClick={toggleParagraphHandler}>Show Paragraph !</Button>
    </div>
  );
}

export default App;
