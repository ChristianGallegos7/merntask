import { useState } from "react"
import { Link } from "react-router-dom";

export const Login = () => {

  //state para iniciar sesion
  const [usuario, guardarUsuario]= useState({
    email: '',
    password: ''
  });

  //state para los errores

  const [error, setError] = useState(false)

  const {email, password} = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  //cuando el usuario inicia sesion 
  const onSubmit = (e) => {
    //no recarga pagina del form
    e.preventDefault();
    //validar que no haya campos vacios
    if(email.trim()==='' && password.trim()===''){
      setError(true);
      return;
    }
    setError(false)
  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>
        {
          (error ? (<p className="">Todos los campos son obligatorios</p>) : null)
        }
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email..." id="email" name="email" onChange={onChange} value={email}/>
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password..." id="password" name="password" onChange={onChange} value={password}/>
          </div>
          <div className="campo-form">
            <input type="submit" className="btn btn-primario btn-block" value='Iniciar Sesión'/>
          </div>
        </form>
        <Link to={'nueva-cuenta'} className="enlace-cuenta">Obtener Cuenta</Link>
      </div>

    </div>
  )
}
