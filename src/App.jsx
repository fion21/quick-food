import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { CartContextProvider } from "./components/store/CartContext";
import { UserProgressContextProvider } from "./components/store/UserProgressContext";

function App() {
    return (
        <>
            <UserProgressContextProvider>
                <CartContextProvider>
                    <Header />
                    <Meals />
                    <Cart />
                    <Checkout />
                </CartContextProvider>
            </UserProgressContextProvider>
        </>
    );
}

export default App;
