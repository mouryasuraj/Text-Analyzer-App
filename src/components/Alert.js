const Alert = (props) => {

    const capitalize = (word) =>{
        const lower = word.toLowerCase();
        const firstLeterCapital = lower.charAt(0).toUpperCase() + lower.slice(1);
        return firstLeterCapital;
    }

  return (
    props.alert && 
      <div className="container">
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      </div>
    
  );
};

export default Alert;
