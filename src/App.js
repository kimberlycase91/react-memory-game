import React, { Component } from 'react';
import CharacterCard from './components/Card/CharacterCard';
import Container from "./components/Container";
import Row from "./components/Row";
import Column from "./components/Column";
import characters from "./characters.json";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      characters,
      score: 0,
      clickedCharacters: []
    }
    this.shuffleCards();
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(character) {
    this.checkWinLose(character);

  }

  shuffle(cardArray) {
    for (let i = cardArray.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i+1));
      [cardArray[i], cardArray[j]] = [cardArray[j], cardArray[i]];
    }
    return cardArray;
  }

  shuffleCards() {
    const currentCharacters = this.state.characters;
    const newCharacters = this.shuffle(currentCharacters);
    this.setState({ characters: newCharacters })
  }

  incrementScore() {
    this.setState({ score: this.state.score + 1 });
    console.log("increment score")
  }

  checkWinLose(character) {
    const { id } = character;
    const isAlreadyClicked = this.state.clickedCharacters.find(storedId => {
      console.log("stored: ", storedId);
      console.log("id: ", id);
      return storedId === id;


    });
    console.log("Already clicked?: ", isAlreadyClicked)
    if (isAlreadyClicked) {
      this.gameLose();
    }
    else if(this.state.score === 11) {
      this.incrementScore();
      this.gameWon();
    }
    else {
      let { clickedCharacters } = this.state;
      clickedCharacters = [].concat(clickedCharacters);
      clickedCharacters.push(id);
      this.setState({ clickedCharacters });
      this.incrementScore();
      this.shuffleCards();
      
    }
    console.log("clicked characters check win: ", this.state.clickedCharacters)
  }

  resetGame() {
    this.setState({ 
        score: 0,
        clickedCharacters: []
     });

  }

  gameWon() {
    this.resetGame();
  }

  gameLose() {
    this.resetGame();
  }


  render() {
    return (
      <Container>
        <div>
          { this.state.score }
        </div>
        <Row>
          { this.state.characters.map(character => {
            return (
              <Column key={character.id} column="col-sm-3">
                <CharacterCard
                  image={character.image}
                  onClick={ () => {
                    this.handleClick (character)
                  }
                }
                />
              </Column>
            )
          })}
        </Row>
      </Container>
    );
  }
}

export default App;
