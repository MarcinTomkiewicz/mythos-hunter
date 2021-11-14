export const SelectCategory = ({itemTypes, handleSelection}: any) => {

    return (
    <select name="itemSelection" id="itemSelection" style={{width: "15%"}} onChange={handleSelection}>
        <option value="none" key="none">Brak</option>
    {itemTypes.length > 0 ? itemTypes.map((el: any) => {
        return <option value={el} key={el}>{el}</option>
    }) : ""}
</select>
    )
}