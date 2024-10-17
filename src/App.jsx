 import Header from './components/Header/Header'
// import ProductList from './components/Product/ProductList'
// import Category from './components/Category/Category'

import Accueil from './pages/Accueil'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import Catalogue from './pages/Catalogue'
import ApiCatalogue from './pages/ApiCatalogue'
import FormProduct from './pages/FormProduct'
import Calcul from './pages/Calcul'



function App() {


//   const [age, setAge] = useState(8);
//   const [prenom, setPrenom] = useState('Jean');
//   const [ product, setProduct] = useState([]);

// const hook = useState()

// const changerPrenom = ()=> {
//   setPrenom("Bernard ")
// }

 

  return (
    <div>
     <Header />
      <Routes>
      <Route path ="/" element ={<Accueil />}  />
      <Route path ="/catalogue" element ={<Catalogue />}  />
      <Route path ="/apicatalogue" element ={<ApiCatalogue />}  />
      <Route path ="/newproduct" element ={<FormProduct />}  />
      <Route path ="/list" element ={<Calcul />}  />



      

      </Routes>








   






{/* 
 <Header />

    <div className=" d-flex justify-content-center">
    <Category name ="Alimentation"   />
 
    </div>

    <h2> {prenom} {age}</h2>
    <h2> Age : {age}</h2>
    <button onClick = {changerPrenom} > Changer</button>
    <button onClick = {() => setAge(15)}> Changer 2</button>
 
    <div className="row">

     
        <div className="col-md-3">
            <ProductList />
        </div>
        <div className="col-md-3">
            <ProductList />
        </div>
        <div className="col-md-3">
            <ProductList />
        </div>
        <div className="col-md-3">
            <ProductList />
        </div>
    </div>
  */}
    </div> 
  )
}

export default App
