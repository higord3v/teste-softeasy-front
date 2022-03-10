import { useState } from "react";
import styled from "styled-components";

const ContainerModal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
`;
const Form = styled.form`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 50vh;
  width: 30rem;
  background-color: #fff;
  border-radius: 1rem;
`;
const Input = styled.input`
  all: unset;
  padding: 0.2rem;
  font-size: 2rem;
  border: 0.2rem solid tomato;
  border-radius: 0.3rem;
`;

const Modal = () => {
  const [open, setOpen] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
        <Input type="text" id="name" />
        <label htmlFor="author" style={{ fontSize: "2rem" }}>
          Autor
        </label>
        <Input type="text" id="author" />
        <label htmlFor="description" style={{ fontSize: "2rem" }}>
          Descrição
        </label>
        <Input type="text" id="description" />
        <label htmlFor="rating" style={{ fontSize: "2rem" }}>
          Avaliação
        </label>
        <Input type="number" min="1" max="10" id="rating" />
        <button action="submit">Atualizar</button>
      </Form>
    </ContainerModal>
  );
};

export default Modal;
