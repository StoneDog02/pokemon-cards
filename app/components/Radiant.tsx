import { Card } from "./Card";

export function Radiant() {
  return <div className="radiantRuleMain">
  <div className="radiantRuleUpper" id="radiantHeader-${id}">
    "Radiant Pokemon Rule"
  </div>
  <div className="radiantRuleLower" id="radiantRule-${id}">
    "You can't have more than 1 Radiant Pokemon in your deck."
  </div>
</div>
}