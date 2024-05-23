// import Prices from "../Prices";
import Prices from "../../components/PriceList/Prices";
import { PriceProvider } from "../../context/PriceProvider";
function GetPriseList(){
    return (
        <PriceProvider>
            <Prices />
        </PriceProvider>
    )
}
export default GetPriseList;