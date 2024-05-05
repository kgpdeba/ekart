import './css/Header.css';
import data from '../Data';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container-fluid header'>
            <div className="pt-5 px-5">
                <h2 className='mb-5'> Welcome To Best Shopping Website</h2>
                <div className='row p-0 m-0'>
                    {
                        data.map((elem) =>
                            
                               
                                    <div key={elem.title} className='col-12 col-md-4 position-relative px-3 py-3'>
                                    <NavLink to={elem.link} className={'hedaerNav'}>
                                        <div style={{ backgroundColor: elem.background }} className="rounded">
                                            <div className='d-flex flex-column align-items-end justify-content-center px-4 py-3 text-white '>
                                                <p style={{ fontSize: "16px" }} className='p-0 m-0'>{elem.title}</p>
                                                <p style={{ fontSize: "26px" }} className='p-0 m-0'>{elem.total}</p>
                                            </div>
                                        </div>
                                        <div className='position-absolute bg-white px-3 py-2 rounded-circle logo'>
                                            {elem.image}
                                        </div>
                                        </NavLink>
                                    </div>
                               
                            )
                            
                    }
                </div>
            </div>
        </div>
    )
}

export default Header