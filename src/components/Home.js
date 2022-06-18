import React from 'react'

import { GetApiAction, DeleteApiAction } from '../redux/action/action'
import { useDispatch, useSelector } from 'react-redux'


import { AiFillEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";


import { Link } from 'react-router-dom';
const Home = () => {

    const dispatch = useDispatch()    

    const responseData = useSelector(state => state.reducer.details)
    console.log(responseData)


    const isDeleteResponse = useSelector(state => state.reducer.isDeleteResponse)
    console.log(isDeleteResponse)


    React.useEffect(() => {
        dispatch(GetApiAction())

    }, [dispatch])


    if (isDeleteResponse) {
        alert("your data is deleted!")
        window.location.reload(false)
    }

    return (
        <>
            <div>
                <h1>React Redux Crud Operation | Read Operation</h1>
                <div  className="create-form">
                    <div>
                        <Link to="/form"><button className='btn btn-primary '>Create</button></Link>
                    </div>
                </div>
                <hr />

                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Country</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {responseData && responseData.map((item, index) => (
                                <tr key={item.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                    <td>@{item.email}</td>
                                    <td>@{item.country}</td>
                                    <td>
                                        <Link to={`/edit/${item.id}`}>
                                            <AiFillEdit color='blue' size="24" />
                                        </Link>
                                    </td>
                                    <td onClick={() => dispatch(DeleteApiAction(item.id))}><span><FaTrashAlt color='red' size="22" /></span></td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Home