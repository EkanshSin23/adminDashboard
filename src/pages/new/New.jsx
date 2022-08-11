import React, { useState } from 'react'
import './new.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const New = ({ inputs, title }) => {
    const [file, setFile] = useState("")
    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"} alt="" />
                    </div>
                    <div className="right">
                        <form >
                            <div className="formInput" k>
                                <label htmlFor='file'>Image:<DriveFolderUploadOutlinedIcon className='icon' /></label>
                                <input type="file" id='file' style={{ display: "none" }} onChange={e => setFile(e.target.files[0])} />
                            </div>
                            {inputs.map((input) => {
                                return (<>
                                    <div className="formInput" key={input.id}>
                                        <label >{input.label}</label>
                                        <input type={input.type} placeholder={input.placeholder} />
                                    </div>
                                </>)
                            })}


                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New