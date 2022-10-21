import { useEnemy } from './EnemyContext'
import { useCharacter } from './CharacterContext'


function EnemyUI() {
    const { enemy, enemyHealth, enemyModifiers, handleEnemyModifiers } = useEnemy()
    const { character, sibling, characterHealth, siblingHealth, characterModifiers, siblingModifiers, handleCharacterHealth, handleSiblingHealth, handleSiblingModifiers, handleCharacterModifiers } = useCharacter()
    
    
    console.log()

    const handleTurn = () => {
        const attack = () => {
            let paladin = [1, 3, 4]
            let caster = [2]
            let target = Math.floor(Math.random() * 4 + 1)

            handleEnemyModifiers(enemy.id)
            
            if (caster.includes(target)) {
                handleCharacterModifiers(character.id)

                let damage = (characterHealth) - ((enemyModifiers.attack_damage) - (characterModifiers.defense))

                handleCharacterHealth(damage)
            }
            else if (paladin.includes(target)) {
                handleSiblingModifiers(sibling.id)

                let damage = (siblingHealth) - ((enemyModifiers.attack_damage) - (siblingModifiers.defense))

                handleSiblingHealth(damage)
            }
        }

        const castSpell = () => {
            let paladin = [1, 3, 4]
            let caster = [2]
            let target = (Math.floor(Math.random() * 4 + 1))

            handleEnemyModifiers(enemy.id)
            
            if (caster.includes(target)) {
                handleCharacterModifiers(character.id)
            
                let damage = (characterHealth) - ((enemyModifiers.spell_damage_bonus + enemy.spells[Math.floor(Math.random() * (enemy.spells.length))].value) - (characterModifiers.defense))
                
                handleCharacterHealth(damage)
                }
            else if (paladin.includes(target)) {
                handleCharacterModifiers(character.id)
            
                let damage = (siblingHealth) - ((enemyModifiers.spell_damage_bonus + enemy.spells[Math.floor(Math.random() * (enemy.spells.length))].value) - (siblingModifiers.defense))
                
                handleSiblingHealth(damage)
            }
        }   

        if (enemy.name === "The Rank") {
            attack()
        }
        else if (enemy.name === "The Old One")  {
            let attack = [1, 2]
            let spell = [3]
            let attackType = Math.floor(Math.random() * 3 + 1)

            if (attack.includes(attackType)) {
                attack()
            }
            else if (spell.includes(attackType)) {
                castSpell()
            }
                
        }
        }


    return(
        <div>
            {enemy ?
            <div>
            <h1>{enemy.name}</h1>
            <h4>Level: {enemy.level}</h4>
            <h3>{enemyHealth}</h3>
            </div>
            :
            null}
        </div>
    )
}

export default EnemyUI