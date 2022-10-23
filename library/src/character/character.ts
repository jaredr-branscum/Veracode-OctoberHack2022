import { CharacterType } from './characterType'

export interface Character {

  get CharacterID(): string
  get CharacterType(): CharacterType
  get Description(): any
  get Background(): any
  get Statistics(): any
  get Abilities(): any
  get Inventory(): any
  get Components(): any

  changeStatistic: (name: string, stat: any) => void

  addAbility: (abilityId: string) => void
  removeAbility: (abilityId: string) => void

}

export interface CharacterComponents {
    characterID: string
    characterType: CharacterType
    description: any
    background: any
    statistics: any
    abilities: any
    inventory: any
}
