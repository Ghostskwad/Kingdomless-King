import { useState } from 'react'
import DeckerUI from "./DeckerUI";
import CharacterUI from "./CharacterUI";
import EnemyUI from "./EnemyUI";
import { useEnemy } from "./EnemyContext"
import { useCharacter } from './CharacterContext'
import { useSibling } from './DeckerContext'
import { useNavigate } from 'react-router-dom';
// import "./Battle.css"

function Battle() {
const [turn, setTurn] = useState(0)
const navigate = useNavigate()

const { enemy, enemyHealth, enemyModifiers, handleEnemyModifiers, getNewEnemy } = useEnemy()
const { character, characterHealth, characterModifiers, handleCharacterHealth, handleCharacterModifiers } = useCharacter()
const { sibling, siblingHealth, siblingModifiers, handleSiblingHealth, handleSiblingModifiers } = useSibling()

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
            else if (characterHealth === 0) {
                handleSiblingModifiers(sibling.id)

                let damage = (siblingHealth) - ((enemyModifiers.attack_damage) - (siblingModifiers.defense))
    
                handleSiblingHealth(Math.min(Math.max(damage, min), max))}
        if (paladin.includes(target) && siblingHealth > 0) {
            handleSiblingModifiers(sibling.id)

            let damage = (siblingHealth) - ((enemyModifiers.attack_damage) - (siblingModifiers.defense))

            handleSiblingHealth(Math.min(Math.max(damage, min), max))
        }
            else if (siblingHealth === 0) {
                handleCharacterModifiers(character.id)

                let damage = (characterHealth) - ((enemyModifiers.attack_damage) - (characterModifiers.defense))

                handleCharacterHealth(Math.min(Math.max(damage, min), max))
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
            else if(characterHealth === 0) {
                handleSiblingModifiers(sibling.id)

                let damage = (siblingHealth) - ((enemyModifiers.attack_damage) - (siblingModifiers.defense))

                handleSiblingHealth(Math.min(Math.max(damage, min), max))
            }
        if (paladin.includes(target) && siblingHealth > 0) {
            handleCharacterModifiers(character.id)
        
            let damage = (siblingHealth) - ((enemyModifiers.spell_damage_bonus + enemy.spells[Math.floor(Math.random() * (enemy.spells.length))].value) - (siblingModifiers.defense))
            
            handleSiblingHealth(Math.min(Math.max(damage, min), max))
        }
            else if(siblingHealth === 0) {
                handleCharacterModifiers(character.id)
        
                let damage = (characterHealth) - ((enemyModifiers.spell_damage_bonus + enemy.spells[Math.floor(Math.random() * (enemy.spells.length))].value) - (characterModifiers.defense))
            
                handleCharacterHealth(Math.min(Math.max(damage, min), max))
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
    
    const handleTurns = () => {
        if (turn === 1) {
            setTurn(2)}
        if (turn === 4) {
            setTurn(0)
        }
    }
        
    

    if (turn === 0 && siblingHealth > 0) {
        setTurn(1)
    }
        else if (turn === 0 && siblingHealth === 0) {
            setTurn(2)
        }
    if (turn === 2 && enemyHealth > 0) {
        handleTurn()
        setTurn(3)
    }
    if (turn === 3 && characterHealth > 0) {
        setTurn(4)
    }
        else if (turn === 3 && characterHealth === 0) {
            setTurn(0)
        }
    if (turn && siblingHealth === 0 && characterHealth === 0)
        {navigate('/scene')}
    if (enemy) {
        if (enemy.name === "The Rank" && enemyHealth === 0) 
        {getNewEnemy()
        navigate('/scene')}
        else if (enemy.name === "The Old One" && enemyHealth === 0) 
            {navigate('/scene')}}



    return (
        <div>
            <EnemyUI />
            <div id="thing3">
            <DeckerUI turn={turn} handleTurns={handleTurns}/>
            </div>
            <div class="char1">
            <CharacterUI turn={turn} handleTurns={handleTurns}/>
            </div>
            {/* <div class="container">
  <div class="box">
    <span></span>
    <div class="content">
    <DeckerUI turn={turn} handleTurns={handleTurns}/>
      <a href="#">Read More</a>
    </div>
  </div>
  <div class="box">
    <span></span>
    <div class="content">
    <CharacterUI turn={turn} handleTurns={handleTurns}/>
      <a href="#">Read More</a>
    </div>
  </div>
  <div class="box">
    <span></span>
    <div class="content">
    <EnemyUI />
      <a href="#">Read More</a>
    </div>
  </div>
</div> */}
        </div>
    )
}

export default Battle