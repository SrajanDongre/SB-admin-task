import "./Other.css";

export function Other() {
  return (
    <div className="mx-4 d-flex flex-column gap-4">
      <div className="header d-flex flex-column">
        <div className="dashboard-text">Other Utilities</div>
        <div className="text-secondary">
          Bootstrap's default utility classes can be found on the official{" "}
          <a
            href="https://getbootstrap.com/docs/5.2/getting-started/introduction/"
            target="_blank"
            rel="noreferrer"
            className="bootstrap-link"
          >
            Bootstrap Documentation
          </a>{" "}
          page. The custom utilities below were created to
          <br />
          extend this theme past the default utility classes built into
          Bootstrap's framework.
        </div>
      </div>
      {/* Header ends */}

      {/* cards start */}
      <div className="row">
        {/* left card starts */}
        <div className="col-lg-6">
            {/* 1st card starts */}
            <div className="card mb-4">
                <div className="card-header text-primary fw-bold">
                Overflow Hidden Utilty
                </div>
                <div className="card-body">
                    <div className="card-text">
                    Use <span className="text-danger">.o-hidden</span> to set the overflow property of any element to hidden
                    </div>
                </div>
            </div>
             {/* 1st card ends */}

              {/* 2nd card starts */}
            <div className="card mb-4">
                <div className="card-header text-primary fw-bold">
                Progress Small Utility
                </div>
                <div className="card-body d-flex flex-column gap-4">
                    <div className="d-flex flex-column gap-1">
                    <div className="bar-text text-secondary">Normal Progress Bar</div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>

                    <div className="d-flex flex-column gap-1">
                        <div className="bar-text text-secondary">Small Progress Bar</div>
                        <div className="progress" style={{height:"9px"}}>
                        <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>
                    
                    <p className="text-secondary">Use the <span className="text-danger">.progress-sm</span> class along with <span className="text-danger">.progress</span></p>
                </div>
            </div>
             {/* 2nd card ends */}

             {/* 3rd card starts */}
            <div className="card mb-4">
                <div className="card-header text-primary fw-bold">
                Dropdown - No Arrow
                </div>
                <div className="card-body">
                    <div className="dropdown mb-3">
                        <button className="btn btn-secondary" type="button" id="drodownmenu1" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown (no arrow)
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="drodownmenu1">
                             {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a className="dropdown-item" href="#">Action</a></li>
                             {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a className="dropdown-item" href="#">Another Action</a></li>
                             {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>

                    <p className="text-secondary">Add the <span className="text-danger">.no-arrow</span> class alongside the <span className="text-danger">.dropdown</span></p>
                </div>
            </div>
             {/* 3rd card ends */}
        </div>
        {/* left card ends */}

        {/* right card starts */}
        <div className="col-lg-6">
            <div className="card">
                <div className="card-header text-primary fw-bold">
                    Rotation Utilities
                </div>
                <div className="card-body my-5">
                    <div className="d-flex flex-column gap-5 align-items-center">
                        <div className="rotate-15 bg-primary text-white w-25 d-flex justify-content-center align-items-center">.rotate-15</div>
                        <hr className="text-dark w-100"></hr>
                        <div className="rotate-n-15 bg-primary text-white w-25 d-flex justify-content-center align-items-center">.rotate-n-15</div>
                    </div>
                </div>
            </div>
        </div>
        {/* right card ends */}
      </div>
      {/* cards end */}
    </div>
  );
}