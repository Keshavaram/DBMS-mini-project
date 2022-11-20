function Comp({name,addr,policy,email}) {
    return <div className={"dataComp"}>
        <div className={"eachField"}>{policy}</div>
        <div className={"eachField"}>{name}</div>
        <div className={"eachField"}>{email}</div>
        <div className={"eachField"}>{addr}</div>
    </div>
}
export default Comp
