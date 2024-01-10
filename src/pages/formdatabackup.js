import React from 'react';
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";




const Formpage = () => {

	
 
	const { id } = useParams();
	const [value, setValues] = useState("");
	const [val, setVal] = useState("");
  
	const navigate = useNavigate();
	const fetchData = async () => {
	  const res_by_id = await axios.get(`http://localhost:5000/Api/v1/getuseridbyuser/${id}`);
	  const data = await res_by_id.data;
	  setValues(data);
	  console.log(data);
	};
  
	useEffect(() => {
	  fetchData();
	}, []);

	const UpdateData = async (data) => {
		const add = await axios.put(`http://localhost:5000/Api/v1/updateitem/${id}`, data);
		if (add.status === 200) {
		  toast.success("Data Update Successfully...");
		  navigate("/list");
		}else{
			toast.success("Data Notupdated...");
		}
	  };

	  const onSubmit = (e) => {
		e.preventDefault();
		const {name,  email, phone } = value;
		
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

	  const [file, setFile] = useState();
      const [fileName, setFileName] = useState("");
 
      const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
      };
 
    //   const uploadFile = async (e) => {
    //     const formData = new FormData();
    //     formData.append("file", file);
    //     formData.append("fileName", fileName);
    //     try {
    //       const res = await axios.post(
    //         "http://localhost:4000/Api/v1/imageUpload",
    //         formData
    //       );
    //       console.log(res);
		 
    //     } catch (ex) {
    //       console.log(ex);
    //     }
    //   };
	

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
							 
								 <form action="#" class="form" id="form2" enctype="multipart/form-data"  onSubmit={onSubmit}>    
								{/* onSubmit={onSubmit} onChange={handleChange}*/}
							
										
									<h2 class="form__title text-black" >Upadte Details</h2>
									<input type="file" placeholder="image" name="image" class="input"
									onChange={saveFile} value={value.image}/>
									<input type="text" placeholder="Name" name="name" class="input"
									onChange={handleChange} value={value.name}/>
									<input type="email" placeholder="Email" class="input" name="email"
									onChange={handleChange} value={value.email}/>
									<input type="text" placeholder="Phone" class="input" name='phone'
									onChange={handleChange} value={value.phone}/>
								
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

			export default Formpage


			