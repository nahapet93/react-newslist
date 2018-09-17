import React, {Component} from "react";

class Article extends Component {

    state = {
        visible: false
    };

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            visible: true
        });
    };

    render() {
        const {author, content, bigText, expanded} = this.props;
        const visible = this.state.visible || expanded;
        return (
            <div className="article">
                <h4 className="news__author">Author's name: {author}</h4>
                <p className="news__content">{content}</p>
                {!visible && <a href="#readmore" onClick={this.handleClick} className='news__readmore'>Подробнее</a>}
                {visible && <p className="news__big-text">{bigText}</p>}
            </div>
        );
    }
}

export default Article;