import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions'
import {connect} from 'react-redux'

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddedPerson} />
                {this.props.people.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        people: state.persons
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onAddedPerson: () => dispatch({type: actionTypes.ADD_PERSON}),
        onDeletePerson: (id) => dispatch({type: actionTypes.DELETE_PERSON, personId: id})
    }
    }


export default connect(mapStateToProps, mapDispatchToProps)(Persons);