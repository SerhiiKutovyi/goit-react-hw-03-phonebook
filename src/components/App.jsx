import styled from 'styled-components';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm ';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    const newUser = {
      id: nanoid(),
      ...data,
    };
    if (this.state.contacts.some(ele => ele.name === data.name)) {
      alert(`${data.name} is already in contacts!`);
      return;
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newUser],
        };
      });
      return;
    }
  };

  filterUsers = event => {
    this.setState({ filter: event.target.value });
  };

  verification = () => {
    if (!this.state.filter) {
      return this.state.contacts;
    } else {
      return this.state.contacts.filter(
        user =>
          user.name.includes(this.state.filter) ||
          user.number.includes(this.state.filter)
      );
    }
  };

  deleteUsers = userId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(user => user.id !== userId),
      };
    });
  };

  render() {
    return (
      <>
        <Section>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmitHandler} />
          <h2>Contacts</h2>
          <Filter filter={this.state.filter} click={this.filterUsers} />

          <ContactList
            contacts={this.verification()}
            deleteUsers={this.deleteUsers}
          />
        </Section>
      </>
    );
  }
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;

  h1 {
    margin-bottom: 40px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;

    color: #000000;
  }

  h2 {
    margin-bottom: 20px;
  }
`;
