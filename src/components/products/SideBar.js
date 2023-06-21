function SideBar() {
  return (
    <div
      style={{
        width: "25%",
        height: "100vh",
        border: "2px solid #4f4f4f",
        padding: "1em",
        boxShadow : "0 8px 6px"
      }}
      className="Cont"
    >
      <h1>Filters</h1>
      <form>
        <select style={{ border: "none", borderBottom: "1px solid black" , marginBottom : "1em"}}>
          <option value="" disabled selected hidden>
            Porduct Type
          </option>
          <option>Face</option>
          <option>Masks</option>
          <option>Hands</option>
        </select>
        <br />
        <select style={{ border: "none", borderBottom: "1px solid black" , marginBottom : "1em"}}>
          <option value="" disabled selected hidden>
            Ingredient Type
          </option>
          <option>Face</option>
          <option>Masks</option>
          <option>Hands</option>
        </select><br/>
        {/* 3 Selection */}
        <label>Skin Type : </label><br/>
        <input type="checkBox"/><label>all</label><br/>
        <input type="checkBox"/><label>Combination</label><br/>
        <input type="checkBox"/><label>Dry</label><br/>
        <input type="checkBox"/><label>Normal</label><br/>
        <input type="checkBox"/><label>Sensitive</label><br/>
        <hr/>

      </form>
    </div>
  );
}

export default SideBar;
