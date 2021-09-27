import React from 'react'
import "./dashboard.css"
const Dashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row shadow p-5 mb-3 bg-body rounded" style={{ height: "10vh" }}>

            </div>
            <div className="row">

                <div className="col-2 shadow p-5 mb-5 " style={{ height: "90vh", marginLeft: "1vw", marginBottom: '2vh' }}>
                    <div className="row" style={{ marginBottom:"15%" }}>
                        <a href="#" class="cta">
                            <span>Click me</span>
                            <svg width="13px" height="10px" viewBox="0 0 13 10">

                            </svg>
                        </a>

                    </div>
                    <div className="row" style={{ marginBottom:"15%" }}>
                        <a href="#" class="cta">
                            <span>Click me</span>
                            <svg width="13px" height="10px" viewBox="0 0 13 10">

                            </svg>
                        </a>

                    </div>

                    <div className="row" style={{ marginBottom:"15%" }}>
                        <a href="#" class="cta">
                            <span>Click me</span>
                            <svg width="13px" height="10px" viewBox="0 0 13 10">

                            </svg>
                        </a>

                    </div>

                    <div className="row" style={{ marginBottom:"15%" }}>
                        <a href="#" class="cta">
                            <span>Click me</span>
                            <svg width="13px" height="10px" viewBox="0 0 13 10">

                            </svg>
                        </a>

                    </div>






                </div>
                <div className="col-10 shadow p-3 mb-5 bg-body rounded" style={{ height: "90vh", width: '80%', marginLeft: "1vw", marginBottom: '2vh' }}>

                </div>
            </div>



        </div>



    )
}

export default Dashboard
