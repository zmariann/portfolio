interface Gallery {
  title: string;
  description: string;
  images: string[];
  alt: string;
}

export default function Horizontal(props: Gallery) {
  const title: string = props.title;
  const description: string = props.description;
  const images: string[] = props.images;
  const alt: string = props.alt;

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-full md:w-[70%] mt-[0%] md:mt-[3%] pl-2 pr-2 md:pl-[0px] md:pr-[0px]">
        <div className="horizontalGal mb-2 mt-[25%] md:mt-[10%]">{title}</div>
        <div className="text-sm md:text-base">{description}</div>
      </div>

      <div className="flex justify-center items-center flex-col mt-[2%] w-full md:w-[70%]">
        {images.map((image) => (
          <img
            className="w-full mb-[4%] h-auto"
            src={image}
            alt={alt}
          />
        ))}
      </div>
    </div>
  );
}
