import React from 'react'
import { Link } from 'react-router-dom'

const Hader = () => {
  return (
    <div>

      <header>
      <div class="header-top">
          <div class="container">
              <div class="row">
                  <div class="col-md-5 col-sm-12 right_info">
                      <p><i class="fa fa-map-marker"></i> 10 Praed Street / Abc road Xyz</p>
                  </div>
                  <div class="col-md-7 col-sm-12 left_info">
                      <ul>
                          <li><i class="fa fa-mobile-alt"></i><Link href="#">+123456789 0987</Link></li>
                          <li><i class="fa fa-envelope" aria-hidden="true"></i><Link href="#">Testexample@gmail.com</Link></li>
                      </ul>
                  </div>

              </div>
          </div>
      </div>

      <div class="header-main">
          <div class="container">
              <nav id='cssmenu'>
                  <div class="logo">
                      <Link href="https://codepen.io/anupkumar92/"><img alt='loading' src="https://i.ibb.co/QDy827D/ak-logo.png"/></Link>
                  </div>
                  <div id="head-mobile"></div>
                  <div class="button"></div>
                  <ul>
                      <li class='active'> <Link class="nav-link" to="/">Home</Link></li>
                      <li><Link class="nav-link" to="#">Services</Link>
                          <ul>
                              <li><Link href='#'>Services 1</Link></li>
                              <li><Link href='#'>Services 2</Link>
                                  <ul>
                                      <li><Link href='#'>Services 21</Link></li>
                                  </ul>
                              </li>
                              <li><Link href='#'>Services 3</Link></li>
                              <li><Link href='#'>Services 4</Link></li>
                          </ul>
                      </li>
                      <li><Link class="nav-link" to="/list">List</Link></li>
                      <li><Link class="nav-link" to="/registeration">Registeration</Link></li>
                      <li><Link class="nav-link" to="/Contact">Contact</Link></li>
                  </ul> 
              </nav>
          </div>
      </div>
  </header>




    </div>
  )
}

export default Hader