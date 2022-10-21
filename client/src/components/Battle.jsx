import DeckerUI from "./DeckerUI";
import CharacterUI from "./CharacterUI";
import EnemyUI from "./EnemyUI";
import { useCharacters } from './CharacterContext'

function Battle() {

    return (
        <div>
            <DeckerUI />
            <CharacterUI />
            <EnemyUI />
        </div>
    )
}

export default Battle