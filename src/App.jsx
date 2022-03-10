import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Modal from "./components/Modal";

const Container = styled.div`
  display: flex;
  padding: 1rem 20rem;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100vw;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const BookProp = styled.span`
  all: unset;
  font-size: 1.6rem;
  font-family: sans-serif;
  color: white;
  font-weight: bold;
`;

const Book = styled.li`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.5rem;
  list-style: none;
  border-radius: 0.5rem;
  width: 30rem;
  height: 30rem;
  background-color: rgba(255, 255, 255, 0.4);
`;

const App = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const response = await axios.get(
        "https://softeasy-teste-vaga.rafaelbispo.dev.br/books"
      );
      return setBooks(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <Container>
      {books.map((book, index) => (
        <Book key={index}>
          <BookProp>Nome: {book.name}</BookProp>
          <br />
          <BookProp>Avaliação: {book.rating}</BookProp>
          <br />
          <BookProp>Autor: {book.author}</BookProp>
          <br />
          <BookProp>Descrição: {book.description}</BookProp>
        </Book>
      ))}
      <Modal />
    </Container>
  );
};

export default App;
