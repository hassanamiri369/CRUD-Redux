import React, { useState } from "react";
import { PostApiAction, UpdateApiAction } from "../redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import GetDetailsByHooks from "../Hooks/GetDetailsByHooks";

const UpdateDetails = () => {

  const dispatch = useDispatch()
  const { id } = useParams()


  // detailsById  ===> یه ابجکتی هست از دیتای قدیمی که میخواهیم بریزیم توی اینپوت ها برای ادیت کردن 
  const [detailsById] = GetDetailsByHooks(id)
  console.log("detailsById", detailsById)

 

  const isUpdateResponse = useSelector(state => state.reducer.isUpdateResponse)
  console.log(isUpdateResponse)


  const history = useHistory()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [country, setCountry] = useState("")


  const NameHandler = (e) => setName(e.target.value)
  const EmailHandler = (e) => setEmail(e.target.value)
  const PhoneHandler = (e) => setPhone(e.target.value)
  const CountryHandler = (e) => setCountry(e.target.value)


  React.useEffect(() => {
    const data = () => {
      if (detailsById.data) {
        setName(detailsById.data.name)
        setEmail(detailsById.data.email)
        setPhone(detailsById.data.phone)
        setCountry(detailsById.data.country)
      }
    }
    data()
  }, [detailsById.data])



  const formHandler = (e) => {
    e.preventDefault()
    const finalData = {
      name: name,
      email: email,
      phone: phone,
      country: country
    }
    // خب این همون فانکشنی یه که دیتای اپدیت شده رو با خودش میبره 
    dispatch(UpdateApiAction(finalData, id))

  }




  if (isUpdateResponse) {
    alert("your data is updated ")
    history.push("/")
  }
  return (
    <>
      <div className="form-container">
        <div className="form-group-all">
          <h1>Edit Detail Page  id : {id}</h1>
          <form onSubmit={formHandler}>


            <div className="form-group">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="name"
                placeholder="Name"
                defaultValue={name}
                onChange={(e) => NameHandler(e)}
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
                defaultValue={email}
                onChange={(e) => EmailHandler(e)}
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
                defaultValue={phone}
                onChange={(e) => PhoneHandler(e)}
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
                defaultValue={country}
                onChange={(e) => CountryHandler(e)}
              />
            </div>



            <button type="submit" className="btn btn-primary">Edit </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateDetails;
