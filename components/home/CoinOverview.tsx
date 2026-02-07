import React from 'react'
import Image from "next/image";
import {formatCurrency} from "@/lib/utils";
import {fetcher} from "@/lib/coingecko.actions";
import {CoinOverviewFallback} from "@/components/home/fallback";

const CoinOverview = async () => {
    let coin;
    try {
        coin = await fetcher<CoinDetailsData>('coins/bitcoin', {revalidate: 60});
    } catch (error) {
        console.error('Error fetching coin overview:', error);
        return <CoinOverviewFallback/>
    }

    return (
        <div id="coin-overview">
            <div className="header py-2">
                <Image src={coin.image.large} alt={coin.name} width={56} height={56}/>
                <div className="info">
                    <p>{coin.name} / {coin.symbol.toUpperCase()}</p>
                    <h1>{formatCurrency(coin.market_data.current_price.usd)}</h1>
                </div>
            </div>
        </div>
    )
}
export default CoinOverview
