function Thoughts({ thoughts }) {
    return (
      <section>
        <div className="thoughts-title">An Ongoing Fiction</div>
        <div className="thoughts-container">
          {thoughts.map((thought, index) => (
            <div key={index} className="thought-item">{thought}</div>
          ))}
        </div>
      </section>
    )
  }
  
export default Thoughts