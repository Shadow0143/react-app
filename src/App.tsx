import ListGroup from "./components/ListGroup";

function App() {
  let item = ["Shakil", "Dilshad", "Nishar", "John Doe", "Super Man"];

  return (
    <div>
      <ListGroup item={item} heading="Names" />
    </div>
  );
}

export default App;
