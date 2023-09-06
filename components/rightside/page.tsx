import PerSonalCard from "./personal_data";
import RightHeader from "./rightheader";

const RightSide = () => {
    return (
        <div className=" m-auto sm:ml-5 md:ml-10">
        <RightHeader />
        
        <PerSonalCard />
        </div>
    )
}

export default RightSide;