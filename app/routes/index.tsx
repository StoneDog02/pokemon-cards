import { json, LinksFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Card } from "~/components/Card";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

async function getCards() {
  const query = `
  query {
    cardCollection {
      cards:items {
        name
      }
    }
  }
  `
  const response = await fetch('https://graphql.contentful.com/content/v1/spaces/yr7ioi9ceyks/environments/master?access_token=6ZtAZe2ZBgS3jNmxGgaBWU241qFvtWnk_jAy488xgd0&query=' + query)
  const data = await response.json()
  console.log(data)
  return data.data.cardCollection.cards
}

export const loader: LoaderFunction = async () => {
  const cards = await getCards()
  console.log(cards)
  return json({
    // cards,
    cards: [
      {
        stage: "BASIC",
        name: "Radiant Salamire",
        type: "fire",
        hp: 160,
        image:
          "https://images.unsplash.com/photo-1601062087032-5f07e3304320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3732&q=80",
        radiantHeader: "Radiant Pokemon Rule",
        radiantRule: "You can't have more than 1 Radiant Pokemon in your deck.",
        abilityFrame: "Ability",
        abilityTitle: "Excited Heart",
        abilityExplanation:
          "This Pokemon's attack cost * less for each Prize card your opponent has taken.",
        attackLevel: "🔥 * * * *",
        attackTitle: "Combustion Blast",
        attackPower: 250,
        attackExplanation:
          "During your next turn, this Pokemon can't use Combustion Blast",
        weakness: "weakness",
        weaknessType: "💧",
        weaknessMultiplier: "&times2",
        resistance: "resistance",
        resistanceType: "",
        retreat: "retreat",
        retreatLevel: "* * *",
        cardsMade: "011/078",
        pokemonDescUp: "It spits fire that is hot enough to melt boulders.",
        pokemonDescLow: "It may cause forest fires by blowing flames.",
      },
      {
        stage: "BASIC",
        name: "Hippounce",
        type: "water",
        hp: 200,
        image:
          "https://images.unsplash.com/photo-1567360649870-dde5c9c4d785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
        radiantHeader: "Radiant Pokemon Rule",
        radiantRule: "You can't have more than 1 Radiant Pokemon in your deck.",
        abilityFrame: "Ability",
        abilityTitle: "Water Skin",
        abilityExplanation:
          "This pokemon takes 20 less damage from your opponent's attacks when activated.",
        attackLevel: "💧 💧",
        attackTitle: "Belly Flop",
        attackPower: 180,
        attackExplanation:
          "Take one round to jump into the sky. Next round, slam into the ground causing 💧 damage",
        weakness: "weakness",
        weaknessType: "🌱",
        weaknessMultiplier: "&times3",
        resistance: "resistance",
        resistanceType: "",
        retreat: "retreat",
        retreatLevel: "* * * *",
        cardsMade: "075/0112",
        pokemonDescUp: "It splashes enough water to put out any blaze.",
        pokemonDescLow: "It may cause floods and tsunamies.",
      },
      {
        stage: "BASIC",
        name: "Herbuito",
        type: "grass",
        hp: 130,
        image:
          "https://images.unsplash.com/photo-1569506474518-ba135df90c6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
        radiantHeader: "Radiant Pokemon Rule",
        radiantRule: "You can't have more than 1 Radiant Pokemon in your deck.",
        abilityFrame: "Ability",
        abilityTitle: "Stubbornness",
        abilityExplanation:
          "This pokemon has a last stand if hit points reduced to 0. Hit points increased to 10hp.",
        attackLevel: "🌱 * *",
        attackTitle: "Quick Kick",
        attackPower: 110,
        attackExplanation:
          "You may switch your opponent's active pokemon with another pokemon",
        weakness: "weakness",
        weaknessType: "🔥",
        weaknessMultiplier: "&times5",
        resistance: "resistance",
        resistanceType: "🪨",
        retreat: "retreat",
        retreatLevel: "* *",
        cardsMade: "002/064",
        pokemonDescUp: "It stands around all day not wanting to do anything.",
        pokemonDescLow:
          "It may cause anger and frustration in the pokemon owner.",
      },
    ],
  });
};

export default function Index() {

  const {cards} = useLoaderData()

  return (
    <div>
      {cards.map((card, idx) => <Card card={card} id={idx} key={idx}></Card>)}
      
      {/* <Card card={cards[1]} id={1}></Card>
      <Card card={cards[2]} id={2}></Card> */}
    </div>
  );
}
