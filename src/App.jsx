import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./components/Modal";
import {
  Container,
  Section,
  Book,
  Info,
  Button,
  ButtonsContainer,
  Title
} from "./styles";

const App = () => {
  const [books, setBooks] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState({});
  const getBooks = async () => {
    try {
      const response = await axios.get(
        "https://softeasy-teste-vaga.rafaelbispo.dev.br/books"
      );
      const { data } = response;
      return setBooks(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  const handleBookOnClick = (clickedBook) => {
    setCurrentBook(clickedBook);
    setOpen(true);
  };

  return (
    <Container>
      <Title>Livraria Softeasy</Title>
      <Section>
        <Button especial>+</Button>
        {books &&
          books.map((book) => (
            <Book key={book.id} onClick={() => handleBookOnClick(book)}>
              <Info>Nome: {book.name}</Info>
              <br />
              <Info>Avaliação: {book.rating}</Info>
              <br />
              <Info>Autor: {book.author}</Info>
              <br />
              <Info>Descrição: {book.description}</Info>
              <ButtonsContainer>
                <Button primary>Editar</Button>
                <Button secundary>Excluir</Button>
              </ButtonsContainer>
            </Book>
          ))}
        <Modal currentBook={currentBook} open={open} setOpen={setOpen} />
      </Section>
    </Container>
  );
};

export default App;
