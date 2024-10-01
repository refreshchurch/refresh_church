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
                                    Privacy Policy
                                </h1>
                            </div>
                        </div>
                        <div className="mx-auto max-w-3xl mt-8 prose prose-gray dark:prose-invert">
                            <p>
                                At Refresh Church, the privacy of our visitors is of extreme importance to us. This privacy policy document outlines the types of personal information is received and collected by Refresh Church and how it is used.
                            </p>
                            <br/>
                            <b>Log Files</b>
                            <p>
                                Like many other Web sites, Refresh Church makes use of log files. The information inside the log files includes internet protocol (IP) addresses, type of browser, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track user’s movement around the site, and gather demographic information. IP addresses, and other such information are not linked to any information that is personally identifiable.
                            </p>
                            <br/>
                            <b>Cookies and Web Beacons</b>
                            <p>
                                Refresh Church does use cookies to store information about visitors preferences, record user-specific information on which pages the user access or visit, customize Web page content based on visitors browser type or other information that the visitor sends via their browser.
                            </p>
                            <br/>
                            <b>DoubleClick DART Cookie</b>
                            <ul className="list-disc list-inside">
                                <li>
                                    Google, as a third party vendor, uses cookies to serve ads on Refresh Church.
                                </li>
                                <li>
                                    Google’s use of the DART cookie enables it to serve ads to users based on their visit to Refresh Church and other sites on the Internet.
                                </li>
                                <li>
                                    Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at the following URL – <a href="https://www.google.com/policies/privacy/">https://www.google.com/policies/privacy/</a>.
                                </li>
                            </ul>
                            <p>

                                These third-party ad servers or ad networks use technology to the advertisements and links that appear on Refresh Church send directly to your browsers. They automatically receive your IP address when this occurs. Other technologies ( such as cookies, JavaScript, or Web Beacons ) may also be used by the third-party ad networks to measure the effectiveness of their advertisements and / or to personalize the advertising content that you see.
                                <br/>
                                <br />
                                Refresh Church has no access to or control over these cookies that are used by third-party advertisers.
                                <br />
                                <br />
                                You should consult the respective privacy policies of these third-party ad servers for more detailed information on their practices as well as for instructions about how to opt-out of certain practices. Refresh Church‘s privacy policy does not apply to, and we cannot control the activities of, such other advertisers or web sites.
                                <br />
                                <br />
                                If you wish to disable cookies, you may do so through your individual browser options. More detailed information about cookie management with specific web browsers can be found at the browser’s respective websites.
                            </p>

                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}