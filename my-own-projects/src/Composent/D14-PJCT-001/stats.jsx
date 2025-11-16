export default function Stats(props){
    // Calculate Count Of All Users in Our Data
    const Nb_Users = props.data_us.reduce(acc => acc + 1, 0)
    return(
        <>
            <h1>Statments</h1><br />
            <h4>Nombre Des utilisateur: {Nb_Users}</h4>
        </>
    )
}