 import {ChooseBuilder, CharacterType, Character} from 'microrpg'

clientCode()

function clientCode () {
    const builder = new ChooseBuilder().useDnD5eBuilder()
    console.log('Creating empty NPC:')
    builder.createCharacterType(CharacterType.NPC)
    let npc:Character = builder.createCharacter()
    console.log(npc.Components)
  
    console.log('Creating standard player:')
    const standardBuilder = new ChooseBuilder().useDnD5eBuilder()
    let player: Character = standardBuilder
        .createCharacterType(CharacterType.PLAYER)
        .createDescription('description')
        .createBackground('background')
        .createAbilities([{
            name: 'ability1',
            description: 'does something'
            }
        ])
        .createCharacter()
    console.log(player.Components)
  
}
