export const useLoader = () => {
    const loaderImage: string = "loader2.gif";
    return <img src={process.env.PUBLIC_URL + `/img/${loaderImage}`} style={{ width: "40px",height: "40px"}} alt="Loading" />
}