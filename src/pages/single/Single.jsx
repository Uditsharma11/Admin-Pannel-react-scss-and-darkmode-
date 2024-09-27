import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
const Single = () =>{
    return (
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://i.pinimg.com/564x/f9/23/68/f92368ac6737e58b34917a23ce35e82e.jpg" alt="" className="itemImg" />
                            <div className="details">
                                <h1 className="itemTitle">Amit Sharma</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">amit.sharma@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+91 0123 121 144 </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Adress:</span>
                                    <span className="itemValue">House-no: 123/4 near sarojni market New Delhi</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country</span>
                                    <span className="itemValue">India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title= "User Spending (Last 6 Months)"/>
                    </div>
                </div>
                <div className="bottom">
                <h1 className="title">Last Transactions</h1>
                    <List/>
                </div>
            </div>
        </div>
    )
}
export default Single 