'use client';



export default function FooterComponent() {

  return (
    <footer class="bg-gray-50 dark:bg-gray-800 py-8 shadow-sm mt-10">
      <div class="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-10">
        <div class="flex flex-col items-start border-b pb-6 sm:flex-row sm:items-center sm:justify-around sm:ms-0 ms-10">
          <p class="text-gray-700 dark:text-gray-400">
            <strong>During the Week</strong><br />
            Refresh HQ
            <a href="https://maps.app.goo.gl/tttX16azxxXtdhbb9" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline ml-2">Get Directions</a>
          </p>
          <p class="text-gray-700 dark:text-gray-400">
            <strong>Sunday’s at 9:00 AM & 10:30 AM</strong><br />
            Owyhee High School
            <a href="https://maps.app.goo.gl/QVoYXC8LbYkQkN3s7" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline ml-2">Get Directions</a>
          </p>

          <div class="flex space-x-4">
            <a href="/ig">
              <svg className=" w-8 h-8 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" />
              </svg>
            </a>

            <a href="/fb">
              <svg className="pb-0.5 w-8 h-8 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
              </svg>
            </a>

            <a href="/yt">
              <svg className="w-8 h-8 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div class="flex flex-wrap justify-center items-center text-sm font-medium text-gray-700 dark:text-gray-400 space-x-4 pb-4 mt-2">
          <a href="#" class="hover:underline">Copyright Notice</a>
          <a href="#" class="hover:underline">Disclaimer</a>
          <a href="#" class="hover:underline">Privacy Policy</a>
          <a href="#" class="hover:underline">Terms and Conditions</a>
        </div>

        {/*  Copyright */}
        <div class="text-center text-sm text-gray-500 dark:text-gray-400">
          <p>All rights reserved. ©2024</p>
        </div>
      </div>
    </footer>

  )
}