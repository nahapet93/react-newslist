import React, {Component} from "react";
import PropTypes from "prop-types";

class Add extends Component {

    handleChange = (e) => {
        const {id, value} = e.currentTarget;
        this.setState({[id]: value});
    };

    submitHandler = (e) => {
        e.preventDefault();
        const {author, content, bigText} = this.state;
        this.props.onAddNews({id: +new Date(), author, content, bigText});
    };

    checkRuleChange = (e) => {
        this.setState({disabled: !this.state.disabled});
    };

    validate = () => {
        const { author, content, disabled, bigText } = this.state;
        if (author.trim() && content.trim() && bigText.trim() && !disabled) {
            return true;
        }
        return false;
    };

    constructor(props) {
        super(props);

        this.state = {
            author: '',
            content: '',
            bigText: '',
            disabled: true
        }
    }

    render() {
        const {author, content, bigText} = this.state;

        return (
            <form className="add">
                <input id="author" type="text" value={author} className="add__author" placeholder="имя автора" onChange={this.handleChange}/>
                <textarea id="content" value={content} className="add__text" placeholder="ваш текст" onChange={this.handleChange}></textarea>
                <textarea id="bigText" value={bigText} className="add__big-text" placeholder="ваш текст" onChange={this.handleChange}></textarea>
                <label className="add__checkrule">
                    <input type="checkbox" onChange={this.checkRuleChange} />Я согласен с правилами
                </label>
                <button className="add__button" onClick={this.submitHandler} disabled={!this.validate()}>Send!</button>
            </form>
        );
    }
}

Add.propTypes = {
    onAddNews: PropTypes.func.isRequired
};

export default Add;