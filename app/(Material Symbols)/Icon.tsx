import './google-css2-api.scss'

type Props = {
  id?: string,
  me: boolean
}

export default function Icon({ id = 'adjust' }: Props) {
  return (
    <span className='material-symbols-rounded'>
      {id}
    </span>
  )
}
