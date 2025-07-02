import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Rankers from "./Rankers"
import LeaderboardTable from "./LeaderboardTable";

function LBPage()
{
    return(
        <div>
            <Header/>
            <Rankers/>
            <LeaderboardTable/>
            <Footer/>
        </div>
    )
}
export default LBPage;