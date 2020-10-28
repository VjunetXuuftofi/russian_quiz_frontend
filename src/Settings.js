import React, { Component } from 'react';
import Form from "@rjsf/core";

const case_schema = {
    title: "Ask questions to decline to",
    type: "object",
    properties: {
        sg_gen: {type: "boolean", title: "Singular genitive.", default: true},
        sg_dat: {type: "boolean", title: "Singular dative.", default: true},
        sg_acc: {type: "boolean", title: "Singular accusative.", default: true},
        sg_inst: {type: "boolean", title: "Singular instrumental.", default: true},
        sg_prep: {type: "boolean", title: "Singular prepositional.", default: true},
        pl_nom: {type: "boolean", title: "Plural nominative.", default: true},
        pl_gen: {type: "boolean", title: "Plural genitive.", default: true},
        pl_dat: {type: "boolean", title: "Plural dative.", default: true},
        pl_acc: {type: "boolean", title: "Plural accusative.", default: true},
        pl_inst: {type: "boolean", title: "Plural instrumental.", default: true},
        pl_prep: {type: "boolean", title: "Plural prepositional", default: true}
    }
}

const schema = {
    title: "Settings",
    type: "object",
    properties: {
        weight_by_freq: {type: "boolean", title: "Show more common words more frequently.", default: true},
        mark_stress: {type: "boolean", title: "Require marking stress with ' after stressed sound.", default: false},
        word_types: {
            title: "Word Types",
            type: "object",
            properties: {
                nouns: {
                    title: "Nouns",
                    type: "object",
                    properties: {
                        animate: {type: "boolean", title: "Show animate nouns.", default: true},
                        inanimate: {type: "boolean", title: "Show inanimate nouns.", default: true},
                        indeclineable: {type: "boolean", title: "Show indeclineable nouns (e.g. такси)", default: true},
                        sg_only: {
                            type: "boolean",
                            title: "Show nouns that only exist in the singular (e.g. воздух)",
                            default: true
                        },
                        pl_only: {
                            type: "boolean",
                            title: "Show nouns that only exist in the plural (e.g. деньги).",
                            default: true
                        },
                        masculine: {type: "boolean", title: "Show masculine nouns.", default: true},
                        feminine: {type: "boolean", title: "Show feminine nouns.", default: true},
                        neuter: {type: "boolean", title: "Show neuter nouns.", default: true},
                        cases: case_schema
                    }
                },
                verbs: {
                    title: "Verbs",
                    type: "object",
                    properties: {
                        perfective: {type: "boolean", title: "Show perfective verbs.", default: true},
                        imperfective: {type: "boolean", title: "Show imperfective verbs.", default: true},
                        reflexive: {type: "boolean", title: "Show reflexive verbs.", default: true},
                        imperative: {type: "boolean", title: "Ask about imperatives.", default: true},
                        past: {type: "boolean", title: "Ask about past tense.", default: true},
                        present: {
                            type: "boolean",
                            title: "Ask about present tense (for imperfective verbs).",
                            default: true
                        },
                        future: {
                            type: "boolean",
                            title: "Ask about future tense (for perfective verbs).",
                            default: true
                        },
                    }
                },
                adjectives: {
                    title: "Adjectives",
                    type: "object",
                    properties: {
                        comparative: {type: "boolean", title: "Ask about comparatives.", default: true},
                        superlative: {type: "boolean", title: "Ask about superlatives.", default: true},
                        short: {type: "boolean", title: "Ask about short form adjectives.", default: true},
                        cases: case_schema
                    }
                }
            }
        }
    }
}

class Settings extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form schema={schema} onChange={e => this.props.update_settings_data(e.formData)} formData={this.props.form_data}/>
        )
    }
}

export {Settings};