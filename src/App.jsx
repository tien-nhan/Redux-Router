import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Suspense } from "react";
import { Footer, Header } from "./component";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Girl from "./pages/Girl";
import DetailProduct from "./pages/DetailProduct";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="font-sans flex flex-col">
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<div>loading...</div>}>
              <Men />
            </Suspense>
          }
        />
        <Route exact path="/collections" element=<Men />>
          <Route
            exact
            path="men"
            element={
              <Suspense fallback={<div>loading...</div>}>
                <Men />
              </Suspense>
            }
          />

          <Route
            exact
            path="women"
            element={
              <Suspense fallback={<div>loading...</div>}>
                <Women />
              </Suspense>
            }
          />

          <Route
            exact
            path="girl"
            element={
              <Suspense fallback={<div>loading...</div>}>
                <Girl />
              </Suspense>
            }
          />
        </Route>
        <Route exact path="/products/:id" element={<DetailProduct />} />
        <Route exact path="/wish-list" element={<WishList />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
