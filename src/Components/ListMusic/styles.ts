import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const ListMusicTable = styled.table`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }
      
      tr:nth-child(even) {
        background-color: #dddddd;
      }
`
export const Th = styled.th`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    cursor: pointer;
`

export const Td = styled.td`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`