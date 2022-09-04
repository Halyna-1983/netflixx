import Navbar from "./Navbar/Navbar";
import Row from "./Row/Row";
import Banner from "./Banner/Banner";
import requests from "./../requests";

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        alignItems: 'center',
        color: 'white',
        backgroundColor: '#111',

      }}
    >
      <Navbar/>
      <Banner/>
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Trending" fetchUrl={requests.fetchTopRated} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={ requests.fetchHorrorMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries} />
         

</div>
  );
};
