import Header from "./Header";
import Png from "./Png";
import Descipt from "./Descript";

function Airbnb()
{
    return(
        <>
        <Header/>
        <div className="Box">
            <Png/>
            <Descipt/>
        </div>
        
        </>
    );
}

export default Airbnb;