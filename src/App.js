import styles from "styles/App.module.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import clsx from "clsx";
import Payment from "components/Payment";

// PAGES
import Home from "pages/Home";
import Detail from "pages/Detail";
import Category from "pages/Category";

// COMPONENTS
import Header from "components/Header";
import BasketSidebar from "components/BasketSidebar";
import Footer from "components/Footer";
import MobileBottomNav from "components/MobileBottomNav";

// HOOKS
import useMobileDetect from "hooks/useMobileDetect";

// CONTEXT
import BasketContextProvider from "context/BasketContext";

//SLIDER
import SliderWithArrows from "components/sliderwitharrows";

const App = () => {
  const device = useMobileDetect();

  return (
    <Router>
      <BasketContextProvider>
        <div className={clsx(device.type === "mobile" && styles.paddingForMobile, styles.container)}>
          <Header />
          <SliderWithArrows />
          <main className={styles.main}>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/product/:slug">
                <Detail />
              </Route>
              <Route path="/category/:slug">
                <Category />
              </Route>
            </Switch>
            <Payment />
          </main>
          <Footer />
        </div>
        <BasketSidebar />
        {device.type === "mobile" && <MobileBottomNav />}
      </BasketContextProvider>
    </Router>
  );
};

export default App;