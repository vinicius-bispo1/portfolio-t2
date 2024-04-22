/** @format */

import Header from "../../components/Header";
import * as S from "./styled";
import exemplo from "../../assets/filter.pdf"

export default function Inicio() {
  return (
    <S.Main>
      <Header />
      <S.Container>
        <S.BoxInicio>
          <div>
          <h2>Olá meu nome e Junhinho sou dev Front-End</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            tenetur iusto accusamus, quidem quisquam iure qui.
            </p>
            <S.Cv><a href={exemplo} target="blank">Currículo</a></S.Cv>
            </div>
          <img src="https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181657.png" alt="" />
        </S.BoxInicio>
      </S.Container>
    </S.Main>
  );
}
