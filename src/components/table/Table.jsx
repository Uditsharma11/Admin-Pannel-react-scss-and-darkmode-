import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () =>{

    const rows =[
        {
            id : 1142155,
            product : "Acer nitro 5",
            img : "https://a.media-amazon.com/images/I/617LlEbpkTL._SX679_.jpg",
            customer : "Udit Sharma",
            date : "1 March",
            amount : 785,
            method : "Cash on Delivery",
            status : "Approved",
        },
        {
            id : 2235235,
            product : "Playstation 5",
            img :"https://a.media-amazon.com/images/I/41b-EDZt7dL._SX300_SY300_QL70_FMwebp_.jpg",
            customer : "Rohit Agarwal",
            date : "1 March",
            amount : 900,
            method : "Online Payment",
            status : "Approved",
        },
        {
            id : 2342353,
            product : "Redragon S101",
            img :"https://a.media-amazon.com/images/I/41SD3xJj7rL._SX300_SY300_QL70_FMwebp_.jpg",
            customer : "Mohit",
            date : "1 March",
            amount : 34,
            method : "Cash on Delivery",
            status : "Pending",
        },
        {
            id : 2357741,
            product : "Razor Blade 15",
            img :"https://m.media-amazon.com/images/I/71L9j+aijML._AC_SL1500_.jpg",
            customer : "Mr.Batra",
            date : "1 March",
            amount : 785,
            method : "Online Payment",
            status : "Approved",
        },
        {
            id : 2342355,
            product : "ASUS Rog Strix",
            img :"https://m.media-amazon.com/images/I/71kOH3in8TL._AC_SL1500_.jpg",
            customer : "Anamika Yadav",
            date : "1 March",
            amount : 785,
            method : "Online Payment",
            status : "Pending",
        },
    ];
    return <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">Tracking ID</TableCell>
          <TableCell className="tableCell">Product</TableCell>
          <TableCell className="tableCell">Customer</TableCell>
          <TableCell className="tableCell">Date</TableCell>
          <TableCell className="tableCell">Amount</TableCell>
          <TableCell className="tableCell">Payment Method</TableCell>
          <TableCell className="tableCell">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell className="tableCell" >{row.id}</TableCell>
            <TableCell className="tableCell" >
                <div className="cellWrapper">
                    <img src= {row.img} alt="" className="image" />
                    {row.product}
                </div>
            </TableCell>
            <TableCell className="tableCell" >{row.customer}</TableCell>
            <TableCell className="tableCell" >{row.date}</TableCell>
            <TableCell className="tableCell" >{row.amount}</TableCell>
            <TableCell className="tableCell" >{row.method}</TableCell>
            <TableCell className="tableCell" >
              <span className={`status ${row.status}`}>{row.status}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>;
    
}
export default List;
