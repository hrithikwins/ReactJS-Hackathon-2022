import Head from "next/head";
import Image from "next/image";
import RiveComponentFlutter from "@components/rive-component";
import RiveComponentSearch from "@components/rive-search";
import styles from "@styles/Home.module.css";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="text-3xl font-bold underline">Hello world!</h1>
                <div className="md:h-screen">
                    <div className="h-40 bg-green-500">Hii</div>
                    <div className="flex flex-col md:flex-row ">
                        {/* appbar here */}
                        <div className="w-full md:w-1/2">
                            <div className=" pt-24 md:py-24 font-bold text-5xl text-center text-blue-600">
                                Build apps for any screen
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="">
                                    <input type={"text"} />
                                </div>
                                <div className=" h-6 w-6 md:h-40 md:w-40">
                                    <RiveComponentSearch />
                                </div>
                            </div>
                        </div>
                        <div className="w-full  p-8 md:w-1/2">
                            <RiveComponentFlutter
                                mouseEnterEvents={console.log("playing")}
                            />
                        </div>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <span className={styles.logo}>
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer>
        </div>
    );
}
