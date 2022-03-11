import { useState, useEffect } from "react";
import { ContainerModal, Form, Input, Button } from "../styles";

const Modal = ({ currentBook, open, setOpen }) => {
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
    if (!open) return;
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
        <Button primary action="submit">
          Atualizar
        </Button>
      </Form>
    </ContainerModal>
  );
};

export default Modal;
