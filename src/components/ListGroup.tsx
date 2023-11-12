import { MouseEvent } from "react";

function ListGroup() {
  let item = ["Shakil", "Dilshad", "Nishar", "John Doe", "Super Man"];
  //   item = [];

  //An Event Handler
  const handleClick = (event: MouseEvent) => console.log("Clicked", event);

  //Method 1
  //   if (item.length === 0)
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No Data Found.</p>
  //       </>
  //     );

  //Method 3
  //   const message = item.length === 0 ? <p> No data found. </p> : null;

  //   function getMessage() {
  //     return item.length === 0 ? <p> No data found. </p> : null;
  //   }
  return (
    <>
      <h1>List</h1>
      {/* Method 2 Use Ternari operator instead of method 1 */}
      {/* {item.length === 0 ? <p> No data found. </p> : null} */}

      {/* Method 3 */}
      {/* {getMessage()} */}

      {/* Method 4  => always true && 'shakil' will gives shakil but false && 'Ahmad' gives false*/}
      {item.length === 0 && <p> No data found. </p>}

      <ul className="list-group">
        {item.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
