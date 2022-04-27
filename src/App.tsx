import './App.scss';
//@ts-ignore
import StatusContainer from './Components/StatusContainer.tsx'

const App = () => {
  return (
    <div className="app">
      <h1 className='app__title'>Тестовое задание frontend-разработчика</h1>
        <StatusContainer></StatusContainer>
    </div>
  )
}



export default App;
