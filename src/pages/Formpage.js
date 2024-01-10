import React from 'react';
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";




const Formpage = () => {

	
	const { id } = useParams();
	const [value, setValues] = useState({ name: "", email: "", phone: "", username: "", password: "", image: "" });;
	const [urls, seturls] = useState("");
  
	const navigate = useNavigate();

	const fetchData = async () => {

	  const res_by_id = await axios.get(`http://localhost:5000/Api/v1/getuseridbyuser/${id}`);
	  const data = await res_by_id.data;
	  setValues(data);
	  console.log(data.image);

	};
  
	useEffect(() => {
	  fetchData();
	}, []);

	const UpdateData = async (data) => {
		const { name, email, phone, username, password, image } = value
		const add = await axios.put(`http://localhost:5000/Api/v1/updateitem/${id}`,  ({ name: name, email: email, phone: phone, username: username, password: password, image: urls }));
		if (add.status === 200) {
		  toast.success("Data Update Successfully...");
		  navigate("/list");
		}else{
			toast.success("Data Notupdated...");
		}
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
	

	//   const uploadFile = (e) => {
	// 	const formData = new FormData();
	// 	formData.append("file", e.target.files[0]);
	// 	var requestOptions = {
	// 	  method: "POST",
	// 	  body: formData,
	// 	  redirect: "follow",
	// 	};
		
		  
	//   };


	  const onSubmit = (e) => {
		e.preventDefault();
		const {name,  email, phone, image } = value;
		
		if ( !name || !email || !phone ) {
		   toast.error("Please fill out all fields");
		  
		  return;
		}
		console.log(value);
		
		UpdateData(value);
	  };

	  const handleChange = (e) => {
		const name = e.target.name;
		const values = e.target.value;
	
		setValues({ ...value, [name]: values });
	  };

	//   const [file, setFile] = useState();
    //   const [fileName, setFileName] = useState("");
 
    //   const saveFile = (e) => {
    //     setFile(e.target.files[0]);
    //     setFileName(e.target.files[0].name);
	// 	uploadFile();
    //   };
 
    
	

	return (
		<div>

			<div className='form-body'>

				<div class="container right-panel-active">

					<div className='row'>
						<div className='col-md-6'>
							<img className='img-col' src={value.image} alt='loading' />
						</div>
						<div className='col-md-6'>  
							<div class="">
							 
								 <form action="#" class="form" id="form2" enctype="multipart/form-data"  onSubmit={UpdateData}>    
								{/* onSubmit={onSubmit} onChange={handleChange}*/}
							
										
									<h2 class="form__title text-black" >Upadte Details</h2>
									<input type="file" placeholder="image" name="image" class="input"
									onChange={uploadFile} />
									<input type="text" placeholder="Name" name="name" class="input"
									onChange={handleChange} value={value.name}/>
									<input type="email" placeholder="Email" class="input" name="email"
									onChange={handleChange} value={value.email}/>
									<input type="text" placeholder="Phone" class="input" name='phone'
									onChange={handleChange} value={value.phone}/>
								
									<button type='submit' class="btn">Update</button>

								</form>
								
								
							</div>
						</div>
					</div>
				</div>
			</div>


			</div>
			)
}

			export default Formpage


			