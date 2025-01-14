import { Header } from './components/Header'

import styles from './app.module.css'
import { Tip } from './components/Tip'
import { Letter } from './components/Letter'

function App() {

  function handleRestartGame() {
    alert('Game restart')
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />
        <Tip tip="Uma das linguagens de programação mais utilizadas no mundo" />

        <Letter value="J" />
      </main>
    </div>
  )
}

export default App
