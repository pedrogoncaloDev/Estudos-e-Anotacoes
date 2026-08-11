import { useEffect, useState } from 'react';
import './style.css'
import api from '../../services/api';

function Home() {
  const [users, setUsers] = useState([])
  const [form, setForm] = useState({ nome: '', idade: '', email: '' })
  const [editingId, setEditingId] = useState(null)
  const [originalForm, setOriginalForm] = useState(null)

  const hasChanges = !editingId || Object.keys(form).some(key => String(form[key]) !== String(originalForm[key]));

  async function getUsers() {
    const { data } = await api.get('/usuarios');
    setUsers(data);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm(previous => ({ ...previous, [name]: value }));
  }

  function handleEdit(user) {
    const userForm = { nome: user.name, idade: user.age, email: user.email };
    setEditingId(user.id);
    setForm(userForm);
    setOriginalForm(userForm);
  }

  function handleCancelEdit() {
    setEditingId(null);
    setOriginalForm(null);
    setForm({ nome: '', idade: '', email: '' });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (editingId && !hasChanges) return;

    const payload = {
      name: form.nome,
      age: Number(form.idade),
      email: form.email,
    };

    if (editingId) {
      const { data } = await api.put(`/usuarios/${editingId}`, payload);
      setUsers(previous => previous.map(user => user.id === editingId ? data : user));
    } else {
      const { data } = await api.post('/usuarios', payload);
      setUsers(previous => [...previous, data]);
    }

    setEditingId(null);
    setOriginalForm(null);
    setForm({ nome: '', idade: '', email: '' });
  }

  async function handleDelete(id) {
    await api.delete(`/usuarios/${id}`);
    setUsers(previous => previous.filter(user => user.id !== id));
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (

    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>Cadastro de Usuários</h1>

        <input placeholder="nome" type="text" name="nome" value={form.nome} onChange={handleChange} required />
        <input placeholder="idade" type="number" name="idade" value={form.idade} onChange={handleChange} required />
        <input placeholder="email" type="email" name="email" value={form.email} onChange={handleChange} required />
        <button type="submit" disabled={editingId && !hasChanges}>{editingId ? 'Salvar' : 'Cadastrar'}</button>
        {editingId && (
          <button type="button" onClick={handleCancelEdit}>Cancelar</button>
        )}
      </form>

      {users.map(user => (
        <div className="card" key={user.id}>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>

          <div className="actions">
            <button type="button" onClick={() => handleEdit(user)}>
              <span className="mdi mdi-pencil"></span>
            </button>
            <button type="button" onClick={() => handleDelete(user.id)}>
              <span className="mdi mdi-trash-can"></span>
            </button>
          </div>
        </div>
      ))}

    </div>

  )
}

export default Home
