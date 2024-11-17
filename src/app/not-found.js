// src/app/not-found.js

import Link from 'next/link';

export default function NotFound() {
  return (
<section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <img className="mx-auto mb-4" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg" alt="404 Not Found"/>
            <h1 className="mb-4 text-2xl font-extrabold text-primary-600 dark:text-primary-500">404 Not Found</h1>
            <p className="mb-10 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Whoops! That page doesn’t exist.</p>
            <p className="mb-4 text-gray-500 dark:text-gray-400">Here are some helpful links instead:</p>
            <ul className="flex justify-center items-center space-x-4 text-gray-500 dark:text-gray-400">
                <li>
                    <Link href="/" className="underline hover:text-gray-900 dark:hover:text-white">home</Link>
                </li>
                <li>
                    <Link href="/sermons" className="underline hover:text-gray-900 dark:hover:text-white">sermons</Link>
                </li>
                <li>
                    <Link href="/first-time-here" className="underline hover:text-gray-900 dark:hover:text-white">first time heres</Link>
                </li>
                <li>
                    <Link href="/contact" className="underline hover:text-gray-900 dark:hover:text-white">contact</Link>
                </li>
            </ul>
        </div>   
    </div>
</section>
  );
}
