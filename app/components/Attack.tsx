import { Card } from "./Card";
import { TYPES } from "~/theGoal"

export function Attack({cost, name, power, description}: {cost: TYPES[], name: string, power: number, description: string}) {
  return <div className="attackBackgroundMain">
  <div className="attackBackgroundUpper">
    <div className="attackLevel" id="attackLevel-${id}">
      {cost}
    </div>
    <div className="attackName" id="attackTitle-${id}">
      {name}
    </div>
    <div className="attackPower" id="attackPower-${id}">
      {power}
    </div>
  </div>
  <div className="attackBackgroundLower">
    <div className="attackDescription" id="attackExplanation-${id}">
      {description}
    </div>
  </div>
</div>
}