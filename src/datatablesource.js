export const userColumns = [{ field: 'id', headerName: 'ID', width: 70 },{
    field: "user", headerName: "User", width: 230, renderCell:(params)=>{
        return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt= "avatar" />
                {params.row.username}
            </div>    
        );
      },
    },
    {
        field: 'email', 
        headerName: 'Email', 
        width: 230 
    },
    {
        field: 'age', 
        headerName: 'Age', 
        width: 100
    },
    {
        field: 'status', 
        headerName: 'Status', 
        width: 160,
        renderCell:(params)=>{
            return(
                <span className={`cellWithStatus ${params.row.status}`}>{params.row.status}</span>
            )
        }
    },

];

//temp data
export const userRows = [
    {
      id: 1,
      username: "amit_sharma",
      img: "https://i.pinimg.com/564x/f9/23/68/f92368ac6737e58b34917a23ce35e82e.jpg",
      status: "active",
      email: "amit.sharma@gmail.com",
      age: 28,
    },
    {
      id: 2,
      username: "sita_verma",
      img: "https://i.pinimg.com/736x/b1/c7/39/b1c7394d1233a343a1833c106d836ccf.jpg",
      status: "passive",
      email: "sita.verma@gmail.com",
      age: 24,
    },
    {
      id: 3,
      username: "rajesh_gupta",
      img: "https://i.pinimg.com/236x/df/c1/df/dfc1dfc79da8c51d6fcb4f7e164b203d.jpg",
      status: "active",
      email: "rajesh.gupta@gmail.com",
      age: 35,
    },
    {
      id: 4,
      username: "pooja_singh",
      img: "https://i.pinimg.com/564x/3d/cc/79/3dcc797203858fe622db07af91672958.jpg",
      status: "pending",
      email: "pooja.singh@gmail.com",
      age: 21,
    },
    {
      id: 5,
      username: "ananya_iyer",
      img: "https://i.pinimg.com/564x/cc/98/af/cc98af3324c40fd98887a25789688872.jpg",
      status: "active",
      email: "ananya.iyer@gmail.com",
      age: 34,
    },
    {
      id: 6,
      username: "rahul_chopra",
      img: "https://i.pinimg.com/736x/d4/74/3e/d4743e0a4243bcb14c29e28373d6a598.jpg",
      status: "passive",
      email: "rahul.chopra@gmail.com",
      age: 27,
    },
    {
      id: 7,
      username: "manoj_nair",
      img: "https://i.pinimg.com/564x/84/53/95/8453959d483c57b594618bef7d5d469f.jpg",
      status: "active",
      email: "manoj.nair@gmail.com",
      age: 44,
    },
    {
      id: 8,
      username: "ravi_patel",
      img: "https://i.pinimg.com/564x/99/11/91/9911910ab0a18bf6abad71dd6b82f0ae.jpg",
      status: "pending",
      email: "ravi.patel@gmail.com",
      age: 38,
    },
    {
      id: 9,
      username: "priya_reddy",
      img: "https://i.pinimg.com/564x/91/69/84/916984a10f3105fbc75a4aa4e4ff040b.jpg",
      status: "active",
      email: "priya.reddy@gmail.com",
      age: 31,
    },
    {
      id: 10,
      username: "vikram_shah",
      img: "https://i.pinimg.com/736x/c0/33/b9/c033b9e5c145b08a9a899c051f4eb44d.jpg",
      status: "pending",
      email: "vikram.shah@gmail.com",
      age: 42,
    },
    {
      id: 11,
      username: "kavita_mehta",
      img: "https://i.pinimg.com/564x/90/ac/0b/90ac0b1ee74f860b81f6408a2199d326.jpg",
      status: "passive",
      email: "kavita.mehta@gmail.com",
      age: 36,
    },
    {
      id: 12,
      username: "neha_desai",
      img: "https://i.pinimg.com/736x/0d/fb/e2/0dfbe2532389d4ad944e860d0d090780.jpg",
      status: "active",
      email: "neha.desai@gmail.com",
      age: 22,
    },
  ];
  