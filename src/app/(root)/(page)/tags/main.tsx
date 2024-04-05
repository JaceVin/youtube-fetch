import './scss/horizontal-layout.scss'

export default function Main({
    children,
}: Readonly<{
    children?: React.ReactNode
}>) {
  return (<>
    <main id='main' className='vertical-halves'>
      {
        children? (children)
          : (<>
            <div className="placeholder"></div>
            <div className="placeholder"></div>
          </>)
      }
    </main>
  </>)
}