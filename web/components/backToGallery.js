import { useRouter } from "next/router";
import ArrowIcon from "./icons/arrowIcon";
import Link from "next/link";

export const BackToGallery = () => {
    const router = useRouter();
    return (
        <Link
            href={`/?user=${router.query.user}`}
            className="mb-4 w-max flex items-center border-b-[1px] border-white hover:border-black"
        >
            <ArrowIcon classNames={"h-4 w-4 mr-4 transform rotate-180"} /> Back
            to the gallery
        </Link>
    );
};

export default BackToGallery;
