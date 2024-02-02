import { Challenges } from "../../pages/portfolio/Portfolio";

function ChallengesDropdown({ className }) {
  Challenges;
  return (
    <select className={className}>
      {Challenges.map((challenge, index) => (
        <option value={challenge.name}>
          Day {index + 1}. {challenge.name}
        </option>
      ))}
    </select>
  );
}

export default ChallengesDropdown;
