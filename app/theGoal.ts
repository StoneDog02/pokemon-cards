import { Card } from "./components/Card"

export enum TYPES{
  FIRE = "fire",
  GRASS = "grass",
  WATER = "water",
  EARTH = "earth",
  ANY = "any"
}

enum STAGES{
  BASIC = "basic",
  STAGE_ONE = "stage one",
  STAGE_TWO = "stage two",
  VMAX = "vmax",
  EX = "ex"
}

type Attack = {
  cost: TYPES[],
  name: string,
  power: number
  description: string
}

type Ability = {
  name: string,
  description: string
}

export type Card = {
  stage: STAGES
  type: TYPES
  name: string
  hp: number
  image: string
  isRadiant: boolean
  abilities?: Ability[]
  attacks?: Attack[]
  weaknessType: TYPES[]
  weaknessValue: number
  resistanceType?: TYPES[]
  resistanceValue?: number
  retreatCost: TYPES[]
  cardsMade: string
  pokemonDescription: string
}

const ExcitedHeart:Ability = {
  name: "Excited Heart",
  description: `This Pokemon's attack cost ${TYPES.ANY} less for each Prize card your opponent has taken.`
}

const Stubbornness:Ability = {
  name: "Stubborness",
  description: "This Pokemon has a last stand if hit points are reduced to 0. Hit points increased to 10hp."
}

const WaterSkin:Ability = {
  name: "Water Skin",
  description: "This Pokemon takes 20 less damage from your opponent's attack when activated."
}

const QuickKick:Attack = {
    cost: [TYPES.GRASS, TYPES.ANY, TYPES.ANY],
    name: "Quick Kick",
    power: 110,
    description: "You may switch your opponent's active Pokemon with another Pokemon."
}

const BellyFlop:Attack = {
  cost: [TYPES.WATER, TYPES.WATER],
  name: "Belly Flop",
  power: 180,
  description: `Take one round to jump into the sky. Next round, slam into the ground causing ${TYPES.WATER} damage`
}

const CombustionBlast:Attack = {
  cost: [TYPES.FIRE],
  name: "Combustion Blast",
  power: 250,
  description: "During your next turn, this Pokemon can't use Combustion Blast."
}

export const Herbuito:Card = {
  stage: STAGES.BASIC,
  type: TYPES.GRASS,
  name:  "Herbuito",
  hp: 130,
  image: "https://images.unsplash.com/photo-1569506474518-ba135df90c6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
  isRadiant: false,
  abilities: [Stubbornness],
  attacks: [QuickKick],
  weaknessType: [TYPES.FIRE],
  weaknessValue: 2,
  resistanceType: [TYPES.EARTH],
  resistanceValue: 30,
  retreatCost: [TYPES.GRASS, TYPES.ANY],
  cardsMade: "002/064",
  pokemonDescription: "It stands around all day not wanting to do anything. It may cause frustration in the Pokemon Owner."
}

export const Hippounce:Card = {
  stage: STAGES.BASIC,
  type: TYPES.WATER,
  name: "Hippounce",
  hp: 200,
  image: "https://images.unsplash.com/photo-1567360649870-dde5c9c4d785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
  isRadiant: false,
  abilities: [WaterSkin],
  attacks: [BellyFlop],
  weaknessType: [TYPES.GRASS],
  weaknessValue: 3,
  resistanceType: [TYPES.FIRE],
  resistanceValue: 30,
  retreatCost: [TYPES.WATER, TYPES.WATER, TYPES.ANY, TYPES.ANY],
  cardsMade: "075/0112",
  pokemonDescription: "It splashes enough water to put out any blaze. It may cause floods and tsunamis."
}

export const RadiantSalamire:Card = {
  stage: STAGES.BASIC,
  type: TYPES.FIRE,
  name: "Radiant Salamire",
  hp: 160,
  image: "https://images.unsplash.com/photo-1601062087032-5f07e3304320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3732&q=80",
  isRadiant: true,
  abilities: [ExcitedHeart],
  attacks: [CombustionBlast],
  weaknessType: [TYPES.WATER],
  weaknessValue: 2,
  resistanceType: [TYPES.GRASS, TYPES.EARTH],
  resistanceValue: 30,
  retreatCost: [TYPES.FIRE, TYPES.ANY, TYPES.ANY],
  cardsMade: "011/078",
  pokemonDescription: "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames."
}