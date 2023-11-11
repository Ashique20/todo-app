import { signOut } from "@firebase/auth";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import auth from "../Firebase/firebase.init";

const Todo = () => {
  const [services, setServices] = useState([]);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://game-server-ruby.vercel.app/service")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => console.log(error));
  };
// Post Method
  const onSubmit = (data) => {
    const sure = window.confirm('Want to Add Service?');

    if (sure) {
      axios
        .post("https://game-server-ruby.vercel.app/service", data)
        .then((response) => {
          console.log(response.data);
          // After a successful post, refetch the data
          fetchData();
          // Reset the form input
          reset();
        })
        .catch((error) => console.error(error));
    } else {
      return;
    }
  };

  // Delete Method
  const handleDelete = (id) => {
    const sure = window.confirm('Want to Delete?');

    if (sure) {
      axios
        .delete(`https://game-server-ruby.vercel.app/service/${id}`)
        .then((response) => {
          console.log(response.data);
          // After a successful deletion, refetch the data
          fetchData();
        })
        .catch((error) => console.error(error));
    } else {
      return;
    }
  };

  // Update Method
  const handleUpdate = (id) => {
    const newData = window.prompt('Enter the updated data:');
    if (newData !== null) {
      updateService(id, newData);
    }
  };

  const updateService = (id, newData) => {
    axios
      .put(`https://game-server-ruby.vercel.app/service/${id}`, { Food: newData })
      .then((response) => {
        console.log('Update response:', response.data);
        fetchData();
      })
      .catch((error) => console.error('Update error:', error));
  };

  return (
    <div className="justify-center items-center min-h-screen flex text-black "style={{ backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/009/160/262/original/abstract-background-with-gradient-color-and-dynamic-shadow-on-background-background-for-wallpaper-eps-10-free-vector.jpg") ` }}>
      <div className="card  bg-[#504135]	 shadow-xl ml-24">
        <div className="card-body   w-96">
          <div className="flex flex-col w-full border-opacity-50 text-primary">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* input field */}
              <div className="form-control text-primary">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input {...register("Food", { required: true })} name="Food" type="text" placeholder="Add Service" className="input input-bordered" />
              </div>
              {/* Add Button */}
              <button type="submit" className="btn mt-2 w-40 bg-primary text-black" disabled={Object.keys(errors).length > 0}>Add</button>
            </form>
          </div>

          <div className="sm:grid grid-cols-1  mt-20">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <tbody>
                  {services.map((service, index) => (
                    <tr key={service._id}>
                      <th className="text-primary">{index + 1}</th>
                      <td className="font-bold text-primary ">{service?.Food}</td>
                      {/* Delete button */}
                      <td><button onClick={() => handleDelete(service?._id)} ><img className="h-10" src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png" alt="" /></button></td>
                      {/* Update Button */}
                      <td><button className="bg-primary btn text-black" onClick={() => handleUpdate(service._id)}>Update</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
                    {/* Sign Out Button */}
          <button className="text-white" onClick={() => signOut(auth)}>Sign out</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
