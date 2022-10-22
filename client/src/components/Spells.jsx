function Spells({spell, castSpell}) {

    return (
        <div>
            
            <p onClick={() => castSpell(spell)}>{spell.name}</p>
        </div>
    )
}

export default Spells