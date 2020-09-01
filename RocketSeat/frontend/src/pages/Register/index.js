import React, { useState } from 'react'
import './styles.css'
import { FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'

const Register = () => {

  const [name, setName] = useState('') // Primeiro parâmetro é o valor e o segundo é uma função pra alterar esse valor
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory()

  const handleRegister = async (ev) => {
    ev.preventDefault()

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    }

    try {
      const response = await api.post('ongs', data)
      alert(`ID gerado a partir deste cadastro: ${response.data.id}`)
      history.push('/') // Aqui é pq ao clicar no OK do alerta quero que seja redirecionado para a home
    } catch (error) {
      alert(`Erro no cadastro: ${error}`)
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>
          <h1>Cadastro</h1>
          <p>Faça seu Cadastro Animal!</p>
          <Link className={"back-link"} to="/register">
            <FiArrowLeft size={16} color="#E02041"/>
            Não Tenho Cadastro</Link>
        </section>
        <form onSubmit={handleRegister}>
          <input placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)} />
          <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="text" placeholder="WhatsApp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
          <div className="input-group">
            <input type="text" placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)} />
            <input type="text" placeholder="UF" style={{ width: 80 }} value={uf} onChange={e => setUf(e.target.value)} />
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}

export default Register
