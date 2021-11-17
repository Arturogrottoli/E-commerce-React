import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Checkout = () => {
  const state = useSelector((state) => state.addItem)

  var total = 0;
  const itemList = (item) => {
    total = total + item.price;
    return (
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">{item.title}</h6>
        </div>
        <span className="text-muted">${item.price}</span>
      </li>
    );
  }

  return (
    <>
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-dark">Tu carrito</span>
              <span className="badge bg-dark rounded-pill">{state.length}</span>
            </h4>
            <ul className="list-group mb-3">
              {state.map(itemList)}

              <li className="list-group-item d-flex justify-content-between">
                <span>Total</span>
                <strong>${total}</strong>
              </li>
            </ul>

            <form className="card p-2">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Codigo Promo" />
                <button type="submit" className="btn btn-secondary">Usar</button>
              </div>
            </form>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Formulario confirmación compra</h4>
            <form className="needs-validation" novalidate="">
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                  <div className="invalid-feedback">
                    Ingrese su nombre.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">Apellido</label>
                  <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                  <div className="invalid-feedback">
                    Ingrese su apellido.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="username" className="form-label">Usuario</label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input type="text" className="form-control" id="username" placeholder="Usuario" required="" />
                    <div className="invalid-feedback">
                      Ingrese su usuario.
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">Email <span className="text-muted">(Opcional)</span></label>
                  <input type="email" className="form-control" id="email" placeholder="nombre@ejemplo.com" />
                  <div className="invalid-feedback">
                    El mail ingresado no es correcto.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">Dirección</label>
                  <input type="text" className="form-control" id="address" placeholder="Calle falsa 123" required="" />
                  <div className="invalid-feedback">
                    Ingrese su dirección.
                  </div>
                </div>


                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">País</label>
                  <select className="form-select" id="country" required="">
                    <option value="">Elegir...</option>
                    <option>Argentina</option>
                  </select>
                  <div className="invalid-feedback">
                    Ingrese un país correcto.
                  </div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">Provincia</label>
                  <select className="form-select" id="state" required="">
                    <option value="">Elegir...</option>
                    <option>Buenos Aires</option>
                    <option>La Pampa</option>
                    <option>Santa Fe</option>
                    <option>Cordoba</option>
                  </select>
                  <div className="invalid-feedback">
                    Ingrese una provincia correcta.
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">CP</label>
                  <input type="text" className="form-control" id="CP" placeholder="" required="" />
                  <div className="invalid-feedback">
                    Codigo postal requerido.
                  </div>
                </div>
              </div>

              <hr className="my-4" />


              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="save-info" />
                <label className="form-check-label" htmlFor="save-info">Guardar esta información para la proxima compra</label>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Metodo de pago</h4>

              <div className="my-3">
                <div className="form-check">
                  <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
                  <label className="form-check-label" htmlFor="credit">Tarjeta de crédito</label>
                </div>
                <div className="form-check">
                  <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                  <label className="form-check-label" htmlFor="debit">Tarjeta de débito</label>
                </div>
                <div className="form-check">
                  <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                  <label className="form-check-label" htmlFor="paypal">PayPal</label>
                </div>
              </div>

              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">Nombre en la tarjeta</label>
                  <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                  <small className="text-muted">Se requiere el nombre completo</small>
                  <div className="invalid-feedback">
                    Ingrese su nombre
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">Numero de la tarjeta</label>
                  <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                  <div className="invalid-feedback">
                    El numero de la tarjeta es requerido
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">Fecha de vencimiento</label>
                  <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                  <div className="invalid-feedback">
                    Ingrese fecha de vencimiento
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">Numero seguridad</label>
                  <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                  <div className="invalid-feedback">
                    Ingrese numero de seguridad
                  </div>
                </div>
              </div>

              <hr className="my-4" />




              <button type="button" className="w-100 btn btn-dark btn-lg" data-bs-toggle="modal" data-bs-target="#checkoutModal">
                Confirmar compra
              </button>


              <div className="modal fade" id="checkoutModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" id="exampleModalLabel" >Su Compra fue confirmada!</h4>

                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>
                    <div className="modal-body ">
                      <h5> Volver al <NavLink to={"/"}>inicio</NavLink>.</h5>
                    </div>

                  </div>
                </div>
              </div>



            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout
