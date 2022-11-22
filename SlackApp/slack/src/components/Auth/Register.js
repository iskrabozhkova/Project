import React, {Component} from 'react'
import {Grid, Form, Segment, Button, Header, Message, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import firebase from '../../firebase'
// import firebase from 'firebase/app'
//import firebase from 'firebase'
import md5 from 'md5'

class Register extends Component{
    state = {
        username: '',
        password: '',
        confirmedPassword: '',
        email: '',
        errors: [],
        usersRef: firebase.database().ref('users')
    }
    isFilled = ({username, password, confirmedPassword, email}) => {
        if(username.length !== 0 && password.length !== 0 && confirmedPassword.length !== 0 && email.length !== 0){
            console.log('a');
            return true;
        }else{
            return !username.length || !password.length || !confirmedPassword.length || !email.length     
        }
        //return !username.length || !password.length || !confirmedPassword.length || !email.length
        
    }
    isPasswordCorrect = ({password, confirmedPassword}) => {
        if(password < 6 || confirmedPassword < 6){
            return false;
        }else if(password !== confirmedPassword){
            return false;
        }else{
            return true;
        }
    }
    isFormValid = () => {
        let errors = [];
        let error;
        if(this.isFilled(this.state) === false){
            error = {message: 'Form is empty!'}
            this.setState({errors: errors.concat(error)});
            return false;
         }else if(!this.isPasswordCorrect){
             error = {message: 'Incorrect password!'}
             this.setState({errors: errors.concat(error)});
             return false;
        }else{
            return true;
        }
        return true;
    }
    displayErrors = (errors) => {
        errors.map((error, i) => <p key={i}>{error.message}</p>)
       console.log(errors.map((error, i) => <p key={i}>{error.message}</p>))
    }
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value} )
     }
     handleSubmit = event => {
         if(this.isFormValid()){
         event.preventDefault();
        // console.log(firebase.);
         firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
         .then(createdUser => {
             console.log(createdUser)
             createdUser.user.updateProfile({
                 displayName: this.state.username,
                 photoURL: `http://gravatar.com/avatar/${md5(createdUser.user.email)}`
             })
             .then(() =>{
                this.saveUser(createdUser)
            })
            }).then(() => {console.log('user saved')})
            .catch(err => {
                console.log(err);
                //this.setState({errors: this.state.errors.concat(err)})
            })
         }else{
             //displayErrors();
         }
     }
     saveUser = createdUser => {
         return this.state.usersRef.child(createdUser.user.uid).set({
             name: createdUser.user.displayName,
             avatar: createdUser.user.photoURL
         })
     }
    render(){
        const {username, password, confirmedPassword, email, errors} = this.state;
        return(
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as="h2" textAlign="center">
                        <Icon name="puzzle piece" color="orange" style={{display: 'inline'}}></Icon>
                        <span style={{color: '#FF7F50'}}>Register for DevChat</span>
                    </Header>
                    <Form size="large" onSubmit={this.handleSubmit}>
                        <Segment stacked>
                            <Form.Input 
                                icon="user" 
                                iconPosition="left" 
                                name="username"
                                placeholder="Username" 
                                type="text" 
                                onChange={this.handleChange} 
                                value={username}
                                />
                            <Form.Input 
                            name="password"
                                placeholder="Password" 
                                type="password" 
                                onChange={this.handleChange} 
                               value={password}
                                />
                            <Form.Input 
                            name="confirmedPassword"
                                placeholder="Confirm password" 
                                type="password" 
                                onChange={this.handleChange} 
                               value={confirmedPassword}
                                />
                            <Form.Input 
                                name="email"
                                placeholder="Email" 
                                type="email" 
                                onChange={this.handleChange} 
                              value={email}
                                />
                            <Button color="orange">Submit</Button>
                        </Segment>
                    </Form>
                    {errors.length > 0 && (
                        <Message error>
                            <h3>Error</h3>
                            {this.displayErrors(errors)}
                        </Message>
                    )}
                    <Message>Already a user? <Link to="/login">Login</Link></Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Register;