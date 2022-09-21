
import { LineChart } from "./Components/LineChart";
import { DoughnutChart } from "./Components/Doughnut";
import { BarChart } from "./Components/BarChart";

export function Charts() {
  return (
    <div className="mx-4 d-flex flex-column gap-4">
      <div className="header d-flex flex-column">
        <div className="dashboard-text">Charts</div>
        <div className="text-secondary">
          Chart.js is a third party plugin that is used to generate the charts
          in this theme. The charts below have been customized - for further
          <br />
          customization options, please visit the{" "}
          <span className="text-primary">
            <a
              className="chart-link"
              href="https://www.chartjs.org/docs/latest/"
              target="_blank"
              rel="noreferrer"
            >
              official Chart.js documentation.
            </a>
          </span>
        </div>
      </div>
      {/* header ends */}

      {/* cards start */}
      <div className="row">
        {/* left side charts start */}
        <div className="col-lg-8">
            {/* area chart starts */}
          <div className="card mb-4">
            <h5 className="card-header text-primary fw-bold">Area Chart</h5>
            <div className="card-body">
              {/* line chart - earning overview */}
              <div className="card-text chart bg-white">
                <LineChart />
                <hr></hr>
                <p className="text-secondary">
                  Styling for the area chart can be found in the{" "}
                  <span className="text-danger">
                    /js/demo/chart-area-demo.js
                  </span>{" "}
                  file.
                </p>
              </div>
            </div>
          </div>
          {/* Area chart ends */}

          {/* bar chart starts */}
          <div className="card mb-4">
            <h5 className="card-header text-primary fw-bold">Bar Chart</h5>
            <div className="card-body">
              {/* line chart - earning overview */}
              <div className="card-text chart bg-white">
                <BarChart />
                <hr></hr>
                <p className="text-secondary">
                  Styling for the area chart can be found in the{" "}
                  <span className="text-danger">
                    /js/demo/chart-area-demo.js
                  </span>{" "}
                  file.
                </p>
              </div>
            </div>
          </div>
          {/* bar chart ends */}
        </div>
        {/* left side charts end */}

        {/* right side charts start */}
        <div className="col-lg-4">
          <div className="card">
            <h5 className="card-header text-primary fw-bold">Donut Chart</h5>
            <div className="card-body">
              {/* line chart - earning overview */}
              <div className="card-text chart bg-white">
                <DoughnutChart className="doughnut-chart" />
                <hr></hr>
                <p className="donut-text text-secondary">
                  Styling for the donut chart can be
                  <br />
                  found in the{" "}
                  <span className="text-danger">
                    /js/demo/chart-pie-
                    <br />
                    demo.js
                  </span>{" "}
                  file.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* right side charts end */}
      </div>
      {/* cards end */}
    </div>
  );
}