// 영화 앱 화면
import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

// axios: 영화 데이터를 로딩하기 위한 JS의 fetch() 대체 도구
// 영화 데이터= YTS 영화데이터 API (토렌트 파일이라 불법)
//             https://github.com/serranoarevalo/yts-proxy

class Home extends React.Component {
  // 로딩 중 표시 기능
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({ movies: movies, isLoading: false });
  };

  // 로딩 중
  componentWillMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000)
  }
  // 로딩 후
  componentDidMount() {
    // async& await: 특정 함수는 시간을 필요로 한다는 것을 알리는 키워드
    this.getMovies();
  }


  // Warning: Invalid DOM property `class`. Did you mean `className`?
  // --> html코드의 class=> className으로 바꾸라는 뜻
  // Warning: Failed prop type: The prop `genres` is marked as required in `Movie`, but its value is `undefined`.
  // --> genres props를 필요로 한다는 뜻
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
            />))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
