import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import {Settings} from './Settings'
import {Quiz} from './Quiz'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                "weight_by_freq": true,
                "mark_stress": false,
                "word_types": {
                    "nouns": {
                        "animate": true,
                        "inanimate": true,
                        "indeclineable": true,
                        "sg_only": true,
                        "pl_only": true,
                        "masculine": true,
                        "feminine": true,
                        "neuter": true,
                        "cases": {
                            "sg_gen": true,
                            "sg_dat": true,
                            "sg_acc": true,
                            "sg_inst": true,
                            "sg_prep": true,
                            "pl_nom": true,
                            "pl_gen": true,
                            "pl_dat": true,
                            "pl_acc": true,
                            "pl_inst": true,
                            "pl_prep": true
                        }
                    },
                    "verbs": {
                        "perfective": true,
                        "imperfective": true,
                        "imperative": true,
                        "past": true,
                        "present": true,
                        "future": true,
                        "reflexive": true
                    },
                    "adjectives": {
                        "comparative": true,
                        "superlative": true,
                        "short": true,
                        "cases": {
                            "sg_gen": true,
                            "sg_dat": true,
                            "sg_acc": true,
                            "sg_inst": true,
                            "sg_prep": true,
                            "pl_nom": true,
                            "pl_gen": true,
                            "pl_dat": true,
                            "pl_acc": true,
                            "pl_inst": true,
                            "pl_prep": true
                        }
                    }
                }
            }
        }
    }
    update_settings_data = (formData) => {
        this.setState({
            formData: formData
        });
    }
    render() {
        return (
            <div className="React">
                <Settings form_data={this.state.formData} update_settings_data={this.update_settings_data}/>
                <Quiz form_data={this.state.formData}/>
            </div>
        );
    }
}


export default App;
