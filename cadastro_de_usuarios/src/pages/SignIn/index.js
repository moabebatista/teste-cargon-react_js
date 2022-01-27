import { Form } from "@rocketseat/unform";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import InputWrapper from "../../components/Formularios/InputGroup";
import { signInRequest } from "../../store/modules/auth/actions";

const schema = Yup.object().shape({
  email: Yup.string().email("Insira um e-mail válido"),
  password: Yup.string(),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signInRequest());
  }

  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <span>Não há necessidade de preencher os campos</span>
      <InputWrapper
        labelName="E-MAIL"
        inputName="email"
        inputType="email"
        inputPlaceholder="exemplo@email.com"
      />
      <InputWrapper
        labelName="SENHA"
        inputName="password"
        inputType="password"
        inputPlaceholder="*********"
      />
      <button type="submit">Entrar</button>
    </Form>
  );
}

