// collection of your comp
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/ProductsPage/SideBar";
import "../components/ProductsPage/Products.css"
import ProductCate from "../components/ProductsPage/ProductCate"
import Card from "../components/ProductsPage/Card";
import Rate from "../components/ProductsPage/Rate"



export default function ProductsPage(){
    return(
        <>  
        {/* <NavBar />  */} 
        <div className="sec2" style={{display : "flex" , padding : "2em" , justifyContent : "space-between"}}>
        {/* <Card /> */}
        <SideBar />
        <ProductCate />
        <Rate />
        </div>
        
        </>
    )
}

///////////////
