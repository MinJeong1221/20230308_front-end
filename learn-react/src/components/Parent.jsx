import Child from "./Child";

function Parent({ count, handleCount }) {
  return (
    <div style={{ border: "3px solid blue" }}>
      <h2>Parent</h2>
      <p>count:{count}</p>
      {/* count, handleCount 값을  Child에 전달 */}
      <Child count={count} handleCount={handleCount} />
    </div>
  );
}

export default Parent;
