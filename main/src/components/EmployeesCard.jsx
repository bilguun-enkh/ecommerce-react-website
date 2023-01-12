import AliceCarousel from "react-alice-carousel";
import employees from "../data/employees";

const handleDragStart = (e) => e.preventDefault();

export default function EmployeesCard() {

    const employeesData = employees.map(data => {
        return (
            <div className='employees-border'>
                <div className="employee-title">
                    <img src={data.pic} onDragStart={handleDragStart} role="presentation" />
                    <div className='slider-inner'>
                        <h4>{data.name}</h4>
                    </div>
                </div>
                <div className="employee-description">
                    <h6>{data.description}</h6>
                </div>
            </div>
        )
    })
    return (
        <div className="employee-div">
            <AliceCarousel mouseTracking items={employeesData} disableButtonsControls={true} responsive={{ 0: { items: 3, } }} />
        </div>
    )
}