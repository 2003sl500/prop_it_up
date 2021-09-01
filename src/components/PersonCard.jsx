import React, {Component} from 'react';

class PersonCard extends Component{
    render(){
        const {firstName, lastName, age, hairColor} = this.props;
        return(
            <div class="center">
                <h1 class="left">{lastName}, {firstName}</h1>
                <p class="left">Age: {age}</p>
                <p class="left">Hair Color: {hairColor}</p>
                <div class="margin-bottom"></div>
            </div>
        );
    }
}

export default PersonCard;