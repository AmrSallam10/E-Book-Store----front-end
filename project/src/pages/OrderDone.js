import { useHistory } from 'react-router-dom';
import success from "../components/images/success.png";
import "../components/ui/orderDone.css"

/*VERY IMPORTANT PAGE*/ 
/*fadaye7 */
function OrderDonePage(){
    const history= useHistory();
    const redirectToHome= () => {
        history.push('/');
    };
    return(
        <div className='ODPage'>
        <div className="success">
            Order is Successfully Completed!
        </div>
        <img src={success} alt="applause" className='applauseImage'></img>
        <br/>
        <button className="homeFromSuccess" onClick={redirectToHome}>Home</button>
        </div>
    );
}

export default OrderDonePage; //yalla

// hagaarab 7aga habla