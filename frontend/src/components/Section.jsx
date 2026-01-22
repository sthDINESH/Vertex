const Section = (props) => {
  return (
    <section
      id={props.id ? props.id : ''}
      className={`w-full flex flex-col items-center ${props.className? props.className:''}`}
    >
      { props.children }
    </section>
  )
}

export default Section