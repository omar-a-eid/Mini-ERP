import LinkContent from "../linkContent/LinkContent";

interface DropdownLinkProps {
  image: string;
  text: string;
  alt: string;
  active?: boolean;
  downArrow: string;
}

export default function DropdownLink({image, text, alt, downArrow, active = false}:DropdownLinkProps) {
  return (
    <div  className={active ? "link active" : "link"}>
      <LinkContent image={image} text={text} alt={alt} downArrow={downArrow}/>
    </div>
  )
}