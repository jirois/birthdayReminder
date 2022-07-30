import React from "react";
import { HeaderFour, Para, Person, PersonImage } from "../styles/styles";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <Person key={id}>
            <PersonImage src={image} alt={name} />
            <div>
              <HeaderFour>{name}</HeaderFour>
              <Para>{age} years</Para>
            </div>
          </Person>
        );
      })}
    </>
  );
};

export default List;
