import MinusIcon from "../icons/minusIcon";
import PlusIcon from "../icons/plusIcon";

const GoldCounter = ({
    currentGold,
    setCurrentGold,
}) => {

    return(
        <div className="p-4 border-2 border-black rounded-xl w-max">
            <div className="flex items-center">
                <h2 className="text-2xl">Gold</h2>
                <div className="flex items-center ml-4 gap-x-1">

                    <button
                        onClick={() =>
                            setCurrentGold(
                                currentGold + 10
                            )
                        }
                    >
                        <PlusIcon className={"w-4 h-4"} />
                    </button>
                    <button
                        onClick={() =>
                            setCurrentGold(
                                currentGold - 10
                            )
                        }
                    >
                        <MinusIcon className={"w-4 h-4"} />
                    </button>
                    <button
                        onClick={() =>
                            setCurrentGold(
                                currentGold + 1
                            )
                        }
                    >
                        <PlusIcon className={"w-2 h-2"} />
                    </button>
                    <button
                        onClick={() =>
                            setCurrentGold(
                                currentGold - 1
                            )
                        }
                    >
                        <MinusIcon className={"w-2 h-2"} />
                    </button>
                </div>
            </div>
            <div className="mt-2 text-3xl w-full flex justify-end">
                {currentGold}
            </div>

        </div>
    )

}

export default GoldCounter