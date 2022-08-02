import ListMusic from './Components/ListMusic';
import { useState, useEffect } from 'react';
import { songs } from './types/songs';
import { IDataBase } from './types/database';
import axios from 'axios';
import Pagination from './Components/Pagination'
import _ from 'lodash';
import { Container, LoadingContainer } from './styles';

const App = () => {
  const [dataBase, setDatabase] = useState<IDataBase | any>();
  
  //Pagination
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPages,] = useState(10)

  //get data from API
  const urlSongs = 'http://localhost:5001/songs';
  const urlAlbums = 'http://localhost:5001/albums';
  const urlArtist = 'http://localhost:5001/artists';

  var artistDataBase: any = []

  const token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

  const getAllSongs = async () => {
    setLoading(true);
    // get all songs
    await axios.get(`${urlSongs}`, { headers: {"Authorization" : `Bearer ${token}`} } ).then(response => {
      const allSongs = response.data;
      //get album
      allSongs.map((song: songs) => {
        axios.get(`${urlAlbums}/${song.album_id}`, { headers: {"Authorization" : `Bearer ${token}`} } ).then(response => {
          const album = response.data;
          axios.get(`${urlArtist}/${album.artist_id}`, { headers: {"Authorization" : `Bearer ${token}`} } ).then(response => {
            const artist = response.data;
            artistDataBase.push(
              {
                ...song,
                album,
                artist
              }
            );
            setDatabase([...artistDataBase]);
            setLoading(false);
          })
        })
      })
    }).catch(error => console.error(`Error ${error}`))
  }

  useEffect(() => {
   getAllSongs();
  }, [])

  // Get current items
  const indexOfLastItem: number = currentPage * itemPerPages;
  const indexOfFirstItem: number = indexOfLastItem - itemPerPages;
  const currentItems: IDataBase[] = dataBase?.slice(indexOfFirstItem, indexOfLastItem);

   // Sort Items
  const sort = (column: string) => {
    const newDb = _.orderBy(dataBase, [column], ['desc', 'asc']);
    setDatabase(newDb);
};

  // Change page
  const paginate = (pageNumber: number): void => {
    setCurrentPage(pageNumber)
  }
 
  if(loading) {
    return (
      <LoadingContainer>
        <h2>Loading...</h2>
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <h1>Music App</h1>
      <ListMusic listSongs={currentItems} sort={sort} />
      <Pagination itemPerPage={itemPerPages} totalItems={dataBase?.length} paginate={paginate}/>
    </Container>
  );
}

export default App;