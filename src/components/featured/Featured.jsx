import "./featured.scss";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () =>{
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertOutlinedIcon fontSize="small"/>
            </div>
            <div className="bottom">
                <div className="featuredchart">
                    <CircularProgressbar value ={70} text ={"70%"} strokewidth = {5} />        
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">₹23k</p>
                <p className="desc"> Previous transaction processing. Last payment may not be included. </p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownOutlinedIcon fontSize="small"/>
                            <div className="resultAmount">₹1650K</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                            <div className="resultAmount">₹240K</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                            <div className="resultAmount">₹965k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default Featured