import { Card } from "~/theGoal";
import { Ability } from "./Ability";
import { Attack } from "./Attack";
import { Radiant } from "./Radiant";

const TYPES = {
  fire: <i className="fa-solid fa-fire fire"></i>,
  water: <i className="fa-solid fa-droplet water"></i>,
  grass: <i className="fa-solid fa-leaf grass"></i>,
  any: <i className="fa-solid fa-star-of-life any"></i>
};

export function Card({ card, id }: {card:Card, id:number}) {

  
  return (
    <div className="cardBackgroundOuter">
      <div className={`cardBackgroundInner ${card.type}`}>
        <div className="header">
          <div className="headerLeft">
            <div className="basic" id="basic-${id}">
              BASIC
            </div>
            <div className="pokemonName" id={`pokemonName-${id}`}>
              {card.name}
            </div>
          </div>
          <div className="headerRight">
            <div className="hp">HP</div>
            <div className="hpNum" id="pokemonHp-${id}">
              {card.hp}
            </div>
            <div className="type" id="pokemonType-${id}">
              {TYPES[card.type]}
            </div>
          </div>
        </div>
        <div style={{
          backgroundImage: "url(" + card.image + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        className="pokemonImg" id="image-${id}">
        </div>
        {card.isRadiant &&<Radiant />}
        {card.abilities?.map(({name, description}) => <Ability name={name} description={description} />)}
        {card.attacks?.map(({cost, name, power, description}) => <Attack cost={cost} name={name} power={power} description={description} />)}
          <div className="weaknessMain">
            <div className="weaknessLeft">
              <div className="weakness" id="weakness-${id}">
                weakness
              </div>
              <div className="weaknessType" id="weaknessType-${id}">
              {card.weaknessType}
              </div>
              <div className="weaknessMultiplier" id="weaknessMultiplier-${id}" dangerouslySetInnerHTML={{ __html: card.weaknessMultiplier}}>
              </div>
              <div className="resistance" id="resistance-${id}">
                resistance
              </div>
              <div className="resistanceType">
                {card.resistanceType}
              </div>
            </div>
            <div className="weaknessRight">
              <div className="retreat" id="retreat-${id}">
                retreat
              </div>
              <div className="retreatStar" id="retreatLevel-${id}">
                {card.retreatCost}
              </div>
            </div>
          </div>
          <div className="pokemonDescMain">
            <div className="pokemonDescLeft">
              <div className="pokemonCardMade" id="cardsMade-${id}">
                {card.cardsMade}
              </div>
            </div>
            <div className="pokemonDescRight">
              <div className="pokemonDescOne" id="pokemonDescUp-${id}">
                {card.pokemonDescription}
              </div>
              <div className="pokemonDescTwo" id={`pokemonDescLow-${id}`}>
                {card.pokemonDescription}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}