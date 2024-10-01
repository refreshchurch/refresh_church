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
                                    Terms and Conditions
                                </h1>
                            </div>
                        </div>
                        <div className="mx-auto max-w-3xl mt-8 prose prose-gray dark:prose-invert">
                            <p>
                                Welcome to Refresh Church. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Refresh Church‘s relationship with you in relation to this website.
                                <br />
                                The term Refresh Church or ‘us’ or ‘we’ refers to the owner of the website. The term ‘you’ refers to the user or viewer of our website. The use of this website is subject to the following terms of use:
                            </p>
                            <ul className="list-disc list-inside">
                                <li>
                                    The content of the pages of this website is for your general information and use only. It is subject to change without notice.
                                </li>
                                <li>
                                    Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
                                </li>
                                <li>
                                    Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
                                </li>
                                <li>
                                    This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
                                </li>
                                <li>
                                    All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.
                                </li>
                                <li>
                                    Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
                                </li>
                                <li>
                                    From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
                                </li>
                                <li>
                                    You may not create a link to this website from another website or document without Refresh Church‘s prior written consent.
                                </li>
                            </ul>

                        </div>
                    </div>
                 </section>
             </main>
         </div>
    )
}