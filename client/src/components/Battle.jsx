import { useState } from 'react'
import DeckerUI from "./DeckerUI";
import CharacterUI from "./CharacterUI";
import EnemyUI from "./EnemyUI";
import { useEnemy } from "./EnemyContext"
import { useCharacter } from './CharacterContext'

function Battle() {
const [turn, setTurn] = useState(1)

const { enemy, enemyHealth, enemyModifiers, handleEnemyModifiers } = useEnemy()
const { character, sibling, characterHealth, siblingHealth, characterModifiers, siblingModifiers, handleCharacterHealth, handleSiblingHealth, handleSiblingModifiers, handleCharacterModifiers } = useCharacter()

const handleTurn = () => {
    const attack = () => {
        let min = 0
        let max = enemy.health
        let paladin = [1, 3, 4]
        let caster = [2]
        let target = Math.floor(Math.random() * 4 + 1)

        handleEnemyModifiers(enemy.id)
        
        if (caster.includes(target) && characterHealth > 0) {
            handleCharacterModifiers(character.id)

            let damage = (characterHealth) - ((enemyModifiers.attack_damage) - (characterModifiers.defense))

            handleCharacterHealth(Math.min(Math.max(damage, min), max))
        }
        else if (paladin.includes(target) && siblingHealth > 0) {
            handleSiblingModifiers(sibling.id)

            let damage = (siblingHealth) - ((enemyModifiers.attack_damage) - (siblingModifiers.defense))

            handleSiblingHealth(Math.min(Math.max(damage, min), max))
        }
    }

    const castSpell = () => {
        let min = 0
        let max = enemy.health
        let paladin = [1, 3, 4]
        let caster = [2]
        let target = (Math.floor(Math.random() * 4 + 1))

        handleEnemyModifiers(enemy.id)
        
        if (caster.includes(target) && characterHealth > 0) {
            handleCharacterModifiers(character.id)
        
            let damage = (characterHealth) - ((enemyModifiers.spell_damage_bonus + enemy.spells[Math.floor(Math.random() * (enemy.spells.length))].value) - (characterModifiers.defense))
            
            handleCharacterHealth(Math.min(Math.max(damage, min), max))
            }
        else if (paladin.includes(target) && siblingHealth > 0) {
            handleCharacterModifiers(character.id)
        
            let damage = (siblingHealth) - ((enemyModifiers.spell_damage_bonus + enemy.spells[Math.floor(Math.random() * (enemy.spells.length))].value) - (siblingModifiers.defense))
            
            handleSiblingHealth(Math.min(Math.max(damage, min), max))
        }
    }   

    if (enemy.name === "The Rank") {
        attack()
    }
    else if (enemy.name === "The Old One")  {
        let hit = [1, 2]
        let spell = [3]
        let attackType = Math.floor(Math.random() * 3 + 1)

        if (hit.includes(attackType)) {
            attack()
        }
        else if (spell.includes(attackType)) {
            castSpell()
        }
            
    }
    }
    let enemyTurn = [2]
    const handleTurns = () => {
        let palTurn = [1]
        let charTurn = [3]
        
        if (palTurn.includes(turn) && siblingHealth > 0) {
            setTurn(2)
        }
            else if (siblingHealth === 0) {
                setTurn(2)
            }
        
        if (charTurn.includes(turn) && characterHealth > 0) {
            setTurn(1)
        }
            else if (characterHealth === 0) {
                setTurn(1)
            }
    }

    if (enemyTurn.includes(turn) && enemyHealth > 0) {
        handleTurn()
        setTurn(3)
    }


    return (
        <div>
            <DeckerUI turn={turn} handleTurns={handleTurns}/>
            <CharacterUI turn={turn} handleTurns={handleTurns}/>
            <EnemyUI handleTurns={handleTurns}/>
        </div>
    )
}

export default Battle