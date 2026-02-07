import {Suspense} from "react";
import TrendingCoins from "@/components/home/TrendingCoins";
import CoinOverview from "@/components/home/CoinOverview";
import {CoinOverviewFallback, TrendingCoinsFallback} from "@/components/home/fallback";

const Page = async () => {
    return (
        <main className="main-container">
            <section className="home-grid">
                <Suspense fallback={<CoinOverviewFallback />}>
                    <CoinOverview />
                </Suspense>
                <Suspense fallback={<TrendingCoinsFallback />}>
                    <TrendingCoins />
                </Suspense>
            </section>
            <section className="w-full mt-7 space-y-4">
                Categories
            </section>
        </main>
    )
}
export default Page

