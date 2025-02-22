export interface InvestmentInput {
  initialInvestment: number;
  duration: number;
  expectedReturn: number;
  annualInvestment: number;
}
// Tambien se puede declarar por tipos aunque interface es mas popular
// export type InvestmentInput = {
//   initialInvestment: number;
//   duration: number;
//   expectedReturn: number;
//   annualInvestment: number;
// };
