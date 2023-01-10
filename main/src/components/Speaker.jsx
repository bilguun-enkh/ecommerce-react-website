import { Star, StarFill, StarHalf } from "react-bootstrap-icons"
import speaker from "../data/speaker"

export default function Speaker() {
    const speakerData = speaker.map(data => {
        return (
            <div className="speaker-div">
                <img src={data.url} className="speaker-img"></img>
                <div>
                    <h5>{data.title}</h5>
                    <h6>{data.cost}</h6>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="speaker-div">
                <img src="speaker.png" className="speaker-img"></img>
                <div>
                    <h5>JBL bar 2.1 deep bass</h5>
                    <h6>$11.70</h6>
                    <StarFill /> <StarFill /> <StarFill /> <StarHalf /> <Star/>
                </div>
            </div>
        </div>
    )
}