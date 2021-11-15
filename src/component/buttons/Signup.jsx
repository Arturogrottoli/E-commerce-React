import React from 'react'

const Signup = () => {
  return (
    <div>

      <button type="button" className="btn btn-outline-dark ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
        <span className="fa fa-user-plus me-1"></span> Registro
      </button>


      <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Login</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <button className="btn btn-outline-dark w-100 mb-4">
                <span className="fa fa-google me-2"></span> Conectarse con Google
              </button>
              <button className="btn btn-outline-dark w-100 mb-4">
                <span className="fa fa-facebook me-2"></span> Conectarse con Facebook
              </button>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInput" className="form-label">Usuario</label>
                  <input type="text" className="form-control" id="exampleInput" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">Nunca compartas tu mail con nadie.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">No soy un robot</label>
                </div>
                <button type="submit" className="btn btn-outline-dark w-100 mt-3">Registrate</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup