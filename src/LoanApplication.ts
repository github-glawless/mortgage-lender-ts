import { LoanStatus } from "./LoanStatus";
import MortgageLender from "./MortgageLender";

export default class LoanApplication extends MortgageLender{
loanAmount: number = 0;
DTI: number = 0;
creditScore: number = 0;
savings: number = 0;
approved: boolean = false;
qualified: boolean = false;
loanStatus:LoanStatus;
constructor(loanAmount,DTI,creditScore,savings)
{
    super()
    this.loanAmount = loanAmount
    this.DTI = DTI
    this.creditScore = creditScore
    this.savings = savings
}

isApproved():boolean
{
    return this.approved
}


isQualified()
{
    return this.qualified
}

}