// import './App.scss'
// import logo from 'assets/logo.svg'
import Logo from 'components/Logo/Logo'
import Button from 'components/Button/Button'
import FormIcon from 'components/FormIcon/FormIcon'
import Checkbox from 'components/Checkbox/Checkbox'

function App() {
  return (
    <>
      <Logo title="coupang" />
      <Button />
      <FormIcon />
      <Checkbox />
    </>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> 문서를 수정하면 실시간 업데이트 됩니다
        </p>
        <a
          className="App-link"
          href="https://ko.reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          React를 배워보세요
        </a>
      </header>
    </div>*/
  )
}

export default App
