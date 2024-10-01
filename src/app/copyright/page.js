/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"

export default function Component() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Copyright Notice
                                </h1>
                            </div>
                        </div>
                        <div className="mx-auto max-w-3xl mt-8 prose prose-gray dark:prose-invert">
                            <p>
                                This website and its content is copyright of Refresh Church – © Refresh Church 2024. All rights reserved.
                                <br />
                                <br />
                                Any redistribution or reproduction of part or all of the contents in any form is prohibited other than the following:
                            </p>
                            <br />

                            <ul className="list-disc list-inside">
                                <li>
                                    you may print or download to a local hard disk extracts for your personal and non-commercial use only
                                </li>
                                <li>
                                    you may copy the content to individual third parties for their personal use, but only if you acknowledge the website as the source of the material
                                </li>
                            </ul>
                            <br />
                            <p>
                                You may not, except with our express written permission, distribute or commercially exploit the content. Nor may you transmit it or store it in any other website or other form of electronic retrieval system.

                            </p>

                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}