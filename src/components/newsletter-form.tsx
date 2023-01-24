import { Link } from 'react-router-dom'

export function NewsletterForm({
  submitText = 'Submit',
}: {
  className?: string
  onSubmit: (email: string) => Promise<any>
  submitText?: string
}) {
  return (
    <div className="control mt-8">
      <button
        className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg"
        type="button"
      >
        <Link to="/create">{submitText}</Link>
      </button>
    </div>
  )
}
