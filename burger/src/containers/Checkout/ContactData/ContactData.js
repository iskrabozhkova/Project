import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import './ContactData.css'
import Input from '../../../components/UI/Input/Input'

class ContactData extends Component{
    state = {
        // name: '',
        // email: '',
        // address: ''
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value:'',
               valid: false,
               touched: false
            },
            address: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your address'
                },
                value: '',
                valid: false,
                touched: false
            },
            email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your email'
                    },
                    value:'',
                    valid: false,
                    touched: false
            },
            deliveryMethod: {
                    elementType: 'select',
                    elementConfig: {
                        options: [
                            {value: 'fastest', displayValue: 'Fastest'},
                            {value: 'cheapest', displayValue: 'Cheapest'}
                        ]
                    },
                   value: ''
            }
        }
    }

    checkValidity(value){
        let isValid = false;
        if(value.trim() !== ''){
            isValid = true;
        }
        return isValid;
    }
    orderHandler(event){
        event.preventDefault();
        console.log(this.props.ingredients);
    }
    inputChangeHandler = (event, inputId) => {
        const updatedOrderForm ={
            ...this.state.orderForm
        }
        const updatedFormElement = {
            ...updatedOrderForm[inputId]
        }
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid=this.checkValidity(updatedFormElement.value);
        updatedOrderForm[inputId]=updatedFormElement;
        updatedFormElement.touched = true;
        console.log(updatedFormElement);
        this.setState({orderForm: updatedOrderForm});
    }

    render(){
        const formElementsArray=[];
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        return (
            <div className="ContactData">
                <h4>Enter your contact data: </h4>
                <form>
                    {formElementsArray.map(formElement => (
                        <Input 
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            invalid={!formElement.config.valid}
                            touched={formElement.touched}
                            changed={(event) => this.inputChangeHandler(event, formElement.id)}
                        />
                    ))}
                    <Button clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        )
    }
}

export default ContactData;