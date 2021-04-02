import React, { Component } from 'react';
import Container from './Components/Container/Container';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  deleteTodo = todoId => {};

  handleChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  render() {
    return (
      <Container>
        <form>
          <label>
            Имя
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.handleChange}
            />
          </label>
        </form>
      </Container>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header>goit-react-hw-02-phonebook</header>
//     </div>
//   );
// }

export default App;
