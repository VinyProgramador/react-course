//css
import './App.css';

//React
import { useCallback, useEffect, useState } from 'react';

//data
import { wordsList } from './data/words';

//components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';


const stages = [
  { id: 1, name: 'start', },
  { id: 2, name: 'game', },
  { id: 3, name: 'end', },
];


function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);


  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  const [guessLetters, setGuessLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    //pegando uma categoria aleatoria
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    console.log(category)

    //pegando uma palavra desta categoria aleatoria
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word);

    return { word, category };
  },[words]);

  //Início do jogo
  const startGame = useCallback( () => {
    // limpando as palavras
    clearLetterStates()
    // escolhendo a palavra e escolhendo a categoria
    const { word, category } = pickWordAndCategory();
    let wordLetters = word.split('');
    wordLetters = wordLetters.map((l) => l.toLowerCase());
    //pegando a palavra e transformando em letras
    console.log(word, category);
    console.log(wordLetters)

    //setando os estados
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
    }, [pickWordAndCategory]);

  //verfificando a palavra
  const verifyLetter = (letter) => {
    console.log(letter)
    const normalizedLetter = letter.toLowerCase();

    // verificadno se a letra já foi utilizada de alguma maneira
    if (guessLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
        return
    }
    //incluir letras qu o usuario adinha para as letras erradas ou corretas
    if (letters.includes(normalizedLetter)) {
      setGuessLetters((actualGuessLetters) => [
        ...actualGuessLetters,
        normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1)
    }
    console.log(guessLetters)
    console.log(wrongLetters)
  }


  const clearLetterStates = () => {
    setGuessLetters([]);
    setWrongLetters([]);
  }

  useEffect(() => {
    // aqui estou fazendo um verificação se as tentativas já acabaram, e se sim eu vou para tela de finalizar
    // se cair aqui dentro tenho que resetar todos os states  

    if (guesses <= 0) {
      clearLetterStates();
      setGameStage(stages[2].name)
    }
  }, [guesses])

  // checando condição de vitoria
  useEffect(() => {

    const uniqueLetters = [...new Set(letters)]

    //condição de vitoria
    if (guessLetters.length === uniqueLetters.length) {
      // adicionar pontos
      setScore((actualScore) => actualScore += 100)
      startGame();
    }

    //contunar jogo com uma nova palavra
    
  }, [guessLetters, letters, startGame])

  //reinicializar o jogo
  const retry = () => {
    setScore(0);
    setGuesses(3);
    setGameStage(stages[0].name);
  }
  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game
        verifyLetter={verifyLetter}
        pickedWord={pickedWord}
        pickedCategory={pickedCategory}
        letters={letters}
        guessLetters={guessLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
      />}
      {gameStage === 'end' && <GameOver
        retry={retry}
        score={score} />}
    </div>
  );
}

export default App;
