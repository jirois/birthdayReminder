import styled from "styled-components";
import { device } from "./devics";
const items = {
  color: {
    primary_one: "hsl(162, 61%, 89%)",
    primary_two: "hsl(162, 60%, 78%)",
    primary_three: "hsl(162, 61%, 67%)",
    primary_four: "hsl(162, 61%, 57%)",
    primary_five: "hsl(162, 73%, 46%)",
    primary_six: "#1aa179",
    primary_seven: "#13795b",
    primary_eight: "#0d503c",
    primary_nine: "#06281e",
    //darkest grey - used for headings
    grey_one: "hsl(212, 33%, 89%)",
    grey_two: "hsl(210, 31%, 80%)",
    grey_three: "hsl(211, 27%, 70%)",
    grey_four: "hsl(209, 23%, 60%)",

    grey_five: "hsl(210, 22%, 49%)",
    grey_six: "hsl(209, 28%, 39%)",
    grey_seven: "hsl(209, 34%, 30%)",
    grey_eight: "hsl(211, 39%, 23%)",
    grey_ning: "hsl(209, 61%, 16%)",
    white: "#fff",
    red_dark: "hsl(360, 67%, 44%)",
    red_light: "hsl(360, 71%, 66%)",
    green_dark: "hsl(125, 67%, 44%)",
    green_light: "hsl(125, 71%, 66%)",
    black: "#222",
    pink: "#f28ab2",
  },
  transition: "all 0.3s linear",
  spacing: "0.1rem",
  radius: "0.25rem",
  light_shadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
  dark_shadow: "0 5px 15px rgba(0, 0, 0, 0.4)",
  max_width: "1170px",
  fixed_width: "450px",
  outline: "1px solid rgba(242, 138, 178, 0.8)",
};

export const Header = styled.h1`
  letter-spacing: ${items.spacing};
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
`;
export const HeaderOne = styled(Header)`
  font-size: 3rem;
`;
export const HeaderTwo = styled(Header)`
  font-size: 2rem;
`;
export const HeaderThree = styled(Header)`
  font-size: 1.25rem;
`;
export const HeaderFour = styled(Header)`
  font-size: 0.875rem;
`;
export const Para = styled.p`
  margin-bottom: 1.25rem;
  color: ${items.color.grey_five};
`;

export const SectionDiv = styled.section`
  width: 90vw;
  margin: 0 auto;
  max-width: ${items.max_width};

  @media ${device.min_l_view} {
    width: 95vw;
  }
`;

export const MainDiv = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 90vw;
  margin: 5rem auto;
  max-width: ${items.fixed_width};
  background: ${items.color.white};
  border-radius ${items.radius};
  padding: 1.5rem 2rem;
  box-shadow: ${items.dark_shadow};
`;

export const WrapperH3 = styled.h3`
  font-weight: normal;
  text-transform: none;
  margin-bottom: 2rem;
  font-size: 1.64rem;
  color: ${items.color.primary_five};
`;

export const Person = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 0.75rem;
  margin-bottom: 1.5rem;
  align-items: center;
`;
export const PersonImage = styled.img`
  width: 75px;
  height: 75px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: ${items.light_shadow};
`;

export const PersonH4 = styled(Header)`
  margin-bottom: 0.35rem;
  font-size: 0.875rem;
`;

export const PersonPara = styled(Para)`
  margin-bottom: 0;
`;

export const WrapperButton = styled.button`
  color: ${items.color.white};
  display: block;
  width: 100%;
  border-color: transparent;
  background: ${items.color.pink};
  margin: 2rem auto 0 auto;
  text-transform: capitalize;
  font-size: 1.2rem;
  padding: 0.5rem 0;
  letter-spacing: ${items.spacing};
  border-radius: ${items.radius};
  outline: ${items.outline};
`;
