import NavBar from "../navBar/NavBar";
import Banner from "../banner/Banner";
import requests from "../Requests";
import Row from "../row/Row";

function HomeScreen() {
    return (
        <>
        <NavBar />
        <Banner />
        <Row 
            title='NETFLIX ORIGINALS'
            fetchUrl={requests.fetchNetflixOrginals}
            isLargeRow
        />
        <Row 
            title='Trending Now'
            fetchUrl={requests.fetchTrending}
        />
        <Row 
            title='Top Rated'
            fetchUrl={requests.fetchTopRated}
        />
        <Row 
            title='Action Movies'
            fetchUrl={requests.fetchActionMovies}
        />
        <Row 
            title='Comedy Movies'
            fetchUrl={requests.fetchComedyMovies}
        />
        <Row 
            title='Horror Movies'
            fetchUrl={requests.fetchHorrorMovies}
        />
        <Row 
            title='Romance Movies'
            fetchUrl={requests.fetchRomanceMovies}
        />
        <Row 
            title='Documentaries'
            fetchUrl={requests.fetchDocumentaries}
        />
        </>
    )
}

export default HomeScreen;