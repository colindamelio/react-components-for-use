import styled from "styled-components";
import { shadow, transition, red } from "utils";

export const Card = styled.div`
  background: ${red};
  padding: 15px;
  border-radius: 5px;
  ${shadow[3]};
  ${transition({})};

  &:hover {
    ${shadow[4]};
  }
`;
