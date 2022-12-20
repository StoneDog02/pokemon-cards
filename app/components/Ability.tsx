import { Card } from "./Card";

export function Ability({name, description}: {name: string, description: string}) {
  return <div className="abilityBackgroundMain">
  <div className="abilityBackgroundUpper">
    <div className="abilityBackgroundOuter">
      <div className="abilityBackgroundInner">
        <div className="ability" id="abilityFrame-${id}">
          "Ability"
        </div>
      </div>
    </div>
    <div className="abilityName" id="abilityTitle-${id}">
    {name}
    </div>
  </div>
  <div className="abilityBackgroundLower">
    <div className="abilityDescription" id="abilityExplanation-${id}">
      {description}
    </div>
  </div>
  </div>
} 






















// DESTRUCTURING:
// const name = "pikachu"
// const hp = 50

// const card = { name, hp }


// function takeInCard(card) {
//   const name = card.name
//   const hp = card.hp
//   console.log(`The pokemon's name is ${name}`, `The pokemon's hp is ${hp}`)
// }
// takeInCard(card)

// function takeInCardTwo(card) {
//   const {name, hp} = card
//   console.log(`The pokemon's name is ${name}`, `The pokemon's hp is ${hp}`)
// }
// takeInCardTwo(card)

// function takeInCardThree({name, hp}) {
//   console.log(`The pokemon's name is ${name}`, `The pokemon's hp is ${hp}`)
// }
// takeInCardThree(card)