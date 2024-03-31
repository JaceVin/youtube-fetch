import './scss/google-css2-api.scss';

type Props = {
  id?: string,
}

export default function Icon({
  id = 'adjust'
}: Readonly<Props>
) {
  return (
    <span className='material-symbols-rounded'>
      {id}
    </span>
  )
}
