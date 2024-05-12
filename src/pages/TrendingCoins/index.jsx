import Trends from "../../components/Trends";
import { PriceProvider } from "../../context/PriceProvider";
function TrendingCoins(){
    return (
        <PriceProvider>
            <Trends />
        </PriceProvider>
    )
}

export default TrendingCoins