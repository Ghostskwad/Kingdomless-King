import { useState } from 'react'
import { useCharacter } from './CharacterContext'
import { useEnemy } from './EnemyContext'
import Spells from './Spells'
// import { useEnemy } from './EnemyContext'


function DeckerUI() {
    const [show, setShow] = useState(false)
    const { sibling, siblingHealth, siblingModifiers, handleSiblingModifiers } = useCharacter()
    const { enemy, enemyHealth, enemyModifiers, handleEnemyHealth, handleEnemyModifiers } = useEnemy()

    const attack = () => {
        handleSiblingModifiers(sibling.id)
        handleEnemyModifiers(enemy.id)
        
        let damage = (enemyHealth) - ((siblingModifiers.attack_damage) - (enemyModifiers.defense))
        handleEnemyHealth(damage)

    }

    const castSpell = (spell) => {
        handleSiblingModifiers(sibling.id)
        handleEnemyModifiers(enemy.id)

        let damage = (enemyHealth) - ((siblingModifiers.spell_damage_bonus + spell.value) - (enemyModifiers.defense))
        handleEnemyHealth(damage)
    }

    const handleShow = () => {
        setShow(!show)
    }

    const showSpells = () => {
        if (show) {return sibling.spells.map(spell => <Spells key={spell.id} spell={spell} castSpell={castSpell}/>)}
    }

    return(
        <div>
            {sibling ?
            <div>
            <h1>{sibling.name}</h1>
            <h2>{sibling.klass}</h2>
            <h4>Level: {sibling.level}</h4>
            <h3>{siblingHealth}</h3>
            <button onClick={attack}>Attack</button>
            <button onClick={handleShow}>Spells</button>
            {showSpells()}
            </div>
            :
            null}
        </div>
    )
}

export default DeckerUI