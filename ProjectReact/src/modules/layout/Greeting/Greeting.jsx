function Greeting ({ ...props }) {
  const styles = `mt-[-1rem] p-4 flex flex-col gap-0 p-4 items-center 
                  sm:mt-4 sm:items-start`

  return (
    <div className={styles}>
      <h1 className='text-3xl font-bold tracking-tight sm:text-4xl'></h1>
    </div>
  )
}

export default Greeting
