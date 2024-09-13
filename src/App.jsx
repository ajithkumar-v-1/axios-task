
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { UserContextProvider } from "./Components/Context/usercontext";
import ListPages from "./Components/ListPage";


function App(){
  return (
    <div>
<Header/>
<UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ListPages" element={<ListPages />} />
        </Routes>
</UserContextProvider>
<Footer/>
    </div>
  )
}

export default App;