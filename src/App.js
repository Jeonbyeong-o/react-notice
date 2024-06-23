import "./css/header_footer.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Header from "./component/header";
import Footer from "./component/footer";
import Component1 from "./component/contents1";
import Component2 from "./component/contents2";
import Calculator from "./component/calculator/calculator";
import Table from "./component/dataTable/table";
import SignIn from "./component/signIn/SignIn";
import FindId from "./component/signIn/FindId";
import FindPw from "./component/signIn/FindPw";
const Layout = () => {
  const locate = useLocation();
  console.log(locate);

  return (
    <>
      {!locate.pathname.includes("/Find") && <Header />}
      <Routes>
        <Route exact path="/component" element={<Component1 />} />
        <Route exact path="/component2" element={<Component2 />} />
        <Route exact path="/calculator" element={<Calculator />} />
        <Route exact path="/dataTable" element={<Table />} />
        <Route exact path="/signIn" element={<SignIn />} />
        <Route exact path="/FindId" element={<FindId />} />
        <Route exact path="/FindPw" element={<FindPw />} />
      </Routes>
      <Footer />
    </>
  );
};
function App() {
  return (
    <>
      <Router>
        <Layout />
      </Router>
    </>
  );
}

export default App;
