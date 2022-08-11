import React from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../datatableSource';
import { Link } from 'react-router-dom';

const Datatable = () => {
    
    const actionColumn = [
        {
            field: "action", headerName: "Action", width: 200, renderCell: () => {
                return (
                    <div className='cellAction'>
                        <Link to="/users/test" style={{ textDecoration: "none" }}>  <div className='viewButton'>View</div></Link>
                        <div className='deleteButton'>Delete</div>
                    </div>
                )

            }
        }
    ]
    return (
        <div className='datatable'>
            <div className="datatableTitle">Add new User
                <Link to="/users/new" style={{ textDecoration: "none" }} className="link">Add new</Link>
            </div>
            <div style={{ height: 700, width: '100%' }}>
                <DataGrid className='datagrid'
                    rows={userRows}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default Datatable