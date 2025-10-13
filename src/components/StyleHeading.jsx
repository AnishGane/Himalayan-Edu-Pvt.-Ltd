const StyledHeading = ({
  text,
  primaryColor = 'text-cta-red',
  bigSize = 'text-[51px]',
  smallSize = 'text-[27px]',
}) => {
  const words = text.split(' ');

  return (
    <h1 className="mb-2 leading-8 break-words uppercase sm:mb-0 md:leading-9">
      {words.map((word, i) => (
        <span key={i} className="mr-2 font-medium">
          <span className={`${primaryColor} text-[40px] md:${bigSize} `}>{word.charAt(0)}</span>
          <span className={`${smallSize}`}>{word.slice(1)}</span>
        </span>
      ))}
    </h1>
  );
};

export default StyledHeading;
