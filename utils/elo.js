import EloRank from "elo-rank";

const elo = new EloRank(15);



function eloRank(Wrank,Lrank){
    const expectedScoreW = elo.getExpected(Wrank,Lrank)
    const expectedScoreL = elo.getExpected(Lrank,Wrank)

    const newWrank = elo.updateRating(expectedScoreW,1,Wrank);
    const newLrank = elo.updateRating(expectedScoreL,0,Lrank);

    return {
        newWrank,
        newLrank
    }
}


export default eloRank