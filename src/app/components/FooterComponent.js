'use client';

import Image from "next/image";
import Link from "next/link";



export default function FooterComponent() {

  return (
    <>
      {/* OLD Footer */}
      {/* <footer className="bg-gray-50 dark:bg-gray-800 py-8 shadow-sm mt-10">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-10">
          <div className="flex flex-col items-start border-b pb-6 sm:flex-row sm:items-center sm:justify-around sm:ms-0 ms-10">
            <p className="text-gray-700 dark:text-gray-400">
              <strong>During the Week</strong><br />
              Refresh HQ
              <a href="https://maps.app.goo.gl/tttX16azxxXtdhbb9" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-2">Get Directions</a>
            </p>
            <p className="text-gray-700 dark:text-gray-400">
              <strong>Sunday’s at 9:00 AM & 10:30 AM</strong><br />
              Owyhee High School
              <a href="https://maps.app.goo.gl/QVoYXC8LbYkQkN3s7" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-2">Get Directions</a>
            </p>

            <div className="flex space-x-4">
              <a href='https://www.instagram.com/refreshchurchtv/' target="_blank" rel="noopener noreferrer">
                <svg className=" w-8 h-8 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" />
                </svg>
              </a>

              <a href="https://www.facebook.com/myrefreshchurch" target="_blank" rel="noopener noreferrer">
                <svg className="pb-0.5 w-8 h-8 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
                </svg>
              </a>

              <a href="https://www.youtube.com/@refreshchurchtv" target="_blank" rel="noopener noreferrer">
                <svg className="w-8 h-8 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center text-sm font-medium text-gray-700 dark:text-gray-400 space-x-4 pb-4 mt-2">
            <a href="/copyright" className="hover:underline">Copyright Notice</a>
            <a href="/disclaimer" className="hover:underline">Disclaimer</a>
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:underline">Terms and Conditions</a>
          </div>
          
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>All rights reserved. ©2024</p>
          </div>
        </div>
      </footer> */}
      <footer className="bg-white antialiased dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="border-b border-gray-100 py-6 dark:border-gray-700 md:py-8">
            <div className="space-y-4 flex lg:items-center lg:gap-4 lg:space-y-0">
              <div className="w-full gap-4 md:flex md:items-center md:gap-8">
                <a href="/" title="">
                  <Image
                    src='/photos/logo.webp'
                    alt="Refresh Logo"
                    width={138}
                    height={100}
                    className="h-auto"
                  />
                </a>
                <div className="mt-4 w-full md:mt-0">
                  <div className="flex flex-wrap items-center gap-4 text-sm font-medium xl:justify-center">
                    <a href="https://maps.app.goo.gl/QVoYXC8LbYkQkN3s7" title="" className="text-gray-900 hover:underline dark:text-white"> Sunday Service </a>
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                    <a href="https://maps.app.goo.gl/tttX16azxxXtdhbb9" title="" className="text-gray-900 hover:underline dark:text-white"> Refresh HQ </a>
                  </div>
                </div>
                <div className="flex space-x-4 md:pt-0 pt-3">
                  <a href='https://www.instagram.com/refreshchurchtv/' target="_blank" rel="noopener noreferrer">
                    <svg className=" w-8 h-8 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" />
                    </svg>
                  </a>

                  <a href="https://www.facebook.com/myrefreshchurch" target="_blank" rel="noopener noreferrer">
                    <svg className="pb-0.5 w-8 h-8 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
                    </svg>
                  </a>

                  <a href="https://www.youtube.com/@refreshchurchtv" target="_blank" rel="noopener noreferrer">
                    <svg className="w-8 h-8 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 md:py-8 lg:py-16">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-8 xl:grid-cols-5">
              <div>
                <h6 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">About Refresh</h6>
                <ul className="space-y-3">
                  <li>
                    <Link href="/first-time-here" title="" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> First Time Here </Link>
                  </li>

                  <li>
                    <Link href="/leadership" title="" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> Leadership </Link>
                  </li>

                  <li>
                    <Link href="/beliefs" title="" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> Beliefs </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">Your Family</h6>
                <ul className="space-y-3">
                  <li>
                    <Link href="/r-kids" title="" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> Kids </Link>
                  </li>

                  <li>
                    <Link href="/refresh-youth" title="" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> Youth </Link>
                  </li>

                  <li>
                    <Link href="/mens-ministry" title="" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> Men&apos;s Ministry</Link>
                  </li>

                  <li>
                    <Link href="/womens-ministry" title="" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> Women&apos;s Ministry</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">Connect</h6>
                <ul className="space-y-3">
                  <li>
                    <Link href="/discovery" title="" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> Discovery</Link>
                  </li>

                  <li>
                    <Link href="/small-groups" title="" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> Small Groups </Link>
                  </li>

                  <li>
                    <Link href="/shttps://refresh.churchcenter.com/people/forms/301611?_ga=2.212286996.1630180229.1675698110-905807684.1675698110" title="" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> Serve Team</Link>
                  </li>

                  <li>
                    <Link href="/sermons" title="" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> Sermons </Link>
                  </li>

                  <li>
                    <Link href="/events" title="" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> Events </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">Socials</h6>
                <ul className="space-y-3">
                  <li>
                    <Link href="https://www.instagram.com/refreshchurchtv/'" title="" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> Instagram</Link>
                  </li>

                  <li>
                    <Link href="https://www.facebook.com/myrefreshchurch" title="" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> Facebook </Link>
                  </li>

                  <li>
                    <Link href="https://www.youtube.com/@refreshchurchtv" title="" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> Youtube </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">Contact</h6>
                <ul className="space-y-3">
                  <li>
                    <Link href="/contact" title="" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> Contact</Link>
                  </li>                  
                  <li>
                    <Link href="/contact" title="" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> Get Directions</Link>
                  </li>                  
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 bg-gray-50 py-6 text-left dark:border-gray-600 dark:bg-gray-700 sm:text-center md:py-8">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <ul className="flex flex-wrap items-center gap-4 text-sm text-gray-900 dark:text-white sm:justify-center">
              <li>
                <a href="/copyright" className="hover:underline">Copyright Notice</a>
              </li>
              <li>
                <a href="/disclaimer" className="hover:underline">Disclaimer</a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-and-conditions" className="hover:underline">Terms and Conditions</a>
              </li>
            </ul>

            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">All rights reserved. ©2024</p>
          </div>
        </div>
      </footer>
    </>
  )
}