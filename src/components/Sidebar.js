import React, { useState, useEffect } from 'react';

const Sidebar = ({ setData, product }) => {
  const filterListData = [
    "fiction",
    'thriller',
    'comic',
      ];

  const [filterArray, setFilterArray] = useState([]);

  useEffect(() => {
    const filteredData = product.filter((item) =>
      filterArray.includes(item.category)
    );
    setData(filteredData);
  }, [filterArray, product, setData]);

  const onchangeHandler = (e) => {
    let value = e.target.value;

    if (filterArray.includes(value)) {
      let arr = filterArray.filter((arr) => value !== arr);
      setFilterArray(arr);
    } else {
      setFilterArray((arr) => [...arr, e.target.value]);
    }
  };

  return (
    <>

<div classname="card-text text-black ">
    <h5>Select your Genre</h5>
    </div>
      {filterListData.map((item, id) => {
        return (
          <div className="form-check " key={id}>
            <input
              className="form-check-input"
              type="checkbox"
              name={item}
              onChange={onchangeHandler}
              value={item}
            />
            <label className="form-check-label">{item}</label>
          </div>
        );
      })}
    </>
  );
};

export default Sidebar;
