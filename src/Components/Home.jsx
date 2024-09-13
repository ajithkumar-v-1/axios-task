
import { useUserContext } from "./Context/usercontext";
import "../Components/Home.css";

function Home() {
  const { name, setName, email, setEmail, phone, setPhone, handleFormSubmit } =
    useUserContext();
  const formId = 11;
  return (
    <div>
      <center>
    <div className="container my-5">
      <div className="row ">

      
        {/* To set a form that gets users details */}
        <div className="col-md-10 mx-auto col-lg-4 p-20">
            <h2 className="display-4 fw-bold lh-1">
              <span className="text-primary">Enter Your</span> <span className="text-success">Data</span>
            </h2>


          <form
            className=" p-4 p-md-5"
            onSubmit={(e) => handleFormSubmit(e, { name, email, phone }, formId)}
          >
            {/* to enter name */}
            <div className="mb-3 bg-dark">
              <input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>


             {/* to enter email id */}
            <div className="mb-3 bg-dark">
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>


            {/* to enter phone number */}
            <div className="mb-3 bg-dark">
              <input
                type="number"
                className="form-control"
                id="floatingNumber"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* created a button that submit the details */}
            <button className="btn btn-primary w-100" type="submit">
              Add To List
            </button>
          </form>
        </div>




        <div className="col-lg-7 text-center text-lg-start">
          


          
        </div>

           
      </div>
     </div>
     </center>
     </div>
  );
}

export default Home;