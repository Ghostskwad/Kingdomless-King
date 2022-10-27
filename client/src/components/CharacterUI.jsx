import { useState } from 'react'
import { useCharacter } from './CharacterContext'
import { useSibling } from './DeckerContext'
import { useEnemy } from './EnemyContext'
import Spells from './Spells'


function CharacterUI({ turn, handleTurns }) {
    const [show, setShow] = useState(false)
    const { character, characterHealth, characterModifiers, handleCharacterHealth, handleCharacterModifiers } = useCharacter()
    const { sibling, siblingHealth, siblingModifiers, handleSiblingHealth, handleSiblingModifiers } = useSibling()
    const { enemy, enemyHealth, enemyModifiers, handleEnemyHealth, handleEnemyModifiers } = useEnemy()
    
    
    const attack = () => {
        let min = 0
        let max = enemy.health
        handleCharacterModifiers(character.id)
        handleEnemyModifiers(enemy.id)
        
        let damage = (enemyHealth) - ((characterModifiers.attack_damage) - (enemyModifiers.defense))
        handleEnemyHealth(Math.min(Math.max(damage, min), max))
        handleTurns()

    }

    const castSpell = (spell) => {
        let spellArray = ["Singe", "Glacier", "Miasma", "Holy"]    

        if (spell.name === 'Heal') {
            handleCharacterModifiers(character.id)
            handleSiblingModifiers(sibling.id)

            if (siblingHealth > 0) {
                let min = 0
                let max = sibling.health
                let healing = (siblingHealth) + ((characterModifiers.spell_damage_bonus + spell.value) - (siblingModifiers.defense))
                handleSiblingHealth(Math.min(Math.max(healing, min), max))
                console.log(siblingHealth)
            }
            if (characterHealth > 0) {
                let min = 0
                let max = character.health
                let healing = (characterHealth) + ((characterModifiers.spell_damage_bonus) - (characterModifiers.defense))
                handleCharacterHealth(Math.min(Math.max(healing, min), max))
            }
        }
        else if (spellArray.includes(spell.name)) {
            let min = 0
            let max = enemy.health
            handleCharacterModifiers(character.id)
            handleEnemyModifiers(enemy.id)

            let damage = (enemyHealth) - ((characterModifiers.spell_damage_bonus + spell.value) - (enemyModifiers.defense))
            handleEnemyHealth(Math.min(Math.max(damage, min), max))
        }
        handleTurns()
    }

    const handleShow = () => {
        setShow(!show)
    }

    const showSpells = () => {
        if (show) {
            
            if (enemy.name === "The Old One" && enemyHealth <= (enemy.health*.3)) {
                
                let filteredSpells = character.spells.filter(spell => spell.name === "Holy")
            return filteredSpells.map(spell => <Spells key={spell.id} character={character} enemy={enemy} enemyHealth={enemyHealth} spell={spell} castSpell={castSpell}/>)
            }
            else {let filteredSpells = character.spells.filter(spell => spell.name !== "Holy")
                return filteredSpells.map(spell => <Spells key={spell.id} character={character} enemy={enemy} enemyHealth={enemyHealth} spell={spell} castSpell={castSpell}/>)}
        }
        
    }

    return(
        <div>
            {character ?
            <div>
            <h1>{character.name}</h1>
            <h2>{character.klass}</h2>
            <h4>Level: {character.level}</h4>
            <h3>{characterHealth}</h3>
            {turn === 4 ?
            <div>
            <button onClick={attack}>Attack</button>
            <button onClick={handleShow}>Spells</button>
            {showSpells()}
            </div>
            :
            null}
            </div>
            :
            null}
        </div>
    )
}

export default CharacterUI