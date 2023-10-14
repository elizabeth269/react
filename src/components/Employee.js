function Employee(props) {
    return (
        <>
            <h3>Employee {props.name}</h3>
            <p>{props.role ? props.role : 'no role'}</p>
            {props.role ? <p>{props.role}</p> :  <p>no role</p> }
        </>
    
    );

}
export default Employee;