import axios from "../services/axios";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  ContainerModal,
  Form,
  Input,
  Label,
  Span,
} from "../styles/modal";
import {
  Button,
  CancelButton,
  ButtonsContainer,
} from "../styles/buttons";

const Modal = ({ currentBook, open, setOpen, action }) => {
    const formik = useFormik({
        initialValues: {
          name: action === "edit" ? currentBook.name : "",
          author: action === "edit" ? currentBook.author : "",
          description: action === "edit" ? currentBook.description : "",
          rating: action === "edit" ? currentBook.rating : "",
        },
        enableReinitialize: true,
        validationSchema:
          action !== "delete" &&
          Yup.object({
            name: Yup.string().required("campo obrigatório"),
            author: Yup.string().required("campo obrigatório"),
            description: Yup.string().required("campo obrigatório"),
            rating: Yup.number()
              .min(1, "1 é a avaliação mínima")
              .max(5, "5 é a avaliação máxima")
              .required("campo obrigatório"),
          }),
        onSubmit: () => {
          selectRequest();
        },
      });

    const selectRequest = () => {
      if (action === "add") return addBook();
      if (action === "edit") return editBook();
      eraseBook();
    };


    const addBook = async () => {
      try {
        await axios.post(`/book`, formik.values);
  
        return setOpen(false);
      } catch (error) {
        console.log(error.message);
      }
    };
  
    const editBook = async () => {
        try {
          await axios.put(`/book/${currentBook.id}`, formik.values);
    
          return setOpen(false);
        } catch (error) {
          console.log(error.message);
        }
    };

    const eraseBook = async () => {
      try {
        await axios.delete(`/book/${currentBook.id}`);
        return setOpen(false);
      } catch (error) {
        console.log(error.message);
      }
    };    

    return (
        <ContainerModal
        onClick={() => setOpen(false)}
        style={{ display: `${open ? "flex" : "none"}` }}
        >
        <Form onSubmit={formik.handleSubmit} onClick={(e) => e.stopPropagation()}>
          {action !== "delete" ? (
            <>
              <Label htmlFor="name">
                Nome
                <Input
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  type="text"
                  id="name"
                  name="name"
                  onBlur={formik.handleBlur}
                />
                <Span>
                {formik.errors && formik.touched.name ? (
                  formik.errors.name
                ) : null}
                </Span>
                
              </Label>
              <Label htmlFor="author">
                Autor
                <Input
                  value={formik.values.author}
                  onChange={formik.handleChange}
                  id="author"
                  name="author"
                  onBlur={formik.handleBlur}
                />
                {formik.errors && formik.touched.author ? (
                  <Span>{formik.errors.author}</Span>
                ) : null}
              </Label>
              <Label htmlFor="description">
                Descrição
                <Input
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  id="description"
                  name="description"
                  onBlur={formik.handleBlur}
                />
                {formik.errors && formik.touched.description ? (
                  <Span>{formik.errors.description}</Span>
                ) : null}
              </Label>
              <Label htmlFor="rating">
                Avaliação
                <Input
                  value={formik.values.rating}
                  onChange={formik.handleChange}
                  name="rating"
                  id="rating"
                  onBlur={formik.handleBlur}
                  type="number"
                />
                {formik.errors && formik.touched.rating ? (
                  <Span>{formik.errors.rating}</Span>
                ) : null}
              </Label>
            </>
          ) : (
            <h2>Tem certeza que deseja excluir?</h2>
          )}
          <ButtonsContainer>
            <Button primary type="submit">
              {action === "edit" && "Atualizar"}
              {action === "delete" && "Sim"}
              {action === "add" && "Adicionar"}
            </Button>
            <CancelButton primary onClick={() => setOpen(false)}>
              {action === "delete" ? "Não" : "Cancelar"}
            </CancelButton>
          </ButtonsContainer>
        </Form>
      </ContainerModal>
      )
}

export default Modal;