import React, {Component} from 'react'
import {Grid, Form, Segment, Button, Header, Message, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import firebase from '../../firebase'

class Login extends Component{
    state = {
        password: '',
        email: '',
        errors: [],
        usersRef: firebase.database().ref('users')
    }

    displayErrors = (errors) => {
        errors.map((error, i) => <p key={i}>{error.message}</p>)
       console.log(errors.map((error, i) => <p key={i}>{error.message}</p>))
    }
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value} )
     }
     isFormValid = ({email, password}) => email && password;
     handleSubmit = event => {
         if(this.isFormValid(this.state)){
         event.preventDefault();
        // console.log(firebase.);
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(signedUser => {
                console.log(signedUser);
            }).catch(err => console.log(err))
         }
     }
     saveUser = createdUser => {
         return this.state.usersRef.child(createdUser.user.uid).set({
             name: createdUser.user.displayName,
             avatar: createdUser.user.photoURL
         })
     }
    render(){
        const { password, email, errors} = this.state;
        return(
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as="h2" textAlign="center">
                        <Icon name="code branch" color="violet" style={{display: 'inline'}}></Icon>
                        <span style={{color: 'rgb(100 53 201)'}}>Login for DevChat</span>
                    </Header>
                    <Form size="large" onSubmit={this.handleSubmit}>
                        <Segment stacked>
                        <Form.Input 
                        name="email"
                        placeholder="Email" 
                        type="email" 
                        onChange={this.handleChange} 
                      value={email}
                        />
                            <Form.Input 
                            name="password"
                                placeholder="Password" 
                                type="password" 
                                onChange={this.handleChange} 
                               value={password}
                                />
                            <Button color="violet">Submit</Button>
                        </Segment>
                    </Form>
                    {errors.length > 0 && (
                        <Message error>
                            <h3>Error</h3>
                            {this.displayErrors(errors)}
                        </Message>
                    )}
                    <Message>Don't have an account? <Link to="/register">Login</Link></Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Login;