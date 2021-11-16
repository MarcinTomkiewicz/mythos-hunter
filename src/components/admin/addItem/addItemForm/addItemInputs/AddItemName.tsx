export const AddItemName = ({itemName, handleChange}: any) =>  {
  

  
    return  (
    <>
    <div>
    Nazwa:{" "}
    <input
      type="text"
      name="itemName"
      value={itemName}
      onChange={handleChange}
    />
  </div>
  </>
  )

}