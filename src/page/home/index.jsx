import TablePrincing from "../../components/tablePrincing";
import { Content, Container } from "./style";

const Home = () => {
  return (
    <Content>
      <Container>
        <TablePrincing
          descript="PARA VOCÊ COMEÇAR"
          price="R$ 19,97 /mês"
          plan="Essentials"
          line="var(--color-gray-200)"
          informations={["Até 3 usuários", "Autoatendimento"]}
        />
        <TablePrincing
          descript="PARA VOCÊ DECOLAR"
          price="R$ 29,97 /mês"
          plan="Ultimate"
          background=" var(--color-gray-900)"
          color="white"
          buttonBackground="var(--color-purple-100)"
          display="flex"
          labelColor="var(--color-gray-300)"
          informations={[
            "Usuários ilimitados",
            "Suporte 24/7",
            "CSM Dedicado",
            "Treinamentos",
          ]}
        />
        <TablePrincing
          descript="PARA SUA EMPRESA"
          plan="Enterprise"
          writeButton="Fale com a gente"
          line="var(--color-gray-200)"
          displayImage="none"
          informations={[
            "Plano customizado especialmente para a necessidade de seu negocio",
          ]}
        />
      </Container>
    </Content>
  );
};

export default Home;
