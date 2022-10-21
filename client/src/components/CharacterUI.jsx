import { useState } from 'react'
import { useCharacter } from './CharacterContext'
import { useEnemy } from './EnemyContext'
import Spells from './Spells'


function CharacterUI() {
    const [show, setShow] = useState(false)
    const { character, characterHealth, characterModifiers, handleCharacterModifiers } = useCharacter()
    const { enemy, enemyHealth, enemyModifiers, handleEnemyHealth, handleEnemyModifiers } = useEnemy()

    const attack = () => {
        handleCharacterModifiers(character.id)
        handleEnemyModifiers(enemy.id)
        
        let damage = (enemyHealth) - ((characterModifiers.attack_damage) - (enemyModifiers.defense))
        handleEnemyHealth(damage)

    }

    const castSpell = (spell) => {
        handleCharacterModifiers(character.id)
        handleEnemyModifiers(enemy.id)

        let damage = (enemyHealth) - ((characterModifiers.spell_damage_bonus + spell.value) - (enemyModifiers.defense))
        handleEnemyHealth(damage)
    }

    const handleShow = () => {
        setShow(!show)
    }

    const showSpells = () => {
        if (show) {return character.spells.map(spell => <Spells key={spell.id} spell={spell} castSpell={castSpell}/>)}
    }

    return(
        <div>
            {character ?
            <div>
            <h1>{character.name}</h1>
            <h2>{character.klass}</h2>
            <h4>Level: {character.level}</h4>
            <h3>{characterHealth}</h3>
            <button onClick={attack}>Attack</button>
            <button onClick={handleShow}>Spells</button>
            {showSpells()}
            </div>
            :
            null}
        </div>
    )
}

export default CharacterUI