import { useEffect, useState } from 'react'
import styles from './app.module.css'

import { WORDS, Challenge } from './utils/words'

import { Header } from './components/Header'
import { Tip } from './components/Tip'
import { Letter } from './components/Letter'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { LettersUsed } from './components/LettersUsed'

function App() {
  const [letter, setLetter] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [challenge, setChallenge] = useState<Challenge | null>(null);

  function handleRestartGame() {
    alert('Game restart')
  }

  function starGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[index];

    setChallenge(randomWord);

    setAttempts(0);
    setLetter("");
  }

  useEffect(() => {
    starGame();
  }, []);

  if(!challenge) {
    return
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handleRestartGame} />

        <Tip tip="Uma das linguagens de programação mais utilizadas no mundo" />

        <div className={styles.word}>
          {challenge.word.split("").map(() => (
            <Letter value="" />
          ))}
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder='?' />

          <Button title="Confirmar" onClick={() => {}} />
        </div>

        <LettersUsed />
      </main>
    </div>
  )
}

export default App
