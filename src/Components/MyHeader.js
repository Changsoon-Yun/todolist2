const MyHeader = ({left, center, right}) => {
  return (
    <header>
      <div className="headLeftBox">
        {left}
      </div>
      <div className="headCenterBox">
        <h2>{center}</h2>
      </div>
      <div className="headRightBox">
        <p>{right}</p>
      </div>
    </header>
  )
}

export default MyHeader