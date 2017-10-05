import React from 'react';
 class Form extends React.Component {
    state ={

        email: '',
        password: '',
        

    };

    change = e =>{
        this.setState({
            [e.target.name]: e.target.vaule
        });
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit()
        console.log(this.state);
    };
 
    render() {
    return (

        

        <form>
        
        <h2>Login</h2>
        <br />
        
        <h3> email</h3>
        <input name="email" placeholder="email"  value={this.state.topic} onChange={e => this.change(e)} />
        
        <br />
        <h3> password</h3>
        <input name="password" placeholder="password"  value={this.state.topic} onChange={e => this.change(e)} />
        
        <br />
        
        
        <button class="btn2">Submit</button>
        
        </form>
    
        
     );
    }

}


 export default Form;