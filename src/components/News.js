import React, {Component} from "react";
import Article from "./Article";
import CollapseExpand from "./CollapseExpand";

class News extends Component {

    state = {
        allExpanded: false
    };

    expandAll = () => {
        this.setState({
            allExpanded: !this.state.allExpanded
        });
    };

    renderNews() {
        let newsTemplate;
        const {data} = this.props;
        const {allExpanded} = this.state;

        if(data.length) {
            newsTemplate = data.map(val => {
                const {id, author, content, bigText} = val;
                return (
                    <Article
                        expanded={allExpanded}
                        key={id} author={author} content={content} bigText={bigText} />
                );
            });
        } else {
            newsTemplate = <p>К сожалению новостей нет</p>;
        }

        return newsTemplate;
    };

    render() {
        console.log("rendered news");
        const {data} = this.props;

        return (
            <div className="news">
                <h3>Новости</h3>
                <CollapseExpand expandAll={this.expandAll} />
                {this.renderNews()}
                {data.length ? (
                    <strong className={'news__count'}>
                        Всего новостей: {data.length}
                    </strong>
                ): null}
            </div>
        );
    }
}

export default News;