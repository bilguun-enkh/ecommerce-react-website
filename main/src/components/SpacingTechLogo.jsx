import spacinglogo from "../data/spacinglogo"

export default function SpacingTechLogo() {

    const img = spacinglogo.map(data => {
        return (
            <div>
                <img src={data.url} alt="" />
            </div>
        )
    })

    return (
        <div className="spacing-tech-div">
            {img}
        </div>
    )
}