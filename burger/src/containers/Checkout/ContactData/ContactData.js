import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import './ContactData.css'

class ContactData extends Component{
    state = {
        name: '',
        email: '',
        address: ''
    }

    orderHandler(event){
        event.preventDefault();
        console.log(this.props.ingredients);
    }

    render(){
        return (
            <div className="ContactData">
                <h4>Enter your contact data: </h4>
                <form>
                    <input className="Input" type="text" name="name" placeholder="Your name"/>
                    <input className="Input" type="text" name="email" placeholder="Your email"/>
                    <input  className="Input" type="text" name="address" placeholder="Your addres"/>
                    <Button clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        )
    }
}

export default ContactData;