import Image from "next/image";

export default function TopBar() {
    return (
        <div className="text-white fixed flex h-16 w-screen items-center z-50 bg-slate-950 backdrop-blur-2xl bg-opacity-50">
            <div className="ml-10 mr-4 hidden md:flex">
                <a
                    className="flex items-center justify-center space-x-2 text-2xl font-bold py-6 text-center text-neutral-600 dark:text-gray-100 selection:bg-emerald-500 mr-10"
                    href="/">
                    <div
                        className="relative h-8 w-8 md:h-6 md:w-6 border border-white text-white flex items-center justify-center rounded-md text-sm antialiased">
                        <Image src="/icon.png" alt="icon" width={100} height={100}/>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-white dark:text-white">DreamFactory</h1>
                    </div>
                </a>
            </div>


            <a className="ml-10 inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
               type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:rn:"
               data-state="closed" href="/">
                <div
                    className="relative h-8 w-8 md:h-6 md:w-6 border border-white text-white flex items-center justify-center rounded-md text-sm antialiased">
                    <Image src="/icon.png" alt="icon" width={100} height={100}/>
                </div>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium xl:flex">
                <a
                    className="transition-colors hover:text-foreground/80 text-foreground/60 hidden sm:block"
                    href="/about">About</a>
                <a
                    className="transition-colors hover:text-foreground/80 text-foreground/60 hidden sm:block"
                    href="/pricing">Contact</a>
                <a
                    className="transition-colors hover:text-foreground/80 text-foreground/60 hidden sm:block"
                    href="https://github.com/dreamfactory24/DreamFactory/">Github</a>
            </nav>
            <div className="hidden md:flex items-center right-6 fixed">
                <Image className="m-2" src="/Tsinghua_University_Logo.svg" alt="TsingHua" width={35} height={35}/>
                <Image className="m-2" src="/University_of_Luxembourg.svg" alt="Luxembourg" width={35} height={35}/>
            </div>
        </div>

    )
}
