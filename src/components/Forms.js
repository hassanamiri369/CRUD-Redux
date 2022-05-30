import React , {useState} from "react";
import { PostApiAction } from "../redux/action/action";
import { useDispatch  } from "react-redux";
import { useHistory } from "react-router-dom";

const Forms = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [phone , setPhone] = useState("")
    const [country , setCountry] = useState("")


    const NameHandler = (e) => setName(e.target.value)
    const EmailHandler = (e) => setEmail(e.target.value)
    const PhoneHandler = (e) => setPhone(e.target.value)
    const CountryHandler = (e) => setCountry(e.target.value)

    const formHandler = (e)=>{
        e.preventDefault()
        const finalData = {
            name : name,
            email : email,
            phone : phone,
            country : country
        }
        dispatch(PostApiAction(finalData))
        history.push("/")
    }
  return (
    <>
      <div>
        <form onSubmit={formHandler}>


          <div className="form-group">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="name"
              placeholder="Name"
              value={name}
              onChange={(e)=> NameHandler(e)}
            />
          </div>


          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="email"
              placeholder="email"
              value={email}
              onChange={(e)=> EmailHandler(e)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="Phone">Phone</label>
            <input
              type="number"
              className="form-control"
              id="Phone"
              aria-describedby="Phone"
              placeholder="Phone"
              value={phone}
              onChange={(e)=> PhoneHandler(e)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="Country">Country</label>
            <input
              type="text"
              className="form-control"
              id="Country"
              aria-describedby="Country"
              placeholder="Country"
              value={country}
              onChange={(e)=> CountryHandler(e)}
            />
          </div>


          
          <button type="submit" className="btn btn-primary">Submit </button>
        </form>
      </div>
    </>
  );
};

export default Forms;
