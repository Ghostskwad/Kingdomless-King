import { useState } from 'react'
import { useSibling } from './DeckerContext'
import { useEnemy } from './EnemyContext'
import ProgressBar from "@ramonak/react-progress-bar"
import Spells from './Spells'
// import { useEnemy } from './EnemyContext'


function DeckerUI({ turn, handleTurns }) {
    const [show, setShow] = useState(false)
    const { sibling, siblingHealth, siblingModifiers, handleSiblingModifiers } = useSibling()
    const { enemy, enemyHealth, enemyModifiers, handleEnemyHealth, handleEnemyModifiers } = useEnemy()

    const attack = () => {
        let min = 0
        let max = enemy.health
        handleSiblingModifiers(sibling.id)
        handleEnemyModifiers(enemy.id)
        
        let damage = (enemyHealth) - ((siblingModifiers.attack_damage) - (enemyModifiers.defense))
        handleEnemyHealth(Math.min(Math.max(damage, min), max))
        handleTurns()
    }

    const castSpell = (spell) => {
        let min = 0
        let max = enemy.health
        handleSiblingModifiers(sibling.id)
        handleEnemyModifiers(enemy.id)

        let damage = (enemyHealth) - ((siblingModifiers.spell_damage_bonus + spell.value) - (enemyModifiers.defense))
        handleEnemyHealth(Math.min(Math.max(damage, min), max))
        handleTurns()
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
            {sibling ? <ProgressBar completed={siblingHealth} maxCompleted={sibling.health} customLabel={sibling.name} bgColor="#EB9612"/> : null}
            {turn === 1 ?
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

export default DeckerUI