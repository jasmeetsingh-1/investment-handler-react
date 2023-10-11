const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

//formatter is used to like handle after point things

function ResultsTable(props) {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.yearData.map((data) => {
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.savingsEndOfYear)}</td>
              <td>{formatter.format(data.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  data.savingsEndOfYear -
                    props.initialInvestment -
                    data.yearlyContribution * data.year
                )}
              </td>
              <td>
                {formatter.format(
                  props.initialInvestment + data.yearlyContribution * data.year
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ResultsTable;
