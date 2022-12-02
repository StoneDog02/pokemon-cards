const TYPES = {
  fire: "🔥",
  water: "💧",
  grass: "🌱",
};

export function Card({ card, type, id }) {

  
  return (
    <div className="cardBackgroundOuter">
      <div className={`cardBackgroundInner ${card.type}`}>
        <div className="header">
          <div className="headerLeft">
            <div className="basic" id="basic-${id}">
              {card.basic} BASIC
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
        <div className="radiantRuleMain">
          <div className="radiantRuleUpper" id="radiantHeader-${id}">
            {card.radiantHeader}
          </div>
          <div className="radiantRuleLower" id="radiantRule-${id}">
            {card.radiantRule}
          </div>
        </div>
        <div className="abilityBackgroundMain">
          <div className="abilityBackgroundUpper">
            <div className="abilityBackgroundOuter">
              <div className="abilityBackgroundInner">
                <div className="ability" id="abilityFrame-${id}">
                  {card.ability} Ability
                </div>
              </div>
            </div>
            <div className="abilityName" id="abilityTitle-${id}">
              {card.abilityTitle}
            </div>
          </div>
          <div className="abilityBackgroundLower">
            <div className="abilityDescription" id="abilityExplanation-${id}">
              {card.abilityExplanation}
            </div>
          </div>
          <div className="attackBackgroundMain">
            <div className="attackBackgroundUpper">
              <div className="attackLevel" id="attackLevel-${id}">
                {card.attackLevel}
              </div>
              <div className="attackName" id="attackTitle-${id}">
                {card.attackTitle}
              </div>
              <div className="attackPower" id="attackPower-${id}">
                {card.attackPower}
              </div>
            </div>
            <div className="attackBackgroundLower">
              <div className="attackDescription" id="attackExplanation-${id}">
                {card.attackExplanation}
              </div>
            </div>
          </div>
          <div className="weaknessMain">
            <div className="weaknessLeft">
              <div className="weakness" id="weakness-${id}">
                {card.weakness}
              </div>
              <div className="weaknessType" id="weaknessType-${id}">
                {card.weaknessType}
              </div>
              <div className="weaknessMultiplier" id="weaknessMultiplier-${id}" dangerouslySetInnerHTML={{ __html: card.weaknessMultiplier}}>
              </div>
              <div className="resistance" id="resistance-${id}">
                {card.resistance}
              </div>
              <div className="resistanceType">
                {card.resistanceType}
              </div>
            </div>
            <div className="weaknessRight">
              <div className="retreat" id="retreat-${id}">
                {card.retreat}
              </div>
              <div className="retreatStar" id="retreatLevel-${id}">
                {card.retreatLevel}
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
                {card.pokemonDescUp}
              </div>
              <div className="pokemonDescTwo" id={`pokemonDescLow-${id}`}>
                {card.pokemonDescLow}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}