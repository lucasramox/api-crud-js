import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

import api from '../../services/api';

import './styles.css';

export default function Create(){
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState([]);
    const [estado_civil, setEstado_civil] = useState('');
    const [cidade, setCidade] = useState('');
    const [Estado, setEstado] = useState('');

    function handCreate(e){
        e.preventDefault();
    }

    return(
<Container>
    <Form onSubmit={handCreate}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="Nome" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Idade</Form.Label>
        <Form.Control type="text" placeholder="Sua Idade" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Estado Civil</Form.Label>
        <Form.Control type="text" placeholder="Seu Estado Civil" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
        <Form.Label>Cidade</Form.Label>
            <Form.Control type="text" placeholder="Cidade" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
        <Form.Label>Estado</Form.Label>
            <Form.Control type="text" placeholder="UF" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Cadastrar
  </Button>
</Form></Container>
    );
}