import React, { Component } from 'react';


class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            server_response: {
                question: "Loading...",
                answers: []
            },
            answer_checked: false,
            answer_input: "",
            correct: false,
            answer_revealed: false
        }
    }
    componentDidMount() {
        this.next_question()
    }
    next_question() {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.props.form_data)
        };
        fetch('https://russian-quiz.herokuapp.com/get_question', options)
            .then(response => response.json())
            .then(data => this.setState({server_response: data}));
    }
    handle_next_button = () => {
        if (this.state.answer_checked) {
            this.next_question();
            this.setState({
                answer_checked: false,
                correct: false,
                answer_input: "",
                answer_revealed: false
            });
        } else {
            for (let i = 0; i < this.state.server_response.answers.length; i++) {
                let this_answer = this.state.server_response.answers[i];
                if (this_answer === this.state.answer_input) {
                    this.setState({correct: true});
                }
            }
            this.setState({
                answer_checked: true
            })
        }
    }
    check_for_enter = (e) => {
        if (e.code === "Enter") {
            this.setState({
                answer_revealed: true
            })
        }
    }
    change_answer = (e) => {
        this.setState({
            answer_input: e.target.value
        });
    }
    reveal_answer = () => {
        this.setState({
            answer_revealed: true
        })
    }

    render() {
        return (
            <div>
                <label htmlFor={"answer_input"}>{this.state.server_response.question}: </label>
                <input id={"answer_input"} value={this.state.answer_input} onChange={e => this.change_answer(e)} onKeyDown={this.check_for_enter}/>
                <button id={"next"} onClick={this.handle_next_button}>{this.state.answer_checked ? "next question" : "check answer"}</button>
                <p>{this.state.answer_checked ? this.state.correct ? "Correct!": "Incorrect." : ""}</p>
                {this.state.answer_checked && !this.state.correct && !this.state.answer_revealed ? <button onClick={e => this.reveal_answer(e)}>reveal answer</button>: null}
                {this.state.answer_revealed ? <p>{this.state.server_response.answers.join(",")}</p>: null}
            </div>
        )
    }
}

export {Quiz};