import { useState } from "react";
import List from "./components/List";
import data from "./helper/data";
import { SectionDiv, Wrapper, WrapperButton, WrapperH3 } from "./styles/styles";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <SectionDiv>
      <Wrapper>
        <WrapperH3>{people.length} birthdays today</WrapperH3>
        <List people={people} />
        <WrapperButton onClick={() => setPeople([])}>clear all</WrapperButton>
      </Wrapper>
    </SectionDiv>
  );
}

export default App;
