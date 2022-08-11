export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user", headerName: "USER", width: 230, renderCell: (params) => {
            return (
                <>
                    <div className="cellWithImg">
                        <img src={params.row.img} className="cellImg" alt="" />
                        {params.row.userName}
                    </div>
                </>
            )
        }
    },
    { field: "email", headerName: "Email", width: 230 },
    { field: "age", headerName: "Age", width: 100 },
    {
        field: "status", headerName: "Status", width: 160,
        renderCell: (params) => {
            return (
                <>
                    <div className={`cellWithStatus ${params.row.status} `}>

                        {params.row.status}
                    </div>
                </>
            )
        }
    },
]


export const userRows = [
    {
        id: 1,
        userName: "Snow",
        img: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
        status: "passive",
        email: "eaknshsin23@gmail.com",
        age: 35
    },
    {
        id: 2,
        userName: "Snow",
        img: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
        status: "passive",
        email: "eaknshsin23@gmail.com",
        age: 35
    },
    {
        id: 3,
        userName: "Snow",
        img: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
        status: "passive",
        email: "eaknshsin23@gmail.com",
        age: 35
    },
    {
        id: 4,
        userName: "Snow",
        img: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
        status: "active",
        email: "eaknshsin23@gmail.com",
        age: 35
    },
    {
        id: 5,
        userName: "Snow",
        img: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
        status: "active",
        email: "eaknshsin23@gmail.com",
        age: 35
    },
    {
        id: 6,
        userName: "Snow",
        img: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
        status: "active",
        email: "eaknshsin23@gmail.com",
        age: 35
    },
    {
        id: 7,
        userName: "Snow",
        img: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
        status: "active",
        email: "eaknshsin23@gmail.com",
        age: 35
    },
    {
        id: 8,
        userName: "Snow",
        img: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
        status: "active",
        email: "eaknshsin23@gmail.com",
        age: 35
    },
    {
        id: 9,
        userName: "Snow",
        img: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
        status: "active",
        email: "eaknshsin23@gmail.com",
        age: 35
    },
    {
        id: 10,
        userName: "Snow",
        img: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
        status: "active",
        email: "eaknshsin23@gmail.com",
        age: 35
    },
    {
        id: 11,
        userName: "Snow",
        img: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
        status: "active",
        email: "eaknshsin23@gmail.com",
        age: 35
    },
    {
        id: 12,
        userName: "Snow",
        img: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
        status: "active",
        email: "eaknshsin23@gmail.com",
        age: 35
    },
]