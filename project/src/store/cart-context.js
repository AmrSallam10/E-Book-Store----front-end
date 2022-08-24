import { createContext, useState } from "react";

const CartContext= createContext({
    buying: [],
    totalBuying:0,
    addToCart: (addBook)={},
    removeFromCart: (bookID)={},
    inCart: (bookID)={}
});

export function CartContextProvider(props){
    const [userBuys, setUserBuys]= useState([]);

    function addToCartHandler(addBook){
        setUserBuys((prevBuying) => {
            return prevBuying.concat(addBook);
        });
    }
    function removeFromCartHandler(bookID){
        setUserBuys((prevBuying) => {
            return prevBuying.filter(book => book.id!==bookID);
        });
    }
    function inCartHandler(bookID){
        return userBuys.some(book => book.id===bookID);
    }

    const context={
        buying: userBuys,
        totalBuying: userBuys.length,
        addToCart: addToCartHandler,
        removeFromCart: removeFromCartHandler,
        inCart: inCartHandler
    };

    return(<CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>);
}

export default CartContext;