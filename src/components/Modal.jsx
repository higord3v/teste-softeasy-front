import { useState, useEffect } from "react";
import {
  ContainerModal,
  Form,
  Input,
  Button,
  ButtonsContainer,
} from "../styles";

const Modal = ({ currentBook, open, setOpen, action }) => {
  const [inputs, setInputs] = useState({
    name: "",
    author: "",
    description: "",
    rating: "",
  });

  const handleInputsOnChange = (target) => {
    setInputs({ ...inputs, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setOpen(false);
  };

  useEffect(() => {
    if (action === "add" || !open) {
      return setInputs({
        name: "",
        author: "",
        description: "",
        rating: "",
      });
    }

    setInputs({
      name: currentBook.name,
      author: currentBook.author,
      description: currentBook.description,
      rating: currentBook.rating,
    });
  }, [open]);

  return (
    <ContainerModal
      onClick={() => setOpen(false)}
      style={{ display: `${open ? "flex" : "none"}` }}
    >
      <Form
        type="submit"
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        {action !== "delete" ? (
          <>
            <label htmlFor="name" style={{ fontSize: "2rem" }}>
              Nome
            </label>
            <Input
              value={inputs.name}
              onChange={(e) => handleInputsOnChange(e.target)}
              type="text"
              required
              id="name"
              name="name"
            />
            <label htmlFor="author" style={{ fontSize: "2rem" }}>
              Autor
            </label>
            <Input
              onChange={(e) => handleInputsOnChange(e.target)}
              value={inputs.author}
              type="text"
              id="author"
              name="author"
              required
            />
            <label htmlFor="description" style={{ fontSize: "2rem" }}>
              Descrição
            </label>
            <Input
              onChange={(e) => handleInputsOnChange(e.target)}
              value={inputs.description}
              type="text"
              required
              id="description"
              name="description"
            />
            <label htmlFor="rating" style={{ fontSize: "2rem" }}>
              Avaliação
            </label>
            <Input
              onChange={(e) => handleInputsOnChange(e.target)}
              value={inputs.rating}
              name="rating"
              type="number"
              required
              min="1"
              max="10"
              id="rating"
              style={{ textAlign: "center" }}
            />
          </>
        ) : (
          <h2>Tem certeza que deseja excluir?</h2>
        )}
        <ButtonsContainer>
          <Button primary action="submit">
            {action === "edit" && "Atualizar"}
            {action === "delete" && "Sim"}
            {action === "add" && "Adicionar"}
          </Button>
          <Button secundary action="submit">
            {action === "delete" ? "Não" : "Cancelar"}
          </Button>
        </ButtonsContainer>
      </Form>
    </ContainerModal>
  );
};

export default Modal;
