
import './App.css'
import Counter from './Components/counter';

const App = () => {
  
  const title= "Counter App";


  return (
    <>
      <div className='body'>
      <Counter title={title} />
      </div>
    </>
  );
};

export default App
