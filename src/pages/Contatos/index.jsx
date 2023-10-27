// import styles from './Contatos.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import React, { useState } from 'react';
// Aqui está importanto o menu e o rodape

function Contatos ()
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    //logica para printar na tela, bom eu acho
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Lógica para enviar o formulário
    };
  
    return (
      <>
        <Header />
        <h1> Formulario</h1>
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
          <div className="w-50 border bg-light p-5">
            {/* começo do formulario */}
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Nome</label><br />
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  //onChange é uma função que captura que tudo digita no input 
                />
              </div>
              <br />
              <div>
                <label htmlFor="email">E-Mail</label><br />
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <br />
              <div>
                <label htmlFor="message">Mensagem</label><br />
                <textarea
                  name="message"
                  className="form-control"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button className="btn btn-info">Enviar</button>
            </form>
            {/* fim do formulario */}
          </div>
        </div>
        <Footer />
      </>
    );
    
    
}
export default Contatos