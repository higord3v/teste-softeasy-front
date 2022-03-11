import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./components/Modal";
import {
  Container,
  Section,
  BookCard,
  Info,
  Button,
  ButtonsContainer,
  Title,
} from "./styles";

const App = () => {
  const [books, setBooks] = useState([]);
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState("");

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

  const handleEditOnClick = (clickedBook) => {
    setCurrentBook(clickedBook);
    setOpen(true);
    setAction("edit");
  };

  const handleDeleteOnClick = (clickedBook) => {
    setOpen(true);
    setCurrentBook(clickedBook);
    setAction("delete");
  };

  const handleAddBookOnClick = () => {
    setOpen(true);
    setAction("add");
  };

  return (
    <Container>
      <Title>Livraria Softeasy</Title>
      <Section>
        <Button onClick={() => handleAddBookOnClick()} especial>
          +
        </Button>
        {books &&
          books.map((book) => (
            <BookCard key={book.id}>
              <Info>Nome: {book.name}</Info>
              <br />
              <br />
              <Info>Autor: {book.author}</Info>
              <br />
              <Info>Descrição: {book.description}</Info>
              <Info>Avaliação: {book.rating}</Info>
              <ButtonsContainer>
                <Button onClick={() => handleEditOnClick(book)} primary>
                  Editar
                </Button>
                <Button onClick={() => handleDeleteOnClick(book)} secundary>
                  Excluir
                </Button>
              </ButtonsContainer>
            </BookCard>
          ))}
        <Modal
          currentBook={currentBook}
          open={open}
          setOpen={setOpen}
          action={action}
        />
      </Section>
    </Container>
  );
};

export default App;
