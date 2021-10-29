export const useLoader = () => {
    const loaderImage: string = "loader.gif";
    return <img src={process.env.PUBLIC_URL + `/img/${loaderImage}`} alt="Loading" />
}