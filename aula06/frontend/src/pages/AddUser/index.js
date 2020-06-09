import React,{Component} from 'react';
import Header from '../../components/Header';
import './index.css';

import api from '../../services/api';

export default class AddUser extends Component{
    
    render(){
        return(            
           <div>
                <Header />
                <form onSubmit={this.handleSubmit}>
                    <div className='adduser-container'>
                        <h1>Cadastrar Desenvolvedor</h1>
                        <span></span>
                        <inout type='text'
                            name=''
                            value=''
                            onChange={this.handleOnChange}
                        />
                        <button type='submit'>Salvar</button>
                    </div>
                </form>
           </div>
        )
    }
}