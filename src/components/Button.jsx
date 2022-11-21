function Button ({name, orange, wide, clickHandler}) {
  const handleClick = () => {clickHandler(name)}

  const className = [
    'component-button',
    orange ? 'orange' : '',
    wide ? 'wide' : '',
  ]
    return (
      <div className={className.join(' ').trim()}>
        <button onClick={handleClick}>{name}</button>
      </div>
    )
}
export default Button