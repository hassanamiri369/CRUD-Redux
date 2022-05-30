import React from 'react'

import {GetApiAction} from '../redux/action/action'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {

    const dispatch = useDispatch()
    // استیت رو از داخل ردیوسر مورد نظر باید بکشیم بیرون 
    const responseData = useSelector(state => state.reducer.details)
    console.log(responseData)

    console.log(responseData)
    React.useEffect(() => {
        // این داره فقط گت میکنه دیتا رو 
        dispatch(GetApiAction())

    }, [dispatch])



    return (
        <>
            <div>
                <h1>React Redux Crud Operation | Read Operation</h1>
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
                            </tr>
                        </thead>

                        <tbody>
                            {responseData.map((item , index) => (
                                <tr key={item.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>@{item.email}</td>
                                <td>@{item.country}</td>
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