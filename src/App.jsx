import { useState, useEffect } from 'react'
import Header from './components/Header';
import Table from './components/Table';
import { Container, MainInput } from './styles';
import axios from './services/axios'

const App = () => {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const handleSearch = async () => {
      const newList = await getBooks();
      if (!searchInput) return setBooks([...newList]);
      setBooks(
        [...newList].filter((b) =>
          b.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    };
    handleSearch();
  }, [searchInput]);


  const getBooks = async () => {
    try {
      const response = await axios.get("/book");
      const { data } = response;
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    <Container primary>
      <Container secundary>
        <Header
          open={open}
          setOpen={setOpen}
          action={action}
          setAction={setAction}
        />
        <MainInput 
          placeholder={'Buscar...'}
          onChange={e => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <Table
          books={books} 
          setBooks={setBooks} 
          open={open}
          setOpen={setOpen}
          action={action}
          setAction={setAction}
          getBooks={() => getBooks()}
        />
      </Container>
    </Container>
  )
}

export default App
