import React from 'react'

function Profile() {
    let user_info= sessionStorage.getItem("user_info");
    const info = user_info.split(' ');
    const email= info[0];
    const username= info[1];
    return (

<>
<section className="vh-100" style={{ backgroundColor: "#eee" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-12 col-xl-4">
        <div className="card" style={{ borderRadius: 15 }}>
          <div className="card-body text-center">
            <div className="mt-3 mb-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaFqZETyia_OGRMi21eSTZENOZRYGzGmHqrA&usqp=CAU"
                className="rounded-circle img-fluid"
                style={{ width: 100 }}
              />
            </div>
            <h4 className="mb-2">{username}</h4>
            <p className="text-muted mb-4">
              {email} <span className="mx-2">|</span>{" "}
              <a href="#!">{username}.Wajih.com</a>
            </p>
            <a href='/quiz'>
            <button
              type="button"
              className="btn btn-primary btn-rounded btn-lg"
            >
                SEE INTREVEIW QUESTIONS            
            </button></a>
            <div className="d-flex justify-content-between text-center mt-5 mb-2">
              <div>
                <p className="mb-2 h5">Microsoft</p>
                <p className="text-muted mb-0">Wallets Balance</p>
              </div>
              <div className="px-3">
                <p className="mb-2 h5">Orange</p>
                <p className="text-muted mb-0">Income amounts</p>
              </div>
              <div>
                <p className="mb-2 h5">Amazon</p>
                <p className="text-muted mb-0">Total Transactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</>
)
}

export default Profile
