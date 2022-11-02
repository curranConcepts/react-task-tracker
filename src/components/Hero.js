

const Hero = (user, time, pay) => {
  return (
    <div>
    <h1>Hello {user.name}</h1>
    <p>You have worked a total of {} hours, and made ${}, for an average of {} per hour.</p>
    </div>
  )
}

export default Hero