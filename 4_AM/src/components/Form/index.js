import React from "react";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            gender: "",
            pronoun: "",
            hometown: "",
            food1: "",
            food2: "",
            food3: "",
            birthday: "",
            huid: "",
            concentration: "",
            submitted: false
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state[e.target.name]);
    } 
    handleSubmit = (e) => {
        this.setState(submitted: true);
        let {name, gender, pronoun, hometown, food1, food2, food3, birthday, huid, concentration} = this.state;
        console.log(`User's name is ${name}, and
        ${pronoun} are from ${hometown}. 
        ${pronoun} was born on ${birthday},
        and ${pronoun} favorite foods are ${food1},
        ${food2}, and ${food3}. At Harvard,
        ${name} studies ${concentration}`);
    }
    render() {
        return <React.Fragment>
            
                Name:
                <input type="text" name="name" onChange={this.handleChange}></input>
            
            
                Gender:
                <input type="text" name = "gender" onChange={this.handleChange}></input>
            
                Pronoun:
                <input type="text" name = "pronoun" onChange={this.handleChange}></input>
                Hometown:
                <input type="text" name = "hometown" onChange={this.handleChange}></input>
                Favorite foods:
                <ol>
                    <li>
                        <input type="text" name = "food1" onChange={this.handleChange}></input>
                    </li>
                    <li>
                        <input type="text" name = "food2" onChange={this.handleChange}></input>
                    </li>
                    <li>
                        <input type="text" name = "food3" onChange={this.handleChange}></input>
                    </li>
                </ol>
                Birthday:
                <input type="text" name = "birthday" onChange={this.handleChange}></input>
                HUID:
                <input type="text" name = "huid" onChange={this.handleChange}></input>
                Concentration:
                <input type="text" name = "concentration" onChange={this.handleChange}></input>
                <button onClick={this.handleSubmit}>Submit</button>
            
        </React.Fragment>
    }
}

export default Form;