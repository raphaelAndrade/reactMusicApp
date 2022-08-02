import React from 'react';
import { IDataBase } from '../../types/database'
import { Container, ListMusicTable, Th } from './styles';

interface IListSong {
    listSongs: IDataBase[];
    sort: (column: string) => void;
}

const ListMusic: React.FC<IListSong> = ({ listSongs, sort }) => {

    return (
        <Container>
            <ListMusicTable>
                <thead>
                    <tr>
                        <Th onClick={() => sort('artist.name')}>Artist Name</Th>
                        <Th onClick={() => sort('album.name')}>Album Name</Th>
                        <Th onClick={() => sort('album.year_released')}>Year Released</Th>
                        <Th onClick={() => sort('track')}>Song Track</Th>
                        <Th onClick={() => sort('name')}>Song Name</Th>
                    </tr>
                </thead>
                <tbody>
                    {listSongs?.map((item: IDataBase, key: number) => {
                        return (
                            <tr key={key}>
                                <td>{item.artist.name}</td>
                                <td>{item.album.name}</td>
                                <td>{item.album.year_released}</td>
                                <td>{item.track}</td>
                                <td>{item.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </ListMusicTable>
        </Container>
    )
}
export default ListMusic
