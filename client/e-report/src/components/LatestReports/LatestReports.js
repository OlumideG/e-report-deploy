import React, { useState } from 'react';
import '../../App.css';
import '../UserDashboard/UserDashboard.css';




const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div>
            <div className="accordion-wrapper">

                <div
                    className={`accordion-title ${isOpen ? "open" : ""}`}
                    onClick={() => setOpen(!isOpen)}
                >
                    {title}
                </div>
            </div>
            <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                <div className="accordion-content">{children}</div>
            </div>
        </div>

    );
};


const UserReportCards = ({ info }) =>
    <div className="todo">
        <div className="wrapper" style={{ borderRadius: "10px", marginTop: "20px" }}>

            <div className="card-body">
                <h5 className="card-title font-weight-bold text-uppercase form-font">{info.category} at {info.address}</h5>
                <h5 className="card-title font-weight-bold text-uppercase form-font"> {info.localgovernment}</h5>

                <button className="editbutton" style={{ fontSize: "14px", position: "relative", bottom: "60px", left: "750px" }}>{info.time}</button>
                {/* <button className="editbutton" style={{ fontSize: "14px", position: "relative", bottom: "60px", left: "750px" }}>{info.date}</button> */}
                {/* <button className="delbutton" style={{ fontSize: "14px", position: "relative", bottom: "60px", left: "790px" }} onClick={() => deleteReport(index, info)}> <i className="fa fa-trash fa-1.5x"></i></button> */}
                <div>

                    <Accordion title="View details">
                        <div className="myview" style={{ backgroundColor: "whitesmoke", padding: "10px", borderTop: "4px solid rgba(0, 0, 0, 0.25)" }}>
                            <div>
                                <img className="card-img" src={info.imageurl} alt="" style={{ width: "300px", height: "200px" }} />
                            </div>
                            <div className="accordion-details">
                                <h5 className="card-title font-weight-bold text-uppercase form-font">Report Date: {info.date}</h5>
                                <h5 className="card-title font-weight-bold text-uppercase form-font"> Report Time: {info.time}</h5>
                                <h5 className="card-title font-weight-bold text-uppercase form-font">Report Local Government: {info.localgovernment}</h5>
                                <div className="word-break">
                                    <h5 className="card-title font-weight-bold text-uppercase form-font"> Report Details: {info.details}</h5>
                                </div>
                            </div>
                        </div>
                    </Accordion>
                </div>
            </div>
        </div>
    </div>

// const Cards = ({ info, index }) =>
//     <div className="todo">
//         <div className="card" style={{ width: "18rem" }}>

//             <div className="card-body">
//                 <h5 className="card-title font-weight-bold text-uppercase form-font">{info.category} at {info.address}</h5>
//                 <h5 className="card-title font-weight-bold text-uppercase form-font"> {info.localgovernment}</h5>
//                 <p className="card-text"> {info.details} </p>
//                 <img className="card-img-top" src={info.imageurl} alt="" style={{ width: "200px", height: "150px" }} />
//                 <div className="edit-delete">
//             </div>

//             </div>
//         </div>
//     </div>;


const LatestReports = () => {
    const [search, setSearch] = useState("");
    // const[numberOfReports, setNumberOfReports] = useState(Number)
    const [numberOfReports, setNumberOfReports] = useState(0)
    const [loading, setLoading] = useState(false);
    const [latestReport, setLatestReport] = useState([
        {
            category: "",
            address: "",
            details: "",
            imageurl: "",
            localgovernment: "",
        }
    ])



    // useEffect(() => {
    //     handleSubmit()
    //       );
    //   }, [search, reports]);

    //   if (loading) {
    //     return <p>Loading countries...</p>;
    //   }


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(search)
       
         setLoading(false);

        await fetch(`/dashboard/home/latest/${search}`)
            .then(response => response.json())
            .then(result => {
                setLatestReport(result)
                setLoading(true);
                //  console.log(result)
                setNumberOfReports(result.length)
            })
        console.log(latestReport)
        //   setNumberOfReports(latestReport.length +1)

    }

    return (
        <div className="latestContainer">
            {/* <h2>Latest Reports</h2> */}
            {/* <label htmlFor="category">Select Local Government</label> */}
            <div className="search-bar">



                <select className="custom-select my-1 mr-sm-2" value={search} onChange={(e) => setSearch(e.target.value)}>
                    <option disabled={true} value="">Select Local Government</option>
                    <option value="Agege">Agege</option>
                    <option value="ajeromi-Ifelodun">Ajeromi-Ifelodun</option>
                    <option value="alimosho">Alimosho</option>
                    <option value="amuwo-Odofin">Amuwo-Odofin</option>
                    <option value="apapa">Apapa</option>
                    <option value="badagry">Badagry</option>
                    <option value="epe">Epe</option>
                    <option value="eti-Osa">Eti-Osa</option>
                    <option value="ibeju-Lekki">Ibeju-Lekki</option>
                    <option value="ifako-Ijaiye">Ifako-Ijaiye</option>
                    <option value="ikeja">Ikeja</option>
                    <option value="ikorodu">Ikorodu</option>
                    <option value="kosofe">Kosofe</option>
                    <option value="lagos island">Lagos Island</option>
                    <option value="lagos mainland">Lagos Mainland</option>
                    <option value="mushin">Mushin</option>
                    <option value="ojo">Ojo</option>
                    <option value="oshodi-isolo">Oshodi-Isolo</option>
                    <option value="somolu">Somolu</option>
                    <option value="surulere">Surulere</option>
                </select>
                <button onClick={handleSubmit}>Search</button>
            </div>

            <div>
                <div className={loading ? "" : "hide"} >Number of latest reports found is {numberOfReports} in {search}</div>

                {

                    numberOfReports < 1 ?
                        <div> Nothing Here</div> :
                        // <div>Number of latest reports found is {numberOfReports} in {search}</div> &&
                        latestReport.map((info, index) => (
                            <UserReportCards
                                key={index}
                                index={index}
                                info={info}

                            />
                        ))}

            </div>
        </div>
    )


}


export default LatestReports