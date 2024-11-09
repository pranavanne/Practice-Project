import {calculateInvestmentResults, formatter} from '../util/investment.js';

export default function Results({inputData}) {

    const resultData = calculateInvestmentResults(inputData);
    const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultData.map((row) => {

                    const totalInterest = row.valueEndOfYear - row.annualInvestment*row.year - initialInvestment;
                    const totalAmountInvested = row.valueEndOfYear - totalInterest;

                    return (
                    <tr key={row.year}>
                        <th>{row.year}</th>
                        <th>{formatter.format(row.valueEndOfYear)}</th>
                        <th>{formatter.format(row.interest)}</th>
                        <th>{formatter.format(totalInterest)}</th>
                        <th>{formatter.format(totalAmountInvested)}</th>
                    </tr>
                );})}
            </tbody>
        </table>
    );
}