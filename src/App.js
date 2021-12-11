import './App.scss';
import Modal from './components/Modal';
import PasswordVerifier from './components/PasswordVerifier';

function App() {
  return (
    <div className="App">
      <Modal>
        <h2>Authorization code</h2>
        <p>Please enter the code that we sent to (***) *** - 289</p>
        <PasswordVerifier />
      </Modal>
    </div>
  );
}

export default App;
