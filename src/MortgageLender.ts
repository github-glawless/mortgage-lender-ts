import { LoanStatus } from "./LoanStatus";

export default class MortgageLender {
availableFunds: number = 0;
pendingFunds: number = 0;


addFunds(funds)
{
    this.availableFunds += funds
}

reviewApplication(loanapp):boolean
{
    if(loanapp.DTI <= 36 && loanapp.creditScore > 620 && (loanapp.savings / loanapp.loanAmount) > .25)
    {   
        return loanapp.isQualified = true
    }
    else
    {
        return loanapp.isQualified = false
    }

}

approve(loanapp):boolean
{
    if(this.availableFunds < loanapp.loanAmount)
    {
        loanapp.loanStatus = LoanStatus.Rejected
        return loanapp.approved = false
    }
    else 
    {
        loanapp.loanStatus = LoanStatus.Accepted
        return loanapp.approved = true
    }
}

sendOffer(loanapp)
{
    this.availableFunds -= loanapp.loanAmount
    this.pendingFunds += loanapp.loanAmount
    loanapp.loanStatus = LoanStatus.Pending
}

releaseOffer(loanapp)
{
    if(loanapp.loanStatus == LoanStatus.Accepted)
        this.pendingFunds -= loanapp.loanAmount
    else
    {
        this.pendingFunds -= loanapp.loanAmount
        this.availableFunds = this.availableFunds + loanapp.loanAmount
    }
}



}