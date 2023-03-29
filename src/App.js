import "./App.css"
import Navbar from "./common/Navbar/Navbar"
import Home from "./component/pages/Home"
import About from "./component/About/About"
import Gallery from "./component/gallery/Gallery"
//import Destinations from "./Components/Destinations/Destinations"
//import DHome from "./Components/Destinations/Home"
import Destinations from "./component/Destinations/Home"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./SinglePage/Singlepage"

/*-------------blog------------ */
import Blog from "./component/Blog/Blog"
import BlogSingle from "./component/Blog/blog-single-page/BlogSingle"
import Testimonial from "./component/Testimonial/Testimonial"
import Contact from "./component/contact/Contact"
import Footer from "./common/footer/Footer"
import Login from "./component/login/Login"
import Register from "./component/login/Register"
/*-------------blog------------ */

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/destinations' exact component={Destinations} />
          <Route path='/singlepage/:id' component={SinglePage} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/blogsingle/:id' component={BlogSingle} />
          <Route path='/testimonial' component={Testimonial} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-in' component={Login} />
          <Route path='/Register' component={Register} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App