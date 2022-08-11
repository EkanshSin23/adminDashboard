import React from 'react'
import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import Tables from '../../components/table/Tables';

const Single = () => {
    return (
        <div className='single'>
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png" alt="" className="itemImg" />
                            <div className="details">
                                <h1 className="itemTitle">Jane Doe</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">ekasnhaiu@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">9763818363</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">Civil Lines MBD</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">India</span>
                                </div>
                            </div>  </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transaction</h1>
                    <Tables />
                </div>
            </div>
        </div>
    )
}

export default Single