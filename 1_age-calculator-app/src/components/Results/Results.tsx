import { Result } from "../../types/ComponentProps";
import "./Results-styles.scss";

const Results = ({ resultYears, resultMonths, resultDays }: Result) => {
  return (
    <section className="age">
      <p className="age__data">
        <span className="age__value">
          {resultYears !== null ? resultYears : "--"}
        </span>{" "}
        years
      </p>
      <p className="age__data">
        <span className="age__value">
          {resultMonths !== null ? resultMonths : "--"}
        </span>{" "}
        months
      </p>
      <p className="age__data">
        <span className="age__value">
          {resultDays !== null ? resultDays : "--"}
        </span>{" "}
        days
      </p>
    </section>
  );
};

export default Results;
