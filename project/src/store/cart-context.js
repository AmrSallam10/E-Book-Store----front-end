import { createContext, useState } from "react";

const CartContext= createContext({
    buying: [],
    totalBuying:0,
    totalPrice:0,
    addToCart: (addBook)=>{},
    removeFromCart: (bookID)=>{},
    inCart: (bookID)=>{}
});

export function CartContextProvider(props){
    const [userBuys, setUserBuys]= useState([]);
    const [sum, setSum] = useState(0);

    function inCartHandler(bookID){
        return userBuys.some(book => book.id===bookID);
    }

    function addToCartHandler(addBook){

      
            setUserBuys((prevBuying) => {
                return prevBuying.filter(book => book.id != addBook.id).concat(addBook);
            });
        
        // setSum((prevSum) => {
        //     return prevSum+(addBook.price*addBook.quantity);
        // })
    }
    function removeFromCartHandler(bookID){
        setUserBuys((prevBuying) => {
            return prevBuying.filter(book => book.id!==bookID);
        });
        /*setSum((prevSum) => {
            return prevSum-(addBook.price*addBook.quantity);
        })*/
    }
   
    function addToSubtotal(addBook){
        
    }
    /*const sum = userBuys.reduce(add, 0); 

    function add(accumulator, a) {
    return (accumulator.price*accumulator.quantity) + a;
    }*/

    const context={
        buying: userBuys,
        totalBuying: userBuys.length,
        // totalPrice: userBuys.reduce((accumulator, a) => {return (accumulator.price*accumulator.quantity) + a;}, 0),
        //totalPrice: ,
        addToCart: addToCartHandler,
        removeFromCart: removeFromCartHandler,
        inCart: inCartHandler
    };

    return(<CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>);
}

export default CartContext;