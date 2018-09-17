import React, { Component, Fragment } from 'react';
import Add from './components/Add';
import News from './components/News';
import './App.css';

class App extends Component {

    state = {
        news: null,
        isLoading: false
    };

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('http://localhost:3000/data/newsData.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({isLoading: false, news: data});
            });
    }

    static getDerivedStateFromProps(props, state) {
        let nextFilteredNews;

        if(Array.isArray(state.news)) {
            nextFilteredNews = [...state.news];

            nextFilteredNews.forEach((val) => {
                console.log(val.bigText);
                if (val.bigText.toLowerCase().indexOf('pugb') !== -1) {
                    val.bigText = 'СПАМ';
                }
            });

            return {
                news: nextFilteredNews
            }
        }
        return null;
    }

    addNews = (data) => {
        const nextNews = [data, ...this.state.news];
        this.setState({news: nextNews});
    };

    render() {

        const {news, isLoading} = this.state;

        return (
            <Fragment>
                <Add onAddNews={this.addNews} />
                {isLoading && <p>Загружаю...</p>}
                {Array.isArray(news) && <News data={news} />}
            </Fragment>
        );
    }
}

export default App;
