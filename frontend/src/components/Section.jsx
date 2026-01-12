const Section = (props) => {
  return (
    <section className="w-full flex flex-col items-center">
      { props.children }
    </section>
  )
}

export default Section