import styled from 'styled-components';

const Tile = styled.div`
  border: 1px solid lightblue;
  padding: 10px;
  margin: 0 10px;
  width: 20px;
  display: inline-block;
  text-align: center;
  background: ${props => props.selected && `lightblue`};
  cursor: pointer;
`;

export default Tile;