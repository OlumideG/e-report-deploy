import React, { useState } from 'react';
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import decode from 'jwt-decode';
import '../../App.css';
import "../UserDashboard/UserDashboard.css";


function ReportForm({ addReport }) {
    const [button, setButton] = useState(false);
    const [report, setReport] = useState({
        category: "",
        address: "",
        details: "",
        imageurl: "",
        localgovernment: "",
        privatereport: false,
        user_id: "",
        status: "Pending",
        date:"",
        time:""
    })



    const uploadImage = async e => {
        const files = e.target.files;
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'reports')

        const res = await fetch("https://api.cloudinary.com/v1_1/depcgv5nm/image/upload",
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()
        // console.log(file.secure_url)
        setReport({ ...report, imageurl: file.secure_url })
    }


    const handlePrivateReport = () => {
        report.privatereport = !report.privatereport
        // console.log(report.privatereport);
        setReport({ ...report, privatereport: report.privatereport })
    }



    const handleSubmit = async (e) => {
        e.preventDefault()
        const { user } = decode(localStorage.token)
        if (report.address.length === 0 && report.category.length === 0 && report.localgovernment.length === 0) {
            console.log("PLEASE FILL THE MESSAGE BOX")
            // alert('Please fill the form properly')
            toast.info('Please fill the form properly ',{
                position: toast.POSITION.TOP_CENTER,
                autoClose:false
            })
        } else if (report.imageurl.length === 0) {
            // alert("WAIT!! PICTURE IS LOADING INTO OUR DATABASE")
            toast.info('WAIT!! ADD IMAGE OR PICTURE IS LOADING INTO OUR DATABASE ',{
                position: toast.POSITION.TOP_CENTER,
                autoClose:false
            })
        } else {
            try {
                const reportPosting = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        category: report.category,
                        address: report.address,
                        details: report.details,
                        imageUrl: report.imageurl,
                        localgovernment: report.localgovernment,
                        privatereport: report.privatereport,
                        user_id: user,
                        date:new Date().toLocaleDateString('en', { year: 'numeric', month: 'long', day: '2-digit' }),
                        time:new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})

                    })
                };
                fetch('/dashboard/home', reportPosting)
                    .then(response => response.json())
                    .then(data => setReport(data));

                // console.log(user);
                // console.log(report)
                addReport(report)
                toast.success("Report Created")
                setReport({
                    category: "",
                    address: "",
                    details: "",
                    imageurl: "",
                    localgovernment: "",
                    privatereport: false,
                    user_id: "",
                    status: "Pending",
                    date:"",
                    time:""
                })
                setButton(false)

            } catch (error) {
                console.log(console.error()
                )
            }

        }

    }


    return (
        <div>
            <div className=""><button onClick={() => setButton(true)} className="modal-button"><i className=" space-icon fa fa-plus"></i>Add new report</button></div>
            <form className=" form-font form-inline" action="">
                <Modal show={button} onHide={() => setButton(false)}>
                    <Modal.Header closeButton >New Report</Modal.Header>
                    <Modal.Body>
                        <label htmlFor="category">Choose a report category</label>
                        <select className="custom-select my-1 mr-sm-2" value={report.category} onChange={(e) => setReport({ ...report, category: e.target.value })}>
                            <option disabled ={true} value="">Category type</option>
                            <option value="fire accident">Fire Accident</option>
                            <option value="road accident">Road Accident</option>
                            <option value="armed robbery">Armed Robbery</option>
                            <option value="health emergency">Health Emergency</option>
                            <option value="flood">Flood</option>
                            <option value="others">others</option>
                        </select>

                        <div style={{ marginBottom: "5px" }}>
                            <input type="text" className="form-control" placeholder="Incident Address" required="required" value={report.address} onChange={(e) => setReport({ ...report, address: e.target.value })} />
                        </div>
                        <label htmlFor="category">Select Local Government</label>
                        <select className="custom-select my-1 mr-sm-2" value={report.localgovernment} onChange={(e) => setReport({ ...report, localgovernment: e.target.value })}>
                           <option disabled ={true} value="">Select Local Government</option>
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
                        <div className="form-group">
                            <label htmlFor="details">Incident Details</label>
                            <textarea className="form-control" value={report.details} rows="3" onChange={(e) => setReport({ ...report, details: e.target.value })}></textarea>
                            <label htmlFor="image">Add image</label>
                            <input type="file" className="form-control-file" name="file" onChange={uploadImage} />
                        </div>
                        <h6><input type="checkbox" name="checkbox" value={report.privatereport} onChange={handlePrivateReport} />  Mark as private report</h6>
                        {/* <input type="checkbox" name="checkbox" value={report.privatereport} onChange={handlePrivateReport} /> */}
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-primary" onClick={handleSubmit} >Save Report</button>
                    </Modal.Footer>
                </Modal>
            </form>
        </div>
    )

}


export default ReportForm;