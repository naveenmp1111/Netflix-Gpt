
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import  appStore from './utils/appStore';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
      <Body/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
