import { Character, CharacterComponents } from "../character"
import { CharacterType } from "../characterType"
import {v4 as uuidv4} from 'uuid';

export class DnD5eCharacter implements Character {

    private characterID: string = ""
    private characterType: CharacterType  = CharacterType.UNASSIGNED
    private description: any = {}
    private background: any = {}
    private statistics: any = {}
    private abilities: any = {}
    private inventory: any = {}

    constructor(type: CharacterType, description: any, background: any, statistics: any, abilities: any, inventory: any) {
      this.characterID = uuidv4()
      this.characterType = type
      this.description = description
      this.background = background
      this.statistics = statistics
      this.abilities = abilities
      this.inventory = inventory
    }

    get CharacterID(): string {
      return this.characterID
    }
    get CharacterType(): CharacterType {
      return this.characterType
    }
    get Description(): any {
      return this.description
    }
    get Background(): any {
      return this.background
    }
    get Statistics(): any {
      return this.statistics
    }
    get Abilities(): any {
      return this.abilities
    }
    get Inventory(): any {
      return this.inventory
    }

    get Components (): CharacterComponents {
      return {
        "characterID": this.characterID,
        "characterType": this.characterType,
        "description": this.description,
        "background": this.background,
        "statistics": this.statistics,
        "abilities": this.abilities,
        "inventory": this.inventory
      } as CharacterComponents
    }

    public changeStatistic (name: string, stat: any): void {
      //stub
    }
    public addAbility (abilityId: string): void {
      //stub
    }
    public removeAbility (abilityId: string): void {
      //stub
    }   
}

