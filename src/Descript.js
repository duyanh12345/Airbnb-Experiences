import Img1 from "./Image/img1.png"
import Img2 from "./Image/img2.png"
import Img3 from "./Image/img3.png"
import des1 from "./Image/des1.png"
import des2 from "./Image/des2.png"
import des3 from "./Image/des3.png"

function Descipt()
{
    return(
        <>
        <p className="Tx">Online Experiences</p>
        <p className="smallTx">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        <div className="Scroll">
            <div>
                <img className="smallImg" src={Img1}></img>
                <img className="smalldes" src={des1}></img>
            </div>
            <div>
                <img className="smallImg" src={Img2}></img>
                <img className="smalldes" src={des2}></img>
            </div>
            <div>
                <img className="smallImg" src={Img3}></img>
                <img className="smalldes" src={des3}></img>
            </div>
        </div>
        </>
    );
}

export default Descipt;