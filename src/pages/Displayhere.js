import React from 'react';
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";



const initialState = {
    name: "",
    email: "", 
    phone: "",
  };

const Displayhere = () => {

    const { id } = useParams();
	const [values, setValues] = useState(initialState);
	const [fetchdata, setFetchdata] = useState([]);
  
	const navigate = useNavigate();
	const fetchData = async () => {
	  const res_by_id = await axios.get(`http://localhost:4000/Api/v1/getidbyuser/${id}`);
	  const data2 = await res_by_id.data.data;
	  setValues(data2);
	  console.log(data2);
	};
  
	useEffect(() => {
	  fetchData();
	}, []);

	const UpdateData = async (userData) => {
		const add = await axios.put(`http://localhost:4000/Api/v1/updateitem/${id}`, userData);
		if (add.status === 200) {
		  toast.success("Data Update Successfully...");
		  navigate("/list");
		}
	  };

	  const onSubmit = (e) => {
		e.preventDefault();
		const { name, email, phone } = values;
		
		if (!name || !email || !phone ) {
		   toast.error("Please fill out all fields");
		  
		  return;
		}
		console.log(values);
		const add1 = UpdateData(values);
	  };
	  const handleChange = (e) => {
		const names = e.target.name;
		const value = e.target.value;
	
		setValues({ ...values, [names]: value });
	  };


    
  return (
    <div>

    <div className='form-body'>

				<div class="container right-panel-active">

					<div className='row'>
						<div className='col-md-6'>
							<img className='img-col' src={require('../components/form-pic.jpg')} alt='loading' />
						</div>
						<div className='col-md-6'>
							<div class="">
								<form action="#" class="form" id="form2" onSubmit={onSubmit}>
									<h2 class="form__title text-black" >Upadte Details</h2>
									<input type="text" placeholder="Name" class="input" value={values.name}
									onChange={handleChange} />
									<input type="email" placeholder="Email" class="input" value={values.email}
									onChange={handleChange} />
									<input type="text" placeholder="phone" class="input" value={values.phone}
									onChange={handleChange} />
									<button type='submit' class="btn">Upadte</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

    
    </div>
  )
}

export default Displayhere