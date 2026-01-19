const Card = ({ title, description, image, className='' }) => {
  return (
    <div
      className={`
        flex 
        gap-3
        items-center justify-center 
        p-6 
        border border-gray-400 rounded-2xl
        bg-white/5 
        backdrop-blur 
        hover:bg-white/10 
        transition-colors
        ${className}
    `}>
      <div className="card-image">
        {image && (
          <img src={image} alt={title} className="w-full" />
        )}
      </div>
      <div className="card-body text-center md:text-left">
        <h3 className="accent-text text-xl font-bold mb-3">{title}</h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  )
}

export default Card