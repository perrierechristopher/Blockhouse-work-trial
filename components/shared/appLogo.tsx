import Image from "next/image";
import Link from "next/link";

// Place the logo in the /public folder
export default function AppLogo() {
    return (
        <Link href='/' className="flex-start">
        <div className="flex flex-row items-end space-x-2">
            <Image
            src='/logo.png'
            width={32}
            height={32}
            alt='App Logo'
            priority>
                <span className="text-xl">Application Name</span>
            </Image>
        </div>

        </Link>
    )
    }
