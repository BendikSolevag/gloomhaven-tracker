import CheckmarkIcon from "../icons/checkmarkIcon";
import MinusIcon from "../icons/minusIcon";
import PlusIcon from "../icons/plusIcon";

const CheckmarkPoints = ({
    currentCheckmarkPoints,
    setCurrentCheckmarkPoints,
}) => {
    const allItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    return (
        <div className="p-4 border-2 border-black rounded-xl w-max">
            <div>
                <div className="flex mb-4">
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
                <ul>
                    <div className="flex items-center">
                        <CheckmarkIcon className={"w-8 h-8"} />:
                        {allItems.slice(0, 3).map((i) => (
                            <li
                                className={`${
                                    i <= currentCheckmarkPoints
                                        ? ""
                                        : "text-white"
                                } border-2 border-black mx-1 px-2`}
                            >
                                x
                            </li>
                        ))}

                        <CheckmarkIcon className={"ml-4 w-8 h-8"} />:
                        {allItems.slice(3, 6).map((i) => (
                            <li
                                className={`${
                                    i <= currentCheckmarkPoints
                                        ? ""
                                        : "text-white"
                                } border-2 border-black mx-1 px-2`}
                            >
                                x
                            </li>
                        ))}

                        <CheckmarkIcon className={"ml-4 w-8 h-8"} />:
                        {allItems.slice(6, 9).map((i) => (
                            <li
                                className={`${
                                    i <= currentCheckmarkPoints
                                        ? ""
                                        : "text-white"
                                } border-2 border-black mx-1 px-2`}
                            >
                                x
                            </li>
                        ))}
                    </div>
                    <div className="mt-4 flex items-center">
                        <CheckmarkIcon className={"w-8 h-8"} />:
                        {allItems.slice(9, 12).map((i) => (
                            <li
                                className={`${
                                    i <= currentCheckmarkPoints
                                        ? ""
                                        : "text-white"
                                } border-2 border-black mx-1 px-2`}
                            >
                                x
                            </li>
                        ))}
                        <CheckmarkIcon className={"ml-4 w-8 h-8"} />:
                        {allItems.slice(12, 15).map((i) => (
                            <li
                                className={`${
                                    i <= currentCheckmarkPoints
                                        ? ""
                                        : "text-white"
                                } border-2 border-black mx-1 px-2`}
                            >
                                x
                            </li>
                        ))}

                        <CheckmarkIcon className={"ml-4 w-8 h-8"} />:
                        {allItems.slice(15, 18).map((i) => (
                            <li
                                className={`${
                                    i <= currentCheckmarkPoints
                                        ? ""
                                        : "text-white"
                                } border-2 border-black mx-1 px-2`}
                            >
                                x
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default CheckmarkPoints;
