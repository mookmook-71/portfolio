import { Challenges } from "../../pages/portfolio/Portfolio";

function ChallengesDropdown({ activeIndex, className }) {
  Challenges;
  return (
    <select className={className}>
      {Challenges.map((challenge, index) => (
        <option value={challenge.name} selected={activeIndex === index}>
          Day {index + 1}. {challenge.name}
        </option>
      ))}
    </select>
  );
}

export default ChallengesDropdown;
