// collection of your comp
import NavBar  from "../components/layout/NavBar"
import ProductCate from "../components/products/ProductCate"   
import SideBar from "../components/products/SideBar"

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