import CheckmarkIcon from "../icons/checkmarkIcon";
import MinusIcon from "../icons/minusIcon";
import PlusIcon from "../icons/plusIcon";

const CheckmarkPoints = ({
    currentCheckmarkPoints,
    setCurrentCheckmarkPoints,
}) => {
    const allItems = [...Array(18)];
    return (
        <div className="p-2 border-2 border-black rounded-xl">
            <div>
                <div className="flex">
                    <h2 className="text-2xl">Checkmark points</h2>
                    <button
                        onClick={() =>
                            setCurrentCheckmarkPoints(
                                currentCheckmarkPoints + 1
                            )
                        }
                    >
                        <PlusIcon className={"w-4 h-4 mx-2"} />
                    </button>
                    <button
                        onClick={() =>
                            setCurrentCheckmarkPoints(
                                currentCheckmarkPoints - 1
                            )
                        }
                    >
                        <MinusIcon className={"w-4 h-4 mx-2"} />
                    </button>
                </div>
                <ul className="flex">
                    {allItems.map((item, i) => (
                        <>
                            {i % 3 === 0 && (
                                <>
                                    <CheckmarkIcon className="w-4 h-4" />:
                                </>
                            )}
                            <li
                                className={`${
                                    i <= currentCheckmarkPoints
                                        ? "text-white"
                                        : ""
                                } border-2 p-2`}
                            >
                                {i}
                            </li>
                        </>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CheckmarkPoints;
