import Link from "next/link"

const NotFound = () => {
  return (
    <div>
      <h2>Not Found Page</h2>
      <h3>Click Here to Redirect <Link href="/">Home</Link></h3>
    </div>
  )
}

export default NotFound