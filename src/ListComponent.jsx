import {React, useState} from "react";
import "./ListComponent.css"

const ListComponent = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [list, setList] = useState([]);
    const header = ["#","name", "location", "action"];

    const addItem = () => {
        const item = {
            name: name,
            location: location
        };
        
        setList(prevList => [...prevList, item]);


    };
    const renderTableHeader = () => {
        return header.map((key, index) => {
            return (
              <th scope="col"
                key={index}
              >
                {key.toUpperCase()}
              </th>
            );
          });
    };
    const removeItem = (rowIndex) => {
        const newList = list.filter((item, index) => index != rowIndex);
        setList(newList);
    }
    return (
        <div>
            <div className="form">
                <div>
                    <label>Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name.." onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Location</label>
                    <input type="text" id="location" name="loaction" placeholder="Your location.." onChange={(e) => setLocation(e.target.value)}/>
                </div>           
                <button onClick={addItem}>Submit</button>    
            </div>
            <div className="table">
            <table className="table">
                <thead>
                    <tr>
                    {renderTableHeader()}
                    </tr>
                </thead>
                <tbody>
                    
                    {list.reverse().map((item, index )=> {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.location}</td>
                                <td><button onClick={() => removeItem(index)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        
        </div>
    );
};
export default ListComponent;