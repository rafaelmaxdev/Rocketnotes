import { Container, Links, Content } from "./styles.js";

import { Tag } from "../../components/Tag/index.jsx";
import { Button } from "../../components/Button/";
import { Header } from "../../components/Header/";
import { Section } from "../../components/Section/";
import { ButtonText } from "../../components/ButtonText/";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta modi animi optio officia in tenetur rerum quod totam exercitationem at nesciunt quis repudiandae voluptas, nisi tempora quaerat non hic corporis!</p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">http://www.rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">http://www.rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
