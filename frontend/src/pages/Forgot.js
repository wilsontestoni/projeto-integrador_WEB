import PageWrapper from "../styles/LoginRegisterForgot/PageWrapper";
import Title from "../styles/LoginRegisterForgot/Title";
import FormWrapper from "../styles/LoginRegisterForgot/FormWrapper";
import Input from "../styles/LoginRegisterForgot/Input";
import Button from "../styles/LoginRegisterForgot/Button";
import { LinkAnimated } from "../styles/LoginRegisterForgot/LinkAnimated"
import emailLogo from "../images/email.svg";

function Forgot() {

  return (
    <PageWrapper>
      <FormWrapper $semBG>
        <Title>Recuperar senha</Title>
        <form>
          <div>
            <Input
              imgUrl={emailLogo}
              type="email"
              placeholder="Digite o seu email"
              required
            />
          </div>
          <Button type="submit">Enviar</Button>
        </form>

        <div className="text-center mt-3">
          <LinkAnimated to={"/login"}>Voltar para login</LinkAnimated>
        </div>
      </FormWrapper>
    </PageWrapper>
  );
}

export default Forgot;
