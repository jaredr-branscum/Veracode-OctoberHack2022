import { Character } from "./character"
import { CharacterType } from "./characterType"
import { DnD5eCharacter } from "./dnd5e-character/character"

interface CharacterBuilder {
    createCharacterType: (type: CharacterType) => void
    createDescription: (description: any) => void
    createBackground: (background: any) => void
    createStatistics: (statistics: any) => void
    createAbilities: (abilities: any) => void
    createInventory: (inventory: any) => void
    createCharacter: () => Character
}
  
export class DnD5eCharacterBuilder implements CharacterBuilder {
    private characterType: CharacterType = CharacterType.UNASSIGNED
    private description: any
    private background: any
    private statistics: any
    private abilities: any
    private inventory: any

    public createCharacterType (type: CharacterType): DnD5eCharacterBuilder {
        this.characterType = type
        return this;
    }

    public createDescription (description: any): DnD5eCharacterBuilder {
        this.description = description
        return this
    }

    public createBackground (background: any): DnD5eCharacterBuilder {
        this.background = background
        return this
    }

    public createStatistics (statistics: any): DnD5eCharacterBuilder {
        this.statistics = statistics
        return this
    }

    public createAbilities (abilities: any): DnD5eCharacterBuilder {
        this.abilities = abilities
        return this
    }

    public createInventory (inventory: any): DnD5eCharacterBuilder {
        this.inventory = inventory
        return this
    }

    public createCharacter (): DnD5eCharacter {
        const result = new DnD5eCharacter(this.characterType, this.description, this.background, this.statistics, this.abilities, this.inventory)
        return result
    }
}

export class ChooseBuilder {
    public useDnD5eBuilder (): DnD5eCharacterBuilder {
        return new DnD5eCharacterBuilder()
    }
}