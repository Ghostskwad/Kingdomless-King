import { useEnemy } from './EnemyContext'



function EnemyUI({ handleTurns }) {
    const { enemy, enemyHealth } = useEnemy()
  


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