import useState from 'react'

function AddCookies() {
  const [cookieName, setCookieName] = useState('')
  const [cookieDescription, setCookieDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!cookieName || !cookieDescription) {
        alert('Please fill in all fields')
      return
    }

    alert('Cookie Added Successfully!')
    
  }

  return (
    <form
    onSubmit={handleSubmit}>
      <h2>Add a New Cookie</h2>

      <input 
        type="text"
        placeholder="Cookie Name"
        value={cookieName}
        onChange={(e) => setCookieName(e.target.value)}
      />
      <input 
        type="number"
        placeholder="Cookie Price"
        value={cookiePrice}
        onChange={(e) => setCookiePrice(e.target.value)}
      />
      <button type="submit">Add Cookie</button>
    </form>
  )
}

export default AddCookies