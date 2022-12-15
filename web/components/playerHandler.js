import { useEffect } from "react";
import ArrowIcon from "./icons/arrowIcon";
import Link from "next/link";

export default ({ router, currentUser, setCurrentUser, players }) => {
    console.log(router.pathname);
    useEffect(() => {
        if (router.query.user) {
            setCurrentUser(router.query.user);
        } else {
            setCurrentUser("none");
        }
    });

    return (
        <div className="my-4 font-karla">
            {currentUser != "none" && (
                <Link
                    href={router.pathname}
                    className="w-max flex items-center border-b-[1px] border-white hover:border-black"
                >
                    <ArrowIcon
                        classNames={"transform rotate-180 h-4 w-4 mr-4"}
                    />
                    Log out of {currentUser}'s profile
                </Link>
            )}
            {currentUser === "none" && (
                <>
                    <h1 className="mb-4 mt-[40vh]">
                        Which player would you like to log in as?
                    </h1>
                    <ul className="text-lg">
                        {players.map((player) => (
                            <li key={player._id}>
                                <Link
                                    href={`${router.pathname}?user=${player.name}`}
                                    className="w-max flex items-center border-b-[1px] border-white hover:border-black"
                                >
                                    {player.name}
                                    <ArrowIcon classNames={"h-4 w-4 ml-4"} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};
