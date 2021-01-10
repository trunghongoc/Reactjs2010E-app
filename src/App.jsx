import { Provider } from 'react-redux'
import store from './redux/store'

import Button from './components/Button'
import CounterValue from './components/CouterValue'
import User from './components/User'

function App() {
  return (
    <Provider store={store}>
      <h1>Redux in Reactjs</h1>

      <Button />
      <CounterValue />
      <User />
    </Provider>
  );
}

export default App;
