import { useEnemy } from './EnemyContext'
import ProgressBar from "@ramonak/react-progress-bar"




function EnemyUI() {
    const { enemy, enemyHealth } = useEnemy()


    return(
        <div>
            {enemy ?
            <div>
            <h1>{enemy.name}</h1>
            <h4>Level: {enemy.level}</h4>
            <h3>{enemyHealth}</h3>
            {enemy ? <ProgressBar completed={enemyHealth} maxCompleted={enemy.health} customLabel={enemy.name} bgColor="#7FFF6B"/> : null}
            </div>
            :
            null}
        </div>
    )
}

export default EnemyUI