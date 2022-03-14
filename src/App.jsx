import { useState, useEffect } from "react";
import axios from "./services/axios";
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
      const response = await axios.get('/book');
      const { data } = response;
      setBooks([...data]);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const listBooks = () => {
      getBooks();
    };
    listBooks();
  }, [open]);

  const handleSetCurrentBook = (clickedBook) => {
    setOpen(true);
    setCurrentBook({ ...clickedBook });
  };

  const handleEditOnClick = (clickedBook) => {
    handleSetCurrentBook(clickedBook);
    setAction("edit");
  };

  const handleDeleteOnClick = (clickedBook) => {
    handleSetCurrentBook(clickedBook);
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
              <Info style={{textAlign: 'left'}}>Descrição: {book.description}</Info>
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
          setBooks={setBooks}
        />
      </Section>
    </Container>
  );
};

export default App;
