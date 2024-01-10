import React from 'react';
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Player } from '@lottiefiles/react-lottie-player';

const Registeration = () => {

  const [value, setValues] = useState({ name: "", email: "", phone: "", username: "", password: "", image: "" });
  const navigate = useNavigate();
  const [urls, seturls] = useState('');
  const [data, setData] = useState([]);
  const [img, setimg] = useState();

  const register = async (values) => {
    const { name, email, phone, username, password } = value
    const add = await axios.post(`http://localhost:5000/Api/v1/register`,
      ({ name: name, email: email, phone: phone, username: username, password: password, image: urls })
    );  
    if (add.status === 200) {
      toast.success("Registration Done");
      navigate("/list");
    } else {
      toast.error("Data NotRegistered...");
    }

  };


  const handleChange = (e) => {
    const name = e.target.name;
    const values = e.target.value;

    setValues({ ...value, [name]: values });
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    var requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };
    fetch(
      "http://localhost:5000/api/v1/admin/upload",
      requestOptions
    )
      .then((response) => response.json())

      .then((result) => seturls(result?.url))


  };



  const onSubmit = (e) => {
    e.preventDefault();

    setValues(data.image);
    const { name, email, phone, username, password, image } = value;

    if (!name || !email || !phone || !username || !password) {
      toast.error("Please fill out all fields");

      return;
    }
    console.log(value);
    register(value);
  };





  console.log(urls);

  return (
    <div>

      <div className='form-body'>

        <div class="container right-panel-active">

          <div className='row'>
            <div className='col-md-6'>
              {/* <img className='img-col' src={require('../components/form-pic.jpg')} alt='loading' /> */}
              <Player
                src='https://assets1.lottiefiles.com/packages/lf20_myejiggj.json'
                className="player"
                loop
                autoplay
              />
            </div>
            <div className='col-md-6'>
              <div class="">

                <form action="#" class="form" id="form2" onSubmit={register}>

                  <h2 class="form__title text-black" >Join here</h2>
                  <input type="file" placeholder="image" name="image" class="input"
                    onChange={uploadFile} />
                  <input type="text" placeholder="Name" name="name" class="input"
                    onChange={handleChange} value={value.name} />
                  <input type="email" placeholder="Email" class="input" name="email"
                    onChange={handleChange} value={value.email} />
                  <input type="text" placeholder="Phone" class="input" name='phone'
                    onChange={handleChange} value={value.phone} />
                  <input type="text" placeholder="UserName" class="input" name='username'
                    onChange={handleChange} value={value.username} />
                  <input type="text" placeholder="Password" class="input" name='password'
                    onChange={handleChange} value={value.password} />

                  <button type='submit' class="btn" >Register</button>

                </form>


              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Registeration