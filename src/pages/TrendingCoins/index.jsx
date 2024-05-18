import Trends from "../../components/Trends";
import { TrendCoinsProvider } from "../../context/trandCoinsProvider";
function TrendingCoins(){
    return (
        <TrendCoinsProvider>
            <Trends />
        </TrendCoinsProvider>
    )
}

export default TrendingCoins