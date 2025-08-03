import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {

  const users = [{
    id: '238y28',
    name: 'isaias',
    age: 25,
    email: 'isaias@email.com'
  },
  {
    id: '23t426',
    name: 'lucas',
    age: 27,
    email: 'lucas@email.com'
  }
  ]


  return (
    <>
      <div className='container'>
        <form>
          <h1>Cadastro de Usuários</h1>
          <input name='nome' type="text" />
          <input name='idade' type="number" />
          <input name='email' type="email" />
          <button type='button'>Cadastrar</button>
        </form>

        {users.map((user) =>
          <div key={user.id}>
            <div>
              <p>Nome: {user.name}</p>
              <p>Idade: {user.age}</p>
              <p>Email: {user.email}</p>
            </div>
            <button>
              <img src={Trash} />
            </button>
          </div>

        )}


      </div>
    </>
  )
}

export default Home
