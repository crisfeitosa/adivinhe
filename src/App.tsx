import { Header } from './components/Header'

import styles from './app.module.css'
import { Tip } from './components/Tip'
import { Letter } from './components/Letter'
import { Input } from './components/Input'

function App() {

  function handleRestartGame() {
    alert('Game restart')
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />

        <Tip tip="Uma das linguagens de programação mais utilizadas no mundo" />

        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="E" />
          <Letter value="A" />
          <Letter value="C" />
          <Letter value="T" />
        </div>

        <h4>Palpite</h4>

        <div>
          <Input autoFocus maxLength={1} placeholder='?' />
        </div>
      </main>
    </div>
  )
}

export default App
