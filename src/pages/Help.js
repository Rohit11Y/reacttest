import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Help = () => {

  const [data, setData] = useState([]);
  const [sub_user_data, setuserData] = useState([]);
  const { id } = useParams();
 
  const initialstate = {
    name: "",
    email: "",
    phone: "",
  };
  const user_initialstate = {
    name: "",
    user_id: "",
  };
  const [val, setValues] = useState(initialstate);
  const [subvalue, setsubValue] = useState(user_initialstate);
  const navigate = useNavigate();

  const getuser = () => {
    fetch("http://localhost:5000/Api/v1/getuser")
      .then((response) => {
        return response.json();
      })
      .then((item) => {
        setData(item.data);
        console.log(item.data);
      });
  };
  
  // const deleteData = async (data) => {
   
	// 	const add = await axios.delete(`http://localhost:4000/Api/v1/deleteuserid/${id}`, data);
	// 	if (add.status === 200) {
	// 	  toast.success("Data Deleted Successfully...");
	// 	}else{
	// 		toast.success("Data Notdeleted yet...");
	// 	}
  //   getuser();
	// };
  function deleteUser(_id) {
  
    fetch(`http://localhost:5000/Api/v1/deleteuserid/${_id}`, { 
      method: "DELETE"
    }).then((result) => {
      result.json().then((res) => {
        console.warn(res)
        window.alert("data removed")
        getuser();
      })
    })
  }
  
  useEffect(() => {
    getuser();
    // get_subuser();
  }, []);

  



  return (
    <div>

      <div className="container">
        <div className="row">
        <div className="col-md-1"></div>
          <div className="col-md-10">

         
             
          

            <table className="table">
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
                 
                </tr>
              </thead>
              <tbody>
              { data.map((val, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{val.name}</td>
                      <td>{val.email}</td>
                      <td>{val.phone}</td>

                   


                      <td>
                        <ul>
                          <li><Link
                            className="btn "
                            to={`/form/${val._id}`}>
                           Edit
                            <i class="fa-solid fa-edit"></i>
                          </Link></li>
                         <li><Link  onClick={ () => deleteUser(val._id)} className='fa-solid fa-trash'>Delete</Link></li>
                        </ul>
                      </td>
                    </tr>
                  );
                })
              }
              </tbody>
            </table>

            
          </div>
          <div className="col-md-1">
        
              

          </div>
        </div>
      </div>
    </div>
  );
};


export default Help;