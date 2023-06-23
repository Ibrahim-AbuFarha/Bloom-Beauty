// collection of your comp
import NavBar from "../components/NavBar/NavBar"
import SideBar from "../components/ProductsPage/SideBar";
import "../components/ProductsPage/Products.css"
import ProductCate from "../components/ProductsPage/ProductCate"



export default function ProductsPage(){
    return(
        <>  
        <NavBar /> 
        <div className="sec2" style={{display : "flex" , padding : "2em" , justifyContent : "space-between"}}>
        <SideBar />
        <ProductCate />
        </div>
        
        </>
    )
}


///////////////



