import { useState } from "react"
import { Link } from "react-router-dom";

export const NuevaCuenta = () => {

  //state para iniciar sesion
  const [usuario, guardarUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: '',
  });

  //state para los errores

  const [error, setError] = useState(false)

  const { nombre, email, password, confirmar } = usuario;

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
    if (email.trim() === '' && password.trim() === '' && nombre.trim() === '' && confirmar.trim()==='') {
      setError(true);
      return;
    }
    setError(false)
  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Obtener una cuenta</h1>
        {
          (error ? (<p>Todos los campos son obligatorios y las contraseñas deben coincidir y tener al menos 6 caracteres</p>) : null)
        }
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" placeholder="Tu Nombre..." id="nombre" name="nombre" onChange={onChange} value={nombre} />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email..." id="email" name="email" onChange={onChange} value={email} />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password..." id="password" name="password" onChange={onChange} value={password} />
          </div>
          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar Password</label>
            <input type="password" placeholder="Repite tu password" id="confirmar" name="confirmar" onChange={onChange} value={confirmar} />
          </div>
          <div className="campo-form">
            <input type="submit" className="btn btn-primario btn-block" value='Registrarme' />
          </div>
        </form>
        <Link to={'/'} className="enlace-cuenta">Ya tiene cuenta? Inicia sesión</Link>
      </div>

    </div>
  )
}
