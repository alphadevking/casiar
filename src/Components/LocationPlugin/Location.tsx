import Location from "./types"

const LocationPlugin: React.FC<Location> = (
	{
		locale = '25 Boulevard Street, Lagos, Nigeria',
	}
) => {
    return(
        <small>{locale}</small>
    )
}

export default LocationPlugin