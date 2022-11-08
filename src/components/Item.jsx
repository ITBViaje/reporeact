import { FaTrash } from 'react-icons/fa';
const Item = ({item}) => {
    let photo = require(`../img/${item.imagen}`);
    return(
        <>
<div className="col-sm-10" key={item.id}>
            <p>{item.day}</p>
            <div className="row item">
                <div className="col-sm-3">
                 <img src={photo} alt="" className='img-fluid p-0'/>
                </div>
                <div className="col-sm-8">
                    {item.title} - {item.category}
                </div>
                <div className="col-sm-1">
                    <FaTrash style={{color: '#efeff1', cursor: 'pointer'}} />
                </div>
            </div>

        </div>
        </>
        )
    }

    export default Item