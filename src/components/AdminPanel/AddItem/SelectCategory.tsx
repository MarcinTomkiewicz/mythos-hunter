export const SelectCategory = ({itemTypes, handleSelection}: any) => {
    
    return (
        <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
    <select name="itemSelection" id="itemSelection" style={{width: "15%"}} onChange={handleSelection}>
        <option value="none" key="none">Brak</option>
    {itemTypes.length > 0 ? itemTypes.map((el: any) => {
        return <option value={el} key={el}>{el}</option>
    }) : ""}
</select>
</div>
    )
}