import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-full'>
      <div className="mx-auto max-w-xl">
        <h1 className='text-4xl font-semibold'>This is a simple Next application.</h1>
        <h2 className='text-2xl mt-4 font-semibold'>Tech Stack</h2>
        <ul className='list list-disc list-inside'>
          <li>Next.js</li>
          <li>Mongoose</li>
          <li>Typescript</li>
        </ul>
      </div>
    </main>
  )
}
