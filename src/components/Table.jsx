import { useState, useEffect } from 'react'
import {
    TableContainer,
    TableHead,
    TableLine
  } from '../styles';
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { mock } from '../mockdata'
import axios from '../services/axios'
import Modal from './Modal'

const Table = ({ books, setBooks, open, setOpen, action, setAction, getBooks }) => {
  const [currentBook, setCurrentBook] = useState({});

  useEffect(() => {
    (async () => {
      const loadedBooks = await getBooks();
      setBooks([...loadedBooks]);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const loadedBooks = await getBooks();
      setBooks([...loadedBooks]);
    })();
  }, [open]);

  useEffect(() => {
    const listBooks = () => {
      getBooks();
    };
    listBooks();
  }, [open]);

  const handleEditOnClick = (clickedBook) => {
    handleSetCurrentBook(clickedBook);
    setAction("edit");
  };

  const handleDeleteOnClick = (clickedBook) => {
    handleSetCurrentBook(clickedBook);
    setAction("delete");
  };

  const handleSetCurrentBook = (clickedBook) => {
    setOpen(true);
    setCurrentBook({ ...clickedBook });
  };

    return (
        <TableContainer>
          <TableHead>
            <span>Nome</span>
            <span>Autor</span>
            <span>Descrição</span>
            <span>Avaliação</span>
            <span>Ações</span>
          </TableHead>
          {
            books.map((item, index) => (
              <TableLine key={index}>
                <span>{item.name}</span>
                <span>{item.author}</span>
                <span>{item.description}</span>
                <Box>
                  <Rating
                    className="rating"
                    size="medium"
                    max={5}
                    sx={{color: 'rgb(0, 149, 64)'}}
                    value={Number(item.rating)}
                    readOnly
                  />
                </Box>
                <div>
                  <FaTrashAlt
                    onClick={() => handleDeleteOnClick(item)}
                    style={{ color: 'red'}}
                  />
                  <FaRegEdit
                    onClick={() => handleEditOnClick(item)}
                    style={{
                      color: 'rgb(0, 149, 64)',
                      marginLeft: '0.5rem'
                    }}
                  />
                </div>
              </TableLine>
            ))
          }
        <Modal
          currentBook={currentBook}
          open={open}
          setOpen={setOpen}
          action={action}
          setBooks={setBooks}
          currentBook={currentBook}
        />
        </TableContainer>
    )
}

export default Table;