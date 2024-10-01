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
                                    Disclaimer
                                </h1>
                            </div>
                        </div>
                        <div className="mx-auto max-w-3xl mt-8 prose prose-gray dark:prose-invert">
                            <p>
                                The information contained in this website is for general information purposes only. The information is provided by Refresh Church and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
                                <br />
                                <br />
                                In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
                                <br />
                                <br />
                                Through this website you are able to link to other websites which are not under the control of Refresh Church. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                                <br />
                                <br />
                                Every effort is made to keep the website up and running smoothly. However, Refresh Church takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}